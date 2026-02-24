module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAuditLogEntry",
    ()=>addAuditLogEntry,
    "clearAllAuthData",
    ()=>clearAllAuthData,
    "forceLogoutSession",
    ()=>forceLogoutSession,
    "getActiveSessions",
    ()=>getActiveSessions,
    "getAdminActions",
    ()=>getAdminActions,
    "getAuditLog",
    ()=>getAuditLog,
    "getLockoutTimeRemaining",
    ()=>getLockoutTimeRemaining,
    "getLoginActivity",
    ()=>getLoginActivity,
    "getLoginAttemptsForDisplay",
    ()=>getLoginAttemptsForDisplay,
    "getSession",
    ()=>getSession,
    "isAccountLocked",
    ()=>isAccountLocked,
    "isAuthenticated",
    ()=>isAuthenticated,
    "logAdminAction",
    ()=>logAdminAction,
    "loginAdmin",
    ()=>loginAdmin,
    "logoutAdmin",
    ()=>logoutAdmin,
    "updateActivity",
    ()=>updateActivity,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-ssr] (ecmascript)");
;
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
function getClientIp() {
    if ("TURBOPACK compile-time truthy", 1) return 'unknown';
    //TURBOPACK unreachable
    ;
    // In a real production environment, this would come from the server
    // For client-side, we'll use a stored value or generate a fingerprint
    let ip;
}
// Generate session token
function generateSessionToken() {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 16)}`;
}
function isAccountLocked() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    const attempts = undefined;
    const ip = undefined;
    const recentAttempts = undefined;
    // Count failures in the last lockout window
    const cutoffTime = undefined;
    const recentFailures = undefined;
}
function getLockoutTimeRemaining() {
    if ("TURBOPACK compile-time truthy", 1) return 0;
    //TURBOPACK unreachable
    ;
    const attempts = undefined;
    const ip = undefined;
    const recentAttempts = undefined;
    const cutoffTime = undefined;
    const recentFailures = undefined;
}
// Get login attempts from storage
function getLoginAttempts() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
// Save login attempt
function saveLoginAttempt(successful) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const attempts = undefined;
    const ip = undefined;
    // Count recent failures for this IP
    const cutoffTime = undefined;
    const recentFailures = undefined;
    const newAttempt = undefined;
}
async function verifyPassword(password) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compare(password, ADMIN_PASSWORD_HASH);
}
async function loginAdmin(password) {
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            success: false,
            error: 'Server-side rendering not supported'
        };
    }
    //TURBOPACK unreachable
    ;
    // Verify password
    const isValid = undefined;
    // Create session
    const session = undefined;
}
function getSession() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const stored = undefined;
    const session = undefined;
    // Check if session has expired
    const lastActivity = undefined;
}
function isAuthenticated() {
    const session = getSession();
    return session?.isAuthenticated === true;
}
function updateActivity() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const session = undefined;
}
function logoutAdmin() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    // Get session directly from storage to avoid infinite loop with getSession()
    const stored = undefined;
}
function logAdminAction(action, details) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const actions = undefined;
    const session = undefined;
    const newAction = undefined;
}
function getAdminActions() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function getLoginAttemptsForDisplay() {
    return getLoginAttempts().slice(-20).reverse(); // Last 20, most recent first
}
// Audit log storage key
const AUDIT_LOG_KEY = 'stylash_audit_log';
function getAuditLog() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function addAuditLogEntry(entry) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const logs = undefined;
    const newEntry = undefined;
}
function getLoginActivity() {
    return getLoginAttempts();
}
function getActiveSessions() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function forceLogoutSession(token) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function clearAllAuthData() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/app/admin/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AdminLayout({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathname === "/admin/login") return;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
            router.push("/admin/login");
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateActivity"])();
    }, [
        router,
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3ecac8fe._.js.map