import bcrypt from 'bcryptjs';
import { AdminSession, LoginAttempt, AdminAction } from './types';

// Hardcoded admin password hash (bcrypt with salt rounds 12)
// Password: 7H39E8V8U4PK
const ADMIN_PASSWORD_HASH = '$2b$12$FclzLgK0BbJ1TDa6S.vaGeWli5bagjk8u3GCMy/ish1Rux8PRCDGa';

// Session timeout: 30 minutes in milliseconds
const SESSION_TIMEOUT = 30 * 60 * 1000;

// Lockout settings
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION = 30 * 60 * 1000; // 30 minutes

// Storage keys
const SESSION_KEY = 'stylash_admin_session';
const LOGIN_ATTEMPTS_KEY = 'stylash_login_attempts';
const ADMIN_ACTIONS_KEY = 'stylash_admin_actions';

// Get client IP address (simulated - in production, get from request headers)
function getClientIp(): string {
  if (typeof window === 'undefined') return 'unknown';
  // In a real production environment, this would come from the server
  // For client-side, we'll use a stored value or generate a fingerprint
  let ip = localStorage.getItem('stylash_client_ip');
  if (!ip) {
    // Generate a simple fingerprint for this browser session
    ip = `client-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('stylash_client_ip', ip);
  }
  return ip;
}

// Generate session token
function generateSessionToken(): string {
  return `session-${Date.now()}-${Math.random().toString(36).substr(2, 16)}`;
}

// Check if account is locked
export function isAccountLocked(): boolean {
  if (typeof window === 'undefined') return false;
  
  const attempts = getLoginAttempts();
  const ip = getClientIp();
  const recentAttempts = attempts.filter(
    a => a.ipAddress === ip && !a.successful
  );
  
  // Count failures in the last lockout window
  const cutoffTime = Date.now() - LOCKOUT_DURATION;
  const recentFailures = recentAttempts.filter(
    a => new Date(a.timestamp).getTime() > cutoffTime
  );
  
  if (recentFailures.length >= MAX_FAILED_ATTEMPTS) {
    const lastFailure = recentFailures[recentFailures.length - 1];
    const lockedUntil = new Date(lastFailure.timestamp).getTime() + LOCKOUT_DURATION;
    return Date.now() < lockedUntil;
  }
  
  return false;
}

// Get remaining lockout time in minutes
export function getLockoutTimeRemaining(): number {
  if (typeof window === 'undefined') return 0;
  
  const attempts = getLoginAttempts();
  const ip = getClientIp();
  const recentAttempts = attempts.filter(
    a => a.ipAddress === ip && !a.successful
  );
  
  const cutoffTime = Date.now() - LOCKOUT_DURATION;
  const recentFailures = recentAttempts.filter(
    a => new Date(a.timestamp).getTime() > cutoffTime
  );
  
  if (recentFailures.length >= MAX_FAILED_ATTEMPTS) {
    const lastFailure = recentFailures[recentFailures.length - 1];
    const lockedUntil = new Date(lastFailure.timestamp).getTime() + LOCKOUT_DURATION;
    const remaining = lockedUntil - Date.now();
    return Math.ceil(remaining / 60000); // Convert to minutes
  }
  
  return 0;
}

// Get login attempts from storage
function getLoginAttempts(): LoginAttempt[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(LOGIN_ATTEMPTS_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Save login attempt
function saveLoginAttempt(successful: boolean): void {
  if (typeof window === 'undefined') return;
  
  const attempts = getLoginAttempts();
  const ip = getClientIp();
  
  // Count recent failures for this IP
  const cutoffTime = Date.now() - LOCKOUT_DURATION;
  const recentFailures = attempts.filter(
    a => a.ipAddress === ip && !a.successful && new Date(a.timestamp).getTime() > cutoffTime
  );
  
  const newAttempt: LoginAttempt = {
    id: `attempt-${Date.now()}`,
    ipAddress: ip,
    timestamp: new Date().toISOString(),
    successful,
    failureCount: successful ? 0 : recentFailures.length + 1,
  };
  
  attempts.push(newAttempt);
  
  // Keep only last 100 attempts to prevent storage bloat
  if (attempts.length > 100) {
    attempts.splice(0, attempts.length - 100);
  }
  
  localStorage.setItem(LOGIN_ATTEMPTS_KEY, JSON.stringify(attempts));
}

// Verify admin password
export async function verifyPassword(password: string): Promise<boolean> {
  return bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

// Login admin
export async function loginAdmin(password: string): Promise<{ success: boolean; error?: string }> {
  if (typeof window === 'undefined') {
    return { success: false, error: 'Server-side rendering not supported' };
  }
  
  // Check if account is locked
  if (isAccountLocked()) {
    const minutes = getLockoutTimeRemaining();
    saveLoginAttempt(false);
    return { success: false, error: `Account locked. Try again in ${minutes} minutes.` };
  }
  
  // Verify password
  const isValid = await verifyPassword(password);
  
  if (!isValid) {
    saveLoginAttempt(false);
    const attempts = getLoginAttempts();
    const ip = getClientIp();
    const cutoffTime = Date.now() - LOCKOUT_DURATION;
    const recentFailures = attempts.filter(
      a => a.ipAddress === ip && !a.successful && new Date(a.timestamp).getTime() > cutoffTime
    );
    const remainingAttempts = MAX_FAILED_ATTEMPTS - recentFailures.length;
    
    if (remainingAttempts <= 0) {
      return { success: false, error: 'Account locked for 30 minutes due to too many failed attempts.' };
    }
    
    return { success: false, error: `Invalid password. ${remainingAttempts} attempts remaining.` };
  }
  
  // Create session
  const session: AdminSession = {
    isAuthenticated: true,
    loggedInAt: new Date().toISOString(),
    lastActivity: new Date().toISOString(),
    ipAddress: getClientIp(),
    sessionToken: generateSessionToken(),
  };
  
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  saveLoginAttempt(true);
  
  // Log the login action
  logAdminAction('LOGIN', { ipAddress: session.ipAddress });
  
  return { success: true };
}

// Get current session
export function getSession(): AdminSession | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(SESSION_KEY);
  if (!stored) return null;
  
  const session: AdminSession = JSON.parse(stored);
  
  // Check if session has expired
  const lastActivity = new Date(session.lastActivity).getTime();
  if (Date.now() - lastActivity > SESSION_TIMEOUT) {
    logoutAdmin();
    return null;
  }
  
  return session;
}

// Check if admin is authenticated
export function isAuthenticated(): boolean {
  const session = getSession();
  return session?.isAuthenticated === true;
}

// Update last activity
export function updateActivity(): void {
  if (typeof window === 'undefined') return;
  
  const session = getSession();
  if (session) {
    session.lastActivity = new Date().toISOString();
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
}

// Logout admin
export function logoutAdmin(): void {
  if (typeof window === 'undefined') return;
  
  // Get session directly from storage to avoid infinite loop with getSession()
  const stored = localStorage.getItem(SESSION_KEY);
  if (stored) {
    try {
      const session: AdminSession = JSON.parse(stored);
      logAdminAction('LOGOUT', { sessionToken: session.sessionToken });
    } catch {
      // Ignore parsing errors
    }
  }
  
  localStorage.removeItem(SESSION_KEY);
}

// Log admin action
export function logAdminAction(action: string, details: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  
  const actions = getAdminActions();
  const session = getSession();
  
  const newAction: AdminAction = {
    id: `action-${Date.now()}`,
    action,
    details: {
      ...details,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
    },
    timestamp: new Date().toISOString(),
    ipAddress: session?.ipAddress || getClientIp(),
    sessionToken: session?.sessionToken || 'anonymous',
  };
  
  actions.push(newAction);
  
  // Keep only last 500 actions to prevent storage bloat
  if (actions.length > 500) {
    actions.splice(0, actions.length - 500);
  }
  
  localStorage.setItem(ADMIN_ACTIONS_KEY, JSON.stringify(actions));
}

// Get admin actions
export function getAdminActions(): AdminAction[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(ADMIN_ACTIONS_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Get login attempts for display
export function getLoginAttemptsForDisplay(): LoginAttempt[] {
  return getLoginAttempts().slice(-20).reverse(); // Last 20, most recent first
}

// Audit log storage key
const AUDIT_LOG_KEY = 'stylash_audit_log';

// Get audit log entries
export function getAuditLog(): import('./types').AuditLogEntry[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(AUDIT_LOG_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Add audit log entry
export function addAuditLogEntry(entry: Omit<import('./types').AuditLogEntry, 'id'>): void {
  if (typeof window === 'undefined') return;
  
  const logs = getAuditLog();
  const newEntry: import('./types').AuditLogEntry = {
    ...entry,
    id: `audit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  };
  
  logs.push(newEntry);
  
  // Keep only last 1000 entries
  if (logs.length > 1000) {
    logs.splice(0, logs.length - 1000);
  }
  
  localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(logs));
}

// Get login activity for security panel
export function getLoginActivity(): import('./types').LoginAttempt[] {
  return getLoginAttempts();
}

// Get active sessions (simplified - in real app would track multiple devices)
export function getActiveSessions(): { token: string; ip: string; startedAt: string }[] {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(SESSION_KEY);
  if (!stored) return [];
  
  try {
    const session: import('./types').AdminSession = JSON.parse(stored);
    return [{
      token: session.sessionToken,
      ip: session.ipAddress,
      startedAt: session.loggedInAt,
    }];
  } catch {
    return [];
  }
}

// Force logout a session
export function forceLogoutSession(token: string): void {
  if (typeof window === 'undefined') return;
  
  const stored = localStorage.getItem(SESSION_KEY);
  if (stored) {
    try {
      const session: import('./types').AdminSession = JSON.parse(stored);
      if (session.sessionToken === token) {
        logoutAdmin();
      }
    } catch {
      // Ignore parsing errors
    }
  }
}

// Clear all auth data (for testing)
export function clearAllAuthData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(LOGIN_ATTEMPTS_KEY);
  localStorage.removeItem(ADMIN_ACTIONS_KEY);
  localStorage.removeItem(AUDIT_LOG_KEY);
}
