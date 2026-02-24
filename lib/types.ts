// Booking status types
export type BookingStatus = 'pending_payment' | 'awaiting_verification' | 'confirmed' | 'completed' | 'cancelled' | 'overbooked';

export type PaymentStatus = 'pending' | 'awaiting_verification' | 'paid' | 'refunded';

export type OverbookReason = 'equipment_failure' | 'staff_emergency' | 'double_booked' | 'overtime_previous' | 'other';

export type OverbookResolution = 'rescheduled' | 'refunded' | 'completed_with_compensation' | 'pending';

// Service category for booking fees
export type ServiceCategory = 'lashes' | 'nails' | 'brows' | 'training' | 'hair' | 'underarm' | 'airlashes';

// Service definition
export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number | string; // Can be range like "450-600"
  duration: number | null; // in minutes, null for TBD
  icon: string;
  description?: string;
  notes?: string;
  variants?: { name: string; price: number }[];
}

// Booking data structure
export interface Booking {
  id: string;
  date: string; // ISO date string yyyy-MM-dd
  timeSlot: string; // HH:mm format
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  bookingFee: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: 'gcash' | 'maya' | 'bank_transfer';
  createdAt: string;
  updatedAt: string;
  
  // Overbooking fields
  isOverbooked?: boolean;
  overbookReason?: OverbookReason;
  overbookNotes?: string;
  overbookedAt?: string;
  overbookResolvedAt?: string;
  overbookResolution?: OverbookResolution;
  compensationAmount?: number;
  
  // Admin action tracking
  verifiedBy?: string;
  verifiedAt?: string;
  cancelledBy?: string;
  cancelledAt?: string;
  cancellationReason?: string;
}

// Admin session
export interface AdminSession {
  isAuthenticated: boolean;
  loggedInAt: string;
  lastActivity: string;
  ipAddress: string;
  sessionToken: string;
}

// Login attempt tracking
export interface LoginAttempt {
  id: string;
  ipAddress: string;
  timestamp: string;
  successful: boolean;
  failureCount: number;
  lockedUntil?: string;
}

// Admin action log
export interface AdminAction {
  id: string;
  action: string;
  details: Record<string, unknown>;
  timestamp: string;
  ipAddress: string;
  sessionToken: string;
}

// Audit log entry for detailed tracking
export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  actionType: 'LOGIN' | 'LOGOUT' | 'BOOKING_CREATED' | 'BOOKING_UPDATED' | 'BOOKING_CANCELLED' | 'BOOKING_RESCHEDULED' | 'PAYMENT_RECEIVED' | 'AVAILABILITY_CHANGED' | 'SERVICE_PAUSED' | 'SETTINGS_UPDATED' | 'OVERBOOKED' | 'OVERBOOKING_RESOLVED';
  target: string;
  before?: string;
  after?: string;
  reason?: string;
  ipAddress: string;
  sessionToken: string;
}

// Calendar view types
export type CalendarView = 'month' | 'week' | 'day';

export interface CalendarBooking {
  booking: Booking;
  position: number; // For overlapping bookings
  totalOverlapping: number;
}

// Service pause status
export interface ServicePause {
  serviceId: string;
  pausedAt: string;
  pausedUntil?: string;
  reason?: string;
}

// Working hours configuration
export interface WorkingHours {
  day: number; // 0-6 (Sunday-Saturday)
  isOpen: boolean;
  openTime: string; // HH:mm
  closeTime: string; // HH:mm
}

// Date-specific time slots
export interface DateSpecificSlot {
  date: string; // ISO date string
  timeSlots: string[]; // Available time slots for this date
  isFullyBooked?: boolean;
  note?: string;
}

// Availability settings
export interface AvailabilitySettings {
  workingHours: WorkingHours[];
  blockedDates: string[]; // ISO date strings
  dateSpecificSlots: DateSpecificSlot[]; // Custom time slots for specific dates
  leadTimeDays: number;
  maxBookingsPerSlot: number;
  bufferTimeMinutes: number;
}

// Overbooking settings
export interface OverbookingSettings {
  enabled: boolean;
  maxOverbookedPerDay: number;
  maxOverbookedPerSlot: number;
  requireReason: boolean;
}

// Bank details for payments
export interface BankDetails {
  accountName: string;
  accountNumber: string;
  bankName: string;
}