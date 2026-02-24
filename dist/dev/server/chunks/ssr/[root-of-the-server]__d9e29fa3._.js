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
"[project]/lib/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOOKING_FEES",
    ()=>BOOKING_FEES,
    "SERVICES",
    ()=>SERVICES,
    "SERVICE_CATEGORIES",
    ()=>SERVICE_CATEGORIES,
    "formatPrice",
    ()=>formatPrice,
    "getBookingFee",
    ()=>getBookingFee,
    "getNumericPrice",
    ()=>getNumericPrice,
    "getServiceById",
    ()=>getServiceById,
    "getServicesByCategory",
    ()=>getServicesByCategory
]);
const BOOKING_FEES = {
    lashes: 200,
    nails: 200,
    brows: 500,
    training: 1000,
    hair: 500,
    underarm: 200,
    airlashes: 200
};
function getBookingFee(category) {
    return BOOKING_FEES[category] || 200;
}
const SERVICES = [
    // LASHES & BROW SERVICES
    {
        id: 'eyelash-extensions',
        name: 'Eyelash Extensions',
        category: 'lashes',
        price: '450-600',
        duration: null,
        icon: '👁️',
        description: 'Premium lash extensions customized to enhance your natural eye shape'
    },
    {
        id: 'lashlift-tint',
        name: 'Lashlift with tint',
        category: 'lashes',
        price: 450,
        duration: null,
        icon: '👁️',
        description: 'Lift and tint your natural lashes for a beautiful, low-maintenance look'
    },
    {
        id: 'lash-extensions-removal',
        name: 'Lash Extensions Removal',
        category: 'lashes',
        price: '100-150',
        duration: null,
        icon: '✂️',
        description: 'Safe and gentle removal of existing lash extensions'
    },
    {
        id: 'brow-lamination',
        name: 'Brow Lamination with tint',
        category: 'brows',
        price: 600,
        duration: null,
        icon: '✨',
        description: 'Achieve perfectly groomed, fuller-looking brows'
    },
    {
        id: 'microblading',
        name: 'Microblading',
        category: 'brows',
        price: 3000,
        duration: null,
        icon: '✏️',
        description: 'Semi-permanent eyebrow tattoo for natural-looking brows'
    },
    {
        id: 'shading',
        name: 'Shading',
        category: 'brows',
        price: 3500,
        duration: null,
        icon: '🎨',
        description: 'Powder brow technique for soft, shaded look'
    },
    {
        id: 'combrows',
        name: 'Combrows (All 2 Sessions + Free after care cream)',
        category: 'brows',
        price: 4000,
        duration: null,
        icon: '👁️',
        description: 'Complete brow transformation with 2 sessions and aftercare included'
    },
    // NEW AIRLASHES
    {
        id: 'airlashes-natural',
        name: 'Natural Extensions',
        category: 'airlashes',
        price: 600,
        duration: null,
        icon: '🌸',
        description: 'Natural-looking airlash extensions'
    },
    {
        id: 'airlashes-volume',
        name: 'Volume Extensions',
        category: 'airlashes',
        price: 700,
        duration: null,
        icon: '💫',
        description: 'Volume airlash extensions for fuller look'
    },
    {
        id: 'airlashes-mega',
        name: 'Mega Extensions',
        category: 'airlashes',
        price: 800,
        duration: null,
        icon: '⭐',
        description: 'Mega volume airlash extensions for dramatic effect'
    },
    {
        id: 'airlashes-retouch',
        name: 'Retouch',
        category: 'airlashes',
        price: '350-400',
        duration: null,
        icon: '✨',
        description: 'Maintenance retouch for airlash extensions'
    },
    // NAILS SERVICES
    {
        id: 'manegel',
        name: 'Manegel',
        category: 'nails',
        price: 450,
        duration: null,
        icon: '💅',
        description: 'Gel manicure for long-lasting, beautiful nails'
    },
    {
        id: 'pedegel',
        name: 'Pedegel',
        category: 'nails',
        price: 480,
        duration: null,
        icon: '🦶',
        description: 'Gel pedicure for gorgeous toenails'
    },
    {
        id: 'softgel-extensions',
        name: 'Softgel Extensions',
        category: 'nails',
        price: 600,
        duration: null,
        icon: '💅',
        description: 'Soft gel nail extensions'
    },
    {
        id: 'poly-acrylic-extensions',
        name: 'Poly/Acrylic Extensions',
        category: 'nails',
        price: 800,
        duration: null,
        icon: '💎',
        description: 'Polygel or acrylic nail extensions'
    },
    {
        id: 'nail-extensions-removal',
        name: 'Nail Extensions Removal',
        category: 'nails',
        price: '100-150',
        duration: null,
        icon: '✂️',
        description: 'Safe removal of nail extensions'
    },
    {
        id: 'additional-gems',
        name: 'Additional Gems & Stones',
        category: 'nails',
        price: '10-100',
        duration: null,
        icon: '💎',
        description: 'Add beautiful gems and stones to your nail design'
    },
    // HAIR SERVICES
    {
        id: 'hair-color-short',
        name: 'HAIR COLOR - Short Length',
        category: 'hair',
        price: 600,
        duration: null,
        icon: '💇',
        description: 'Full hair color service for short hair',
        notes: 'FREE TRIM!!'
    },
    {
        id: 'hair-color-shoulder',
        name: 'HAIR COLOR - Shoulder Length',
        category: 'hair',
        price: 800,
        duration: null,
        icon: '💇',
        description: 'Full hair color service for shoulder-length hair',
        notes: 'FREE TRIM!!'
    },
    {
        id: 'hair-color-long',
        name: 'HAIR COLOR - Long Hair Length',
        category: 'hair',
        price: 1000,
        duration: null,
        icon: '💇',
        description: 'Full hair color service for long hair',
        notes: 'FREE TRIM!!'
    },
    {
        id: 'brazilian-botox-short',
        name: 'BRAZILIAN BOTOX COLLAGEN - Short Length',
        category: 'hair',
        price: 800,
        duration: null,
        icon: '✨',
        description: 'Brazilian botox collagen treatment for short hair'
    },
    {
        id: 'brazilian-botox-shoulder',
        name: 'BRAZILIAN BOTOX COLLAGEN - Shoulder Length',
        category: 'hair',
        price: 1000,
        duration: null,
        icon: '✨',
        description: 'Brazilian botox collagen treatment for shoulder-length hair'
    },
    {
        id: 'brazilian-botox-long',
        name: 'BRAZILIAN BOTOX COLLAGEN - Long Hair Length',
        category: 'hair',
        price: 1500,
        duration: null,
        icon: '✨',
        description: 'Brazilian botox collagen treatment for long hair'
    },
    // UNDERARM SERVICES
    {
        id: 'ipl-per-session',
        name: 'IPL per Session',
        category: 'underarm',
        price: 150,
        duration: null,
        icon: '✨',
        description: 'IPL hair removal per session'
    },
    {
        id: 'ipl-12-plus-1',
        name: 'IPL 12+1 Session',
        category: 'underarm',
        price: 1000,
        duration: null,
        icon: '✨',
        description: 'IPL hair removal package (12+1 sessions)'
    },
    {
        id: 'underarm-waxing',
        name: 'Underarm Waxing',
        category: 'underarm',
        price: 180,
        duration: null,
        icon: '🌸',
        description: 'Professional underarm waxing service'
    }
];
function getServiceById(id) {
    return SERVICES.find((s)=>s.id === id);
}
function getServicesByCategory(category) {
    return SERVICES.filter((s)=>s.category === category);
}
function formatPrice(price) {
    if (typeof price === 'string') {
        return `₱${price}`;
    }
    return `₱${price.toLocaleString()}`;
}
function getNumericPrice(price) {
    if (typeof price === 'number') return price;
    // If it's a range like "450-600", return the first number
    const match = price.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
}
const SERVICE_CATEGORIES = [
    {
        id: 'lashes',
        name: 'Lashes & Brow Services'
    },
    {
        id: 'airlashes',
        name: 'New Airlashes'
    },
    {
        id: 'nails',
        name: 'Nails Services'
    },
    {
        id: 'hair',
        name: 'Hair Services'
    },
    {
        id: 'underarm',
        name: 'Underarm Services'
    }
];
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
"[project]/lib/bookings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_AVAILABILITY",
    ()=>DEFAULT_AVAILABILITY,
    "DEFAULT_OVERBOOKING",
    ()=>DEFAULT_OVERBOOKING,
    "DEFAULT_TIME_SLOTS",
    ()=>DEFAULT_TIME_SLOTS,
    "cancelBooking",
    ()=>cancelBooking,
    "clearAllBookings",
    ()=>clearAllBookings,
    "createBooking",
    ()=>createBooking,
    "getAllBookings",
    ()=>getAllBookings,
    "getAvailabilitySettings",
    ()=>getAvailabilitySettings,
    "getAvailableTimeSlots",
    ()=>getAvailableTimeSlots,
    "getBookedSlots",
    ()=>getBookedSlots,
    "getBookingById",
    ()=>getBookingById,
    "getBookingStats",
    ()=>getBookingStats,
    "getBookingsByDate",
    ()=>getBookingsByDate,
    "getBookingsByStatus",
    ()=>getBookingsByStatus,
    "getOverbookingSettings",
    ()=>getOverbookingSettings,
    "isSlotAvailable",
    ()=>isSlotAvailable,
    "markAsOverbooked",
    ()=>markAsOverbooked,
    "markDateFullyBooked",
    ()=>markDateFullyBooked,
    "markPaymentReceived",
    ()=>markPaymentReceived,
    "removeDateSpecificSlots",
    ()=>removeDateSpecificSlots,
    "rescheduleBooking",
    ()=>rescheduleBooking,
    "resolveOverbooking",
    ()=>resolveOverbooking,
    "searchBookings",
    ()=>searchBookings,
    "setDateSpecificSlots",
    ()=>setDateSpecificSlots,
    "updateAvailabilitySettings",
    ()=>updateAvailabilitySettings,
    "updateBookingStatus",
    ()=>updateBookingStatus,
    "updateOverbookingSettings",
    ()=>updateOverbookingSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-ssr] (ecmascript)");
;
;
const BOOKINGS_KEY = 'stylash_bookings';
const AVAILABILITY_KEY = 'stylash_availability';
const OVERBOOKING_KEY = 'stylash_overbooking';
const DEFAULT_TIME_SLOTS = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00'
];
const DEFAULT_AVAILABILITY = {
    workingHours: [
        {
            day: 0,
            isOpen: false,
            openTime: '09:00',
            closeTime: '17:00'
        },
        {
            day: 1,
            isOpen: true,
            openTime: '09:00',
            closeTime: '18:00'
        },
        {
            day: 2,
            isOpen: true,
            openTime: '09:00',
            closeTime: '18:00'
        },
        {
            day: 3,
            isOpen: true,
            openTime: '09:00',
            closeTime: '18:00'
        },
        {
            day: 4,
            isOpen: true,
            openTime: '09:00',
            closeTime: '18:00'
        },
        {
            day: 5,
            isOpen: true,
            openTime: '09:00',
            closeTime: '18:00'
        },
        {
            day: 6,
            isOpen: true,
            openTime: '09:00',
            closeTime: '18:00'
        }
    ],
    blockedDates: [],
    dateSpecificSlots: [],
    leadTimeDays: 1,
    maxBookingsPerSlot: 1,
    bufferTimeMinutes: 0
};
const DEFAULT_OVERBOOKING = {
    enabled: true,
    maxOverbookedPerDay: 2,
    maxOverbookedPerSlot: 1,
    requireReason: true
};
function getAllBookings() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function getBookingsByDate(date) {
    return getAllBookings().filter((b)=>b.date === date);
}
function getBookingsByStatus(status) {
    return getAllBookings().filter((b)=>b.status === status);
}
function getBookingById(id) {
    return getAllBookings().find((b)=>b.id === id);
}
function getBookedSlots(date) {
    return getBookingsByDate(date).filter((b)=>[
            'pending_payment',
            'awaiting_verification',
            'confirmed'
        ].includes(b.status)).map((b)=>b.timeSlot);
}
function getAvailableTimeSlots(date) {
    const availability = getAvailabilitySettings();
    // Check if date has specific slots defined
    const dateSpecific = availability.dateSpecificSlots.find((s)=>s.date === date);
    if (dateSpecific) {
        if (dateSpecific.isFullyBooked) return [];
        return dateSpecific.timeSlots;
    }
    // Check if date is blocked
    if (availability.blockedDates.includes(date)) {
        return [];
    }
    // Check working hours
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.getDay();
    const workingDay = availability.workingHours.find((w)=>w.day === dayOfWeek);
    if (!workingDay || !workingDay.isOpen) {
        return [];
    }
    // Generate slots from working hours
    const slots = [];
    const startHour = parseInt(workingDay.openTime.split(':')[0]);
    const startMin = parseInt(workingDay.openTime.split(':')[1]);
    const endHour = parseInt(workingDay.closeTime.split(':')[0]);
    const endMin = parseInt(workingDay.closeTime.split(':')[1]);
    let currentHour = startHour;
    let currentMin = startMin;
    while(currentHour < endHour || currentHour === endHour && currentMin < endMin){
        const timeStr = `${currentHour.toString().padStart(2, '0')}:${currentMin.toString().padStart(2, '0')}`;
        slots.push(timeStr);
        currentMin += 30;
        if (currentMin >= 60) {
            currentMin = 0;
            currentHour++;
        }
    }
    return slots;
}
function isSlotAvailable(date, timeSlot) {
    const availability = getAvailabilitySettings();
    const bookings = getBookingsByDate(date);
    // Check lead time
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const bookingDate = new Date(date);
    const daysDiff = Math.ceil((bookingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (daysDiff < availability.leadTimeDays) {
        return false;
    }
    // Get available slots for this date
    const availableSlots = getAvailableTimeSlots(date);
    // Check if this time slot is in the available list
    if (!availableSlots.includes(timeSlot)) {
        return false;
    }
    // Check if there's already a booking for this slot (ONLY 1 booking per slot allowed)
    const existingBooking = bookings.find((b)=>b.timeSlot === timeSlot && [
            'pending_payment',
            'awaiting_verification',
            'confirmed'
        ].includes(b.status));
    // Return false if ANY booking exists for this slot
    return !existingBooking;
}
function setDateSpecificSlots(date, timeSlots, note) {
    const availability = getAvailabilitySettings();
    const existingIndex = availability.dateSpecificSlots.findIndex((s)=>s.date === date);
    const newSlot = {
        date,
        timeSlots,
        note,
        isFullyBooked: false
    };
    if (existingIndex >= 0) {
        availability.dateSpecificSlots[existingIndex] = newSlot;
    } else {
        availability.dateSpecificSlots.push(newSlot);
    }
    updateAvailabilitySettings(availability);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAdminAction"])('SET_DATE_SLOTS', {
        date,
        timeSlots,
        note
    });
}
function removeDateSpecificSlots(date) {
    const availability = getAvailabilitySettings();
    availability.dateSpecificSlots = availability.dateSpecificSlots.filter((s)=>s.date !== date);
    updateAvailabilitySettings(availability);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAdminAction"])('REMOVE_DATE_SLOTS', {
        date
    });
}
function markDateFullyBooked(date, note) {
    const availability = getAvailabilitySettings();
    const existingIndex = availability.dateSpecificSlots.findIndex((s)=>s.date === date);
    const newSlot = {
        date,
        timeSlots: [],
        isFullyBooked: true,
        note: note || 'Fully booked'
    };
    if (existingIndex >= 0) {
        availability.dateSpecificSlots[existingIndex] = newSlot;
    } else {
        availability.dateSpecificSlots.push(newSlot);
    }
    updateAvailabilitySettings(availability);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAdminAction"])('MARK_FULLY_BOOKED', {
        date,
        note
    });
}
function createBooking(data) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const service = undefined;
    const servicePrice = undefined;
    const bookingFee = undefined;
    const booking = undefined;
    const bookings = undefined;
}
function updateBookingStatus(id, status, paymentStatus) {
    const bookings = getAllBookings();
    const index = bookings.findIndex((b)=>b.id === id);
    if (index === -1) return null;
    bookings[index].status = status;
    if (paymentStatus) {
        bookings[index].paymentStatus = paymentStatus;
    }
    bookings[index].updatedAt = new Date().toISOString();
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAdminAction"])('UPDATE_BOOKING_STATUS', {
        bookingId: id,
        newStatus: status,
        newPaymentStatus: paymentStatus
    });
    return bookings[index];
}
function markPaymentReceived(id) {
    const bookings = getAllBookings();
    const index = bookings.findIndex((b)=>b.id === id);
    if (index === -1) return null;
    bookings[index].status = 'confirmed';
    bookings[index].paymentStatus = 'paid';
    bookings[index].verifiedAt = new Date().toISOString();
    bookings[index].updatedAt = new Date().toISOString();
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAdminAction"])('MARK_PAYMENT_RECEIVED', {
        bookingId: id
    });
    return bookings[index];
}
function markAsOverbooked(id, reason, notes) {
    const bookings = getAllBookings();
    const index = bookings.findIndex((b)=>b.id === id);
    if (index === -1) return null;
    bookings[index].status = 'overbooked';
    bookings[index].isOverbooked = true;
    bookings[index].overbookReason = reason;
    bookings[index].overbookNotes = notes;
    bookings[index].overbookedAt = new Date().toISOString();
    bookings[index].overbookResolution = 'pending';
    bookings[index].updatedAt = new Date().toISOString();
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAdminAction"])('MARK_OVERBOOKED', {
        bookingId: id,
        reason,
        notes
    });
    return bookings[index];
}
function resolveOverbooking(id, resolution, compensationAmount) {
    const bookings = getAllBookings();
    const index = bookings.findIndex((b)=>b.id === id);
    if (index === -1) return null;
    bookings[index].overbookResolution = resolution;
    bookings[index].overbookResolvedAt = new Date().toISOString();
    bookings[index].compensationAmount = compensationAmount;
    if (resolution === 'refunded') {
        bookings[index].status = 'cancelled';
        bookings[index].paymentStatus = 'refunded';
    } else if (resolution === 'rescheduled') {
        bookings[index].status = 'confirmed';
    } else if (resolution === 'completed_with_compensation') {
        bookings[index].status = 'completed';
    }
    bookings[index].updatedAt = new Date().toISOString();
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAdminAction"])('RESOLVE_OVERBOOKING', {
        bookingId: id,
        resolution,
        compensationAmount
    });
    return bookings[index];
}
function cancelBooking(id, reason) {
    const bookings = getAllBookings();
    const index = bookings.findIndex((b)=>b.id === id);
    if (index === -1) return null;
    bookings[index].status = 'cancelled';
    bookings[index].paymentStatus = 'refunded';
    bookings[index].cancellationReason = reason;
    bookings[index].cancelledAt = new Date().toISOString();
    bookings[index].updatedAt = new Date().toISOString();
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAdminAction"])('CANCEL_BOOKING', {
        bookingId: id,
        reason
    });
    return bookings[index];
}
function rescheduleBooking(id, newDate, newTimeSlot) {
    const bookings = getAllBookings();
    const index = bookings.findIndex((b)=>b.id === id);
    if (index === -1) return null;
    const oldDate = bookings[index].date;
    const oldTime = bookings[index].timeSlot;
    bookings[index].date = newDate;
    bookings[index].timeSlot = newTimeSlot;
    bookings[index].updatedAt = new Date().toISOString();
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAdminAction"])('RESCHEDULE_BOOKING', {
        bookingId: id,
        oldDate,
        oldTime,
        newDate,
        newTimeSlot
    });
    return bookings[index];
}
function getAvailabilitySettings() {
    if ("TURBOPACK compile-time truthy", 1) return DEFAULT_AVAILABILITY;
    //TURBOPACK unreachable
    ;
    const stored = undefined;
    const parsed = undefined;
}
function updateAvailabilitySettings(settings) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getOverbookingSettings() {
    if ("TURBOPACK compile-time truthy", 1) return DEFAULT_OVERBOOKING;
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function updateOverbookingSettings(settings) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getBookingStats() {
    const bookings = getAllBookings();
    const today = new Date().toISOString().split('T')[0];
    return {
        total: bookings.length,
        pendingPayment: bookings.filter((b)=>b.status === 'pending_payment').length,
        awaitingVerification: bookings.filter((b)=>b.status === 'awaiting_verification').length,
        confirmed: bookings.filter((b)=>b.status === 'confirmed').length,
        completed: bookings.filter((b)=>b.status === 'completed').length,
        cancelled: bookings.filter((b)=>b.status === 'cancelled').length,
        overbooked: bookings.filter((b)=>b.status === 'overbooked').length,
        today: bookings.filter((b)=>b.date === today).length,
        revenue: bookings.filter((b)=>b.paymentStatus === 'paid').reduce((sum, b)=>sum + b.bookingFee, 0)
    };
}
function searchBookings(query) {
    const lowerQuery = query.toLowerCase();
    return getAllBookings().filter((b)=>b.id.toLowerCase().includes(lowerQuery) || b.customerName.toLowerCase().includes(lowerQuery) || b.customerEmail.toLowerCase().includes(lowerQuery) || b.customerPhone.includes(query) || b.serviceName.toLowerCase().includes(lowerQuery));
}
function clearAllBookings() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/app/book/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-ssr] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isBefore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/bookings.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function BookingForm() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const preSelectedService = searchParams.get("service");
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedServiceId, setSelectedServiceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(preSelectedService || "");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentMonth, setCurrentMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        notes: ""
    });
    const [availableSlots, setAvailableSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const selectedService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getServiceById"])(selectedServiceId);
    // Update available slots when date changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedDate) {
            const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd");
            setAvailableSlots((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvailableTimeSlots"])(dateStr));
            // Clear selected time if it's no longer available
            if (selectedTime && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvailableTimeSlots"])(dateStr).includes(selectedTime)) {
                setSelectedTime(null);
            }
        }
    }, [
        selectedDate
    ]);
    const generateCalendarDays = ()=>{
        const year = currentMonth.getFullYear(), month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1), lastDay = new Date(year, month + 1, 0);
        const days = [];
        for(let i = 0; i < firstDay.getDay(); i++)days.push(null);
        for(let i = 1; i <= lastDay.getDate(); i++)days.push(new Date(year, month, i));
        return days;
    };
    const handleDetailsSubmit = (e)=>{
        e.preventDefault();
        setStep(4);
    };
    const handlePaymentComplete = ()=>{
        setIsLoading(true);
        if (!selectedDate || !selectedTime || !selectedService) {
            setIsLoading(false);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBooking"])({
            date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd"),
            timeSlot: selectedTime,
            serviceId: selectedServiceId,
            customerName: formData.name,
            customerEmail: formData.email,
            customerPhone: formData.phone,
            notes: formData.notes,
            paymentMethod: "gcash"
        });
        setStep(5);
        setIsLoading(false);
    };
    const bookingFee = selectedService ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBookingFee"])(selectedService.category) : 0;
    if (step === 5) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-b from-pink-50 to-white py-20 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-xl p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-10 h-10 text-green-600"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold font-serif mb-4",
                            children: "Booking Confirmed!"
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "Your appointment has been scheduled."
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "px-8 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700",
                            children: "Back to Home"
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/book/page.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/book/page.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/book/page.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-pink-50 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 text-gray-600 hover:text-pink-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/book/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 96
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/app/book/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 131
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/book/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl font-bold font-serif text-pink-600",
                            children: "Stylash"
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16"
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/book/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/book/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-8",
                children: [
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-center mb-8",
                                children: "Select a Service"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedServiceId(service.id);
                                            setStep(2);
                                        },
                                        className: `p-6 rounded-2xl border-2 text-left transition-all ${selectedServiceId === service.id ? "border-pink-600 bg-pink-50" : "border-gray-200 hover:border-pink-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-3xl",
                                                        children: service.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-pink-600 font-bold",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(service.price)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-lg",
                                                children: service.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            service.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm mt-1",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, service.id, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-center mb-8",
                                children: "Select Date & Time"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid lg:grid-cols-2 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-lg p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)),
                                                        className: "p-2 hover:bg-gray-100 rounded",
                                                        children: "<"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentMonth, "MMMM yyyy")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)),
                                                        className: "p-2 hover:bg-gray-100 rounded",
                                                        children: ">"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-7 gap-1 text-center text-sm mb-2",
                                                children: [
                                                    "S",
                                                    "M",
                                                    "T",
                                                    "W",
                                                    "T",
                                                    "F",
                                                    "S"
                                                ].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "py-2 text-gray-500",
                                                        children: d
                                                    }, `day-${i}`, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 127
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-7 gap-1",
                                                children: generateCalendarDays().map((date, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedDate(date),
                                                            disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBefore"])(date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(new Date())),
                                                            className: `w-full aspect-square rounded-lg text-sm ${selectedDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(date, selectedDate) ? "bg-pink-600 text-white" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBefore"])(date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(new Date())) ? "text-gray-300" : "hover:bg-pink-50"}`,
                                                            children: date.getDate()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/book/page.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                            fileName: "[project]/app/book/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-lg p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-5 h-5 text-pink-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 72
                                                    }, this),
                                                    "Available Times"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            !selectedDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-center py-12",
                                                children: "Select a date first"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 34
                                            }, this) : availableSlots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 mb-2",
                                                        children: "No available time slots for this date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: "Please select another date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-2",
                                                children: availableSlots.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedTime(time),
                                                        disabled: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSlotAvailable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd"), time),
                                                        className: `py-2 px-1 rounded-lg text-sm ${selectedTime === time ? "bg-pink-600 text-white" : !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSlotAvailable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd"), time) ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-pink-50 text-pink-700 hover:bg-pink-100"}`,
                                                        children: [
                                                            time,
                                                            !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSlotAvailable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd"), time) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-[10px]",
                                                                children: "Booked"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, time, true, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this),
                                            selectedTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setStep(3),
                                                className: "w-full mt-4 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700",
                                                children: "Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-center mb-8",
                                children: "Your Details"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleDetailsSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: "Full Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "absolute left-3 top-3 w-5 h-5 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 43
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "text",
                                                        value: formData.name,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                name: e.target.value
                                                            }),
                                                        className: "w-full pl-10 pr-4 py-3 border rounded-xl focus:border-pink-500 focus:outline-none",
                                                        placeholder: "Your name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: "Phone *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "absolute left-3 top-3 w-5 h-5 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 43
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "tel",
                                                        value: formData.phone,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                phone: e.target.value
                                                            }),
                                                        className: "w-full pl-10 pr-4 py-3 border rounded-xl focus:border-pink-500 focus:outline-none",
                                                        placeholder: "09XX XXX XXXX"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: "Email *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "absolute left-3 top-3 w-5 h-5 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 43
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "email",
                                                        value: formData.email,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                email: e.target.value
                                                            }),
                                                        className: "w-full pl-10 pr-4 py-3 border rounded-xl focus:border-pink-500 focus:outline-none",
                                                        placeholder: "your@email.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setStep(2),
                                                className: "flex-1 py-3 border-2 border-gray-300 rounded-full font-medium hover:bg-gray-50",
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "flex-1 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Continue to Payment"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    step === 4 && selectedService && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-center mb-8",
                                children: "Payment"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold mb-2",
                                                children: "Booking Fee"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-4xl font-bold text-pink-600",
                                                children: [
                                                    "₱",
                                                    bookingFee
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm mt-1",
                                                children: "Required to confirm your appointment"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-b border-gray-200 py-6 my-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                        className: "w-5 h-5 text-pink-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Scan to Pay with GCash"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-64 h-64 mx-auto bg-gray-100 rounded-xl overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/payment-qr.png",
                                                    alt: "GCash Payment QR Code",
                                                    fill: true,
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/book/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-sm text-gray-500 mt-4",
                                                children: "Open your GCash app and scan the QR code to pay"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-pink-50 rounded-xl p-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-pink-800 mb-2",
                                                children: "Booking Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                children: "Service:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 22
                                                            }, this),
                                                            " ",
                                                            selectedService.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                children: "Date:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 22
                                                            }, this),
                                                            " ",
                                                            selectedDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "MMMM d, yyyy") : ""
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                children: "Time:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 22
                                                            }, this),
                                                            " ",
                                                            selectedTime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                children: "Name:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 22
                                                            }, this),
                                                            " ",
                                                            formData.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setStep(3),
                                                className: "flex-1 py-3 border-2 border-gray-300 rounded-full font-medium hover:bg-gray-50",
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handlePaymentComplete,
                                                disabled: isLoading,
                                                className: "flex-1 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 flex items-center justify-center gap-2",
                                                children: [
                                                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "w-5 h-5 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 32
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 79
                                                    }, this),
                                                    isLoading ? "Processing..." : "I've Paid"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/book/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/book/page.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
function BookPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-8 h-8 animate-spin text-pink-600"
            }, void 0, false, {
                fileName: "[project]/app/book/page.tsx",
                lineNumber: 262,
                columnNumber: 88
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/app/book/page.tsx",
            lineNumber: 262,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingForm, {}, void 0, false, {
            fileName: "[project]/app/book/page.tsx",
            lineNumber: 263,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/book/page.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d9e29fa3._.js.map