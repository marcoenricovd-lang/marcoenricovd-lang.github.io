(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/bookings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-client] (ecmascript)");
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(BOOKINGS_KEY);
    return stored ? JSON.parse(stored) : [];
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('SET_DATE_SLOTS', {
        date,
        timeSlots,
        note
    });
}
function removeDateSpecificSlots(date) {
    const availability = getAvailabilitySettings();
    availability.dateSpecificSlots = availability.dateSpecificSlots.filter((s)=>s.date !== date);
    updateAvailabilitySettings(availability);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('REMOVE_DATE_SLOTS', {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('MARK_FULLY_BOOKED', {
        date,
        note
    });
}
function createBooking(data) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServiceById"])(data.serviceId);
    if (!service) return null;
    const servicePrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericPrice"])(service.price);
    const bookingFee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBookingFee"])(service.category);
    const booking = {
        id: `STL-${Date.now().toString(36).toUpperCase()}`,
        date: data.date,
        timeSlot: data.timeSlot,
        serviceId: data.serviceId,
        serviceName: service.name,
        servicePrice,
        bookingFee,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        notes: data.notes,
        status: 'pending_payment',
        paymentStatus: 'pending',
        paymentMethod: data.paymentMethod,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    const bookings = getAllBookings();
    bookings.push(booking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    return booking;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('UPDATE_BOOKING_STATUS', {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('MARK_PAYMENT_RECEIVED', {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('MARK_OVERBOOKED', {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('RESOLVE_OVERBOOKING', {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('CANCEL_BOOKING', {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('RESCHEDULE_BOOKING', {
        bookingId: id,
        oldDate,
        oldTime,
        newDate,
        newTimeSlot
    });
    return bookings[index];
}
function getAvailabilitySettings() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(AVAILABILITY_KEY);
    if (!stored) return DEFAULT_AVAILABILITY;
    const parsed = JSON.parse(stored);
    // Merge with defaults to ensure new fields exist
    return {
        ...DEFAULT_AVAILABILITY,
        ...parsed,
        // Ensure dateSpecificSlots exists (for backward compatibility)
        dateSpecificSlots: parsed.dateSpecificSlots || []
    };
}
function updateAvailabilitySettings(settings) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(AVAILABILITY_KEY, JSON.stringify(settings));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('UPDATE_AVAILABILITY', {
        ...settings
    });
}
function getOverbookingSettings() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(OVERBOOKING_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_OVERBOOKING;
}
function updateOverbookingSettings(settings) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(OVERBOOKING_KEY, JSON.stringify(settings));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAdminAction"])('UPDATE_OVERBOOKING_SETTINGS', {
        ...settings
    });
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(BOOKINGS_KEY);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/eachDayOfInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/bookings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const STATUS_COLORS = {
    pending_payment: {
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        border: "border-yellow-200"
    },
    awaiting_verification: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200"
    },
    confirmed: {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200"
    },
    completed: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200"
    },
    cancelled: {
        bg: "bg-red-50",
        text: "text-red-700",
        border: "border-red-200"
    },
    overbooked: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200"
    }
};
const SERVICE_COLORS = {
    lashes: "bg-pink-400",
    nails: "bg-purple-400",
    brows: "bg-amber-400",
    hair: "bg-cyan-400",
    underarm: "bg-emerald-400",
    airlashes: "bg-rose-400",
    training: "bg-indigo-400"
};
function AdminDashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("calendar");
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBookingStats"])());
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Calendar state
    const [calendarView, setCalendarView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("month");
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Availability state
    const [availability, setAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailabilitySettings"])());
    const [selectedSlotDate, setSelectedSlotDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTimeSlots, setSelectedTimeSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [slotNote, setSlotNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Security state
    const [auditLogs, setAuditLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeSessions, setActiveSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loginActivity, setLoginActivity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Reschedule modal
    const [rescheduleBookingData, setRescheduleBookingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newDate, setNewDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newTime, setNewTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            loadData();
            const interval = setInterval(loadData, 30000);
            return ({
                "AdminDashboard.useEffect": ()=>clearInterval(interval)
            })["AdminDashboard.useEffect"];
        }
    }["AdminDashboard.useEffect"], []);
    const loadData = ()=>{
        setBookings((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllBookings"])());
        setStats((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBookingStats"])());
        setAvailability((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailabilitySettings"])());
        setAuditLogs((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuditLog"])());
        setActiveSessions((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSessions"])());
        setLoginActivity((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoginActivity"])());
        setLoading(false);
    };
    const handleLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutAdmin"])();
        router.push("/admin/login");
    };
    const handleMarkPaid = (bookingId)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPaymentReceived"])(bookingId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLogEntry"])({
            timestamp: new Date().toISOString(),
            user: "admin",
            actionType: "PAYMENT_RECEIVED",
            target: bookingId,
            after: "paid",
            ipAddress: activeSessions[0]?.ip || "unknown",
            sessionToken: activeSessions[0]?.token || "unknown"
        });
        loadData();
    };
    const handleCancel = (bookingId)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelBooking"])(bookingId, "Cancelled by admin");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLogEntry"])({
            timestamp: new Date().toISOString(),
            user: "admin",
            actionType: "BOOKING_CANCELLED",
            target: bookingId,
            after: "cancelled",
            ipAddress: activeSessions[0]?.ip || "unknown",
            sessionToken: activeSessions[0]?.token || "unknown"
        });
        loadData();
    };
    const handleReschedule = ()=>{
        if (rescheduleBookingData && newDate && newTime) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rescheduleBooking"])(rescheduleBookingData.id, newDate, newTime);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLogEntry"])({
                timestamp: new Date().toISOString(),
                user: "admin",
                actionType: "BOOKING_RESCHEDULED",
                target: rescheduleBookingData.id,
                before: `${rescheduleBookingData.date} ${rescheduleBookingData.timeSlot}`,
                after: `${newDate} ${newTime}`,
                ipAddress: activeSessions[0]?.ip || "unknown",
                sessionToken: activeSessions[0]?.token || "unknown"
            });
            setRescheduleBookingData(null);
            setNewDate("");
            setNewTime("");
            loadData();
        }
    };
    // Calendar navigation
    const navigateCalendar = (direction)=>{
        if (calendarView === "month") {
            setCurrentDate(direction === "prev" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(currentDate, 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(currentDate, 1));
        } else if (calendarView === "week") {
            setCurrentDate(direction === "prev" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subWeeks"])(currentDate, 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWeeks"])(currentDate, 1));
        } else {
            setCurrentDate(direction === "prev" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(currentDate, 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(currentDate, 1));
        }
    };
    // Get calendar days
    const getCalendarDays = ()=>{
        if (calendarView === "month") {
            const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(currentDate);
            const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(currentDate);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
                start,
                end
            });
        } else if (calendarView === "week") {
            const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(currentDate);
            const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(currentDate);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
                start,
                end
            });
        } else {
            return [
                currentDate
            ];
        }
    };
    // Get bookings for a specific date
    const getBookingsForDate = (date)=>{
        const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "yyyy-MM-dd");
        return bookings.filter((b)=>b.date === dateStr);
    };
    // Quick actions
    const blockToday = ()=>{
        const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), "yyyy-MM-dd");
        const newBlocked = [
            ...availability.blockedDates,
            today
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAvailabilitySettings"])({
            ...availability,
            blockedDates: newBlocked
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLogEntry"])({
            timestamp: new Date().toISOString(),
            user: "admin",
            actionType: "AVAILABILITY_CHANGED",
            target: today,
            after: "blocked",
            ipAddress: activeSessions[0]?.ip || "unknown",
            sessionToken: activeSessions[0]?.token || "unknown"
        });
        loadData();
    };
    const blockTomorrow = ()=>{
        const tomorrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(new Date(), 1), "yyyy-MM-dd");
        const newBlocked = [
            ...availability.blockedDates,
            tomorrow
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAvailabilitySettings"])({
            ...availability,
            blockedDates: newBlocked
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLogEntry"])({
            timestamp: new Date().toISOString(),
            user: "admin",
            actionType: "AVAILABILITY_CHANGED",
            target: tomorrow,
            after: "blocked",
            ipAddress: activeSessions[0]?.ip || "unknown",
            sessionToken: activeSessions[0]?.token || "unknown"
        });
        loadData();
    };
    const emergencyFullBook = ()=>{
        const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), "yyyy-MM-dd");
        if (!availability.blockedDates.includes(today)) {
            blockToday();
        }
    };
    // Filter bookings
    const filteredBookings = bookings.filter((b)=>b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) || b.id.toLowerCase().includes(searchQuery.toLowerCase()) || b.serviceName.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    // Export audit logs
    const exportAuditLogs = ()=>{
        const csv = [
            [
                "Timestamp",
                "User",
                "Action",
                "Target",
                "Before",
                "After",
                "IP Address"
            ].join(","),
            ...auditLogs.map((log)=>[
                    log.timestamp,
                    log.user,
                    log.actionType,
                    log.target,
                    log.before || "",
                    log.after || "",
                    log.ipAddress
                ].join(","))
        ].join("\n");
        const blob = new Blob([
            csv
        ], {
            type: "text/csv"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `audit-log-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), "yyyy-MM-dd")}.csv`;
        a.click();
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-8 h-8 animate-spin text-pink-600"
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 276,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 275,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm sticky top-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-2xl font-bold font-serif text-pink-600",
                                    children: "StyLash"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600 font-medium",
                                    children: "Admin Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                "Logout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: [
                            {
                                id: "calendar",
                                label: "Calendar",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
                            },
                            {
                                id: "bookings",
                                label: "Bookings",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"]
                            },
                            {
                                id: "availability",
                                label: "Availability",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
                            },
                            {
                                id: "security",
                                label: "Security",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `flex items-center gap-2 px-6 py-4 font-medium text-sm border-b-2 transition-colors ${activeTab === tab.id ? "border-pink-600 text-pink-600" : "border-transparent text-gray-600 hover:text-gray-900"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this),
                                    tab.label
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 310,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-wrap gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 text-sm text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Today's Bookings: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-pink-600",
                                            children: stats.today
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "This Week's Revenue: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-pink-600",
                                            children: [
                                                "₱",
                                                stats.revenue
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-6 gap-4 mb-6",
                        children: [
                            {
                                label: "Total",
                                value: stats.total,
                                color: "text-gray-900",
                                bg: "bg-gray-50"
                            },
                            {
                                label: "Pending Payment",
                                value: stats.pendingPayment,
                                color: "text-yellow-600",
                                bg: "bg-yellow-50"
                            },
                            {
                                label: "Awaiting Verification",
                                value: stats.awaitingVerification,
                                color: "text-blue-600",
                                bg: "bg-blue-50"
                            },
                            {
                                label: "Confirmed",
                                value: stats.confirmed,
                                color: "text-green-600",
                                bg: "bg-green-50"
                            },
                            {
                                label: "Completed",
                                value: stats.completed,
                                color: "text-purple-600",
                                bg: "bg-purple-50"
                            },
                            {
                                label: "Revenue",
                                value: `₱${stats.revenue}`,
                                color: "text-pink-600",
                                bg: "bg-pink-50"
                            }
                        ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${stat.bg} rounded-xl p-4 text-center`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-2xl font-bold ${stat.color}`,
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    activeTab === "calendar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold",
                                                children: [
                                                    calendarView === "month" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentDate, "MMMM yyyy"),
                                                    calendarView === "week" && `Week of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(currentDate), "MMM d")}`,
                                                    calendarView === "day" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentDate, "EEEE, MMMM d, yyyy")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>navigateCalendar("prev"),
                                                        className: "p-2 hover:bg-gray-100 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentDate(new Date()),
                                                        className: "px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200",
                                                        children: "Today"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>navigateCalendar("next"),
                                                        className: "p-2 hover:bg-gray-100 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-gray-100 rounded-lg p-1",
                                        children: [
                                            "month",
                                            "week",
                                            "day"
                                        ].map((view)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCalendarView(view),
                                                className: `px-3 py-1.5 text-sm rounded-md capitalize ${calendarView === view ? "bg-white shadow-sm text-pink-600" : "text-gray-600 hover:text-gray-900"}`,
                                                children: view
                                            }, view, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    calendarView === "month" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 gap-2",
                                        children: [
                                            [
                                                "Sun",
                                                "Mon",
                                                "Tue",
                                                "Wed",
                                                "Thu",
                                                "Fri",
                                                "Sat"
                                            ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-sm font-medium text-gray-500 py-2",
                                                    children: day
                                                }, day, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 21
                                                }, this)),
                                            getCalendarDays().map((date, i)=>{
                                                const dayBookings = getBookingsForDate(date);
                                                const isBlocked = availability.blockedDates.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "yyyy-MM-dd"));
                                                const isToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(date, new Date());
                                                const isCurrentMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameMonth"])(date, currentDate);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setSelectedDate(date),
                                                    className: `min-h-[100px] p-2 border rounded-lg cursor-pointer hover:border-pink-300 transition-colors ${isToday ? "bg-pink-50 border-pink-300" : "bg-white border-gray-200"} ${!isCurrentMonth && "opacity-50"} ${isBlocked && "bg-red-50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-sm font-medium ${isToday ? "text-pink-600" : "text-gray-700"}`,
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "d")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 27
                                                                }, this),
                                                                isBlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                                                    className: "w-4 h-4 text-red-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 41
                                                                }, this),
                                                                dayBookings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded-full",
                                                                    children: dayBookings.length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                dayBookings.slice(0, 3).map((booking)=>{
                                                                    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServiceById"])(booking.serviceId);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `text-xs px-1.5 py-0.5 rounded truncate ${SERVICE_COLORS[service?.category || "lashes"] || "bg-gray-400"} text-white`,
                                                                        children: [
                                                                            booking.timeSlot,
                                                                            " - ",
                                                                            booking.customerName.split(" ")[0]
                                                                        ]
                                                                    }, booking.id, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 427,
                                                                        columnNumber: 31
                                                                    }, this);
                                                                }),
                                                                dayBookings.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500 text-center",
                                                                    children: [
                                                                        "+",
                                                                        dayBookings.length - 3,
                                                                        " more"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 17
                                    }, this),
                                    (calendarView === "week" || calendarView === "day") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: getCalendarDays().map((date)=>{
                                            const dayBookings = getBookingsForDate(date);
                                            const isBlocked = availability.blockedDates.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "yyyy-MM-dd"));
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border rounded-lg overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-3 font-medium ${isBlocked ? "bg-red-50 text-red-700" : "bg-gray-50 text-gray-700"}`,
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "EEEE, MMMM d, yyyy"),
                                                            isBlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-sm",
                                                                children: "(Blocked)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 space-y-2",
                                                        children: dayBookings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-500 text-sm",
                                                            children: "No bookings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 29
                                                        }, this) : dayBookings.map((booking)=>{
                                                            const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServiceById"])(booking.serviceId);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-3 h-3 rounded-full ${SERVICE_COLORS[service?.category || "lashes"]}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 471,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium",
                                                                                        children: booking.timeSlot
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                                        lineNumber: 477,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-600",
                                                                                        children: booking.serviceName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                                        lineNumber: 478,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 476,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-medium",
                                                                                children: booking.customerName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 482,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${STATUS_COLORS[booking.status].bg} ${STATUS_COLORS[booking.status].text}`,
                                                                                children: booking.status.replace("_", " ")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 483,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 481,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, booking.id, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 33
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, date.toISOString(), true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 454,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 390,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this),
                    activeTab === "bookings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-3 w-5 h-5 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search bookings by customer, ID, or service...",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            className: "w-full pl-10 pr-4 py-2.5 border rounded-xl focus:border-pink-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-gray-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-left text-sm font-medium text-gray-500",
                                                            children: "ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-left text-sm font-medium text-gray-500",
                                                            children: "Customer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-left text-sm font-medium text-gray-500",
                                                            children: "Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-left text-sm font-medium text-gray-500",
                                                            children: "Date & Time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-left text-sm font-medium text-gray-500",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-left text-sm font-medium text-gray-500",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-gray-100",
                                                children: filteredBookings.map((booking)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 font-mono text-xs text-gray-600",
                                                                children: booking.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-sm",
                                                                        children: booking.customerName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 540,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: booking.customerPhone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 541,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm",
                                                                children: booking.serviceName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(booking.date), "MMM d, yyyy")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 545,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: booking.timeSlot
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 546,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${STATUS_COLORS[booking.status].bg} ${STATUS_COLORS[booking.status].text}`,
                                                                    children: booking.status.replace("_", " ")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 549,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 548,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        booking.status === "awaiting_verification" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleMarkPaid(booking.id),
                                                                            className: "text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-lg hover:bg-green-200 font-medium",
                                                                            children: "Mark Paid"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 558,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        (booking.status === "pending_payment" || booking.status === "awaiting_verification") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleCancel(booking.id),
                                                                            className: "text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-200 font-medium",
                                                                            children: "Cancel"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 566,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        booking.status !== "cancelled" && booking.status !== "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                setRescheduleBookingData(booking);
                                                                                setNewDate(booking.date);
                                                                                setNewTime(booking.timeSlot);
                                                                            },
                                                                            className: "text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-200 font-medium",
                                                                            children: "Reschedule"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 574,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, booking.id, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this),
                                    filteredBookings.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-gray-500 py-12",
                                        children: "No bookings found"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 591,
                                        columnNumber: 49
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this),
                    activeTab === "availability" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Date-Specific Time Slots"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 601,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-4",
                                        children: "Set custom available times for specific dates. This overrides the default working hours."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 602,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 rounded-lg p-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid md:grid-cols-3 gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium mb-2",
                                                                children: "Select Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: selectedSlotDate,
                                                                onChange: (e)=>{
                                                                    setSelectedSlotDate(e.target.value);
                                                                    // Load existing slots if any
                                                                    const existing = availability.dateSpecificSlots.find((s)=>s.date === e.target.value);
                                                                    if (existing) {
                                                                        setSelectedTimeSlots(existing.timeSlots);
                                                                        setSlotNote(existing.note || "");
                                                                    } else {
                                                                        setSelectedTimeSlots([]);
                                                                        setSlotNote("");
                                                                    }
                                                                },
                                                                className: "w-full border rounded-lg px-3 py-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 611,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium mb-2",
                                                                children: "Note (optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 630,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: slotNote,
                                                                onChange: (e)=>setSlotNote(e.target.value),
                                                                placeholder: "e.g., Holiday hours, Special event",
                                                                className: "w-full border rounded-lg px-3 py-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: "Available Time Slots"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 641,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-4 md:grid-cols-6 gap-2 mb-4",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TIME_SLOTS"].map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (selectedTimeSlots.includes(slot)) {
                                                                setSelectedTimeSlots(selectedTimeSlots.filter((s)=>s !== slot));
                                                            } else {
                                                                setSelectedTimeSlots([
                                                                    ...selectedTimeSlots,
                                                                    slot
                                                                ].sort());
                                                            }
                                                        },
                                                        className: `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedTimeSlots.includes(slot) ? "bg-pink-600 text-white" : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
                                                        children: slot
                                                    }, slot, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (selectedSlotDate && selectedTimeSlots.length > 0) {
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDateSpecificSlots"])(selectedSlotDate, selectedTimeSlots, slotNote);
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLogEntry"])({
                                                                    timestamp: new Date().toISOString(),
                                                                    user: "admin",
                                                                    actionType: "AVAILABILITY_CHANGED",
                                                                    target: selectedSlotDate,
                                                                    after: `${selectedTimeSlots.length} slots: ${selectedTimeSlots.join(", ")}`,
                                                                    ipAddress: activeSessions[0]?.ip || "unknown",
                                                                    sessionToken: activeSessions[0]?.token || "unknown"
                                                                });
                                                                loadData();
                                                                setSelectedSlotDate("");
                                                                setSelectedTimeSlots([]);
                                                                setSlotNote("");
                                                            }
                                                        },
                                                        disabled: !selectedSlotDate || selectedTimeSlots.length === 0,
                                                        className: "px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed",
                                                        children: "Save Time Slots"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (selectedSlotDate) {
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markDateFullyBooked"])(selectedSlotDate, slotNote);
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLogEntry"])({
                                                                    timestamp: new Date().toISOString(),
                                                                    user: "admin",
                                                                    actionType: "AVAILABILITY_CHANGED",
                                                                    target: selectedSlotDate,
                                                                    after: "Fully Booked",
                                                                    ipAddress: activeSessions[0]?.ip || "unknown",
                                                                    sessionToken: activeSessions[0]?.token || "unknown"
                                                                });
                                                                loadData();
                                                                setSelectedSlotDate("");
                                                                setSelectedTimeSlots([]);
                                                                setSlotNote("");
                                                            }
                                                        },
                                                        disabled: !selectedSlotDate,
                                                        className: "px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                                        children: "Mark Fully Booked"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 689,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 664,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-medium text-sm text-gray-700",
                                                children: "Configured Dates"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 718,
                                                columnNumber: 17
                                            }, this),
                                            availability.dateSpecificSlots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm",
                                                children: "No date-specific slots configured"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 720,
                                                columnNumber: 19
                                            }, this) : availability.dateSpecificSlots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-3 bg-blue-50 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-blue-900",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(slot.date), "EEEE, MMMM d, yyyy")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 725,
                                                                    columnNumber: 25
                                                                }, this),
                                                                slot.isFullyBooked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-orange-600 font-medium",
                                                                    children: "Fully Booked"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 729,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-blue-700",
                                                                    children: [
                                                                        slot.timeSlots.length,
                                                                        " slots: ",
                                                                        slot.timeSlots.slice(0, 5).join(", "),
                                                                        slot.timeSlots.length > 5 && ` +${slot.timeSlots.length - 5} more`
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 731,
                                                                    columnNumber: 27
                                                                }, this),
                                                                slot.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 mt-1",
                                                                    children: slot.note
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 736,
                                                                    columnNumber: 39
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 724,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeDateSpecificSlots"])(slot.date);
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLogEntry"])({
                                                                    timestamp: new Date().toISOString(),
                                                                    user: "admin",
                                                                    actionType: "AVAILABILITY_CHANGED",
                                                                    target: slot.date,
                                                                    after: "Removed custom slots",
                                                                    ipAddress: activeSessions[0]?.ip || "unknown",
                                                                    sessionToken: activeSessions[0]?.token || "unknown"
                                                                });
                                                                loadData();
                                                            },
                                                            className: "text-red-600 hover:text-red-700",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 754,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, slot.date, true, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 717,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Working Hours"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 764,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: availability.workingHours.map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-24 font-medium",
                                                                children: [
                                                                    "Sunday",
                                                                    "Monday",
                                                                    "Tuesday",
                                                                    "Wednesday",
                                                                    "Thursday",
                                                                    "Friday",
                                                                    "Saturday"
                                                                ][day.day]
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 769,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: day.isOpen,
                                                                        onChange: (e)=>{
                                                                            const newHours = [
                                                                                ...availability.workingHours
                                                                            ];
                                                                            newHours[index].isOpen = e.target.checked;
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAvailabilitySettings"])({
                                                                                ...availability,
                                                                                workingHours: newHours
                                                                            });
                                                                            loadData();
                                                                        },
                                                                        className: "rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 773,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: "Open"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 784,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 772,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 768,
                                                        columnNumber: 21
                                                    }, this),
                                                    day.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "time",
                                                                value: day.openTime,
                                                                onChange: (e)=>{
                                                                    const newHours = [
                                                                        ...availability.workingHours
                                                                    ];
                                                                    newHours[index].openTime = e.target.value;
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAvailabilitySettings"])({
                                                                        ...availability,
                                                                        workingHours: newHours
                                                                    });
                                                                    loadData();
                                                                },
                                                                className: "text-sm border rounded px-2 py-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 789,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500",
                                                                children: "to"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 800,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "time",
                                                                value: day.closeTime,
                                                                onChange: (e)=>{
                                                                    const newHours = [
                                                                        ...availability.workingHours
                                                                    ];
                                                                    newHours[index].closeTime = e.target.value;
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAvailabilitySettings"])({
                                                                        ...availability,
                                                                        workingHours: newHours
                                                                    });
                                                                    loadData();
                                                                },
                                                                className: "text-sm border rounded px-2 py-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 788,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, day.day, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 767,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 765,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 763,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Blocked Dates"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 821,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: availability.blockedDates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "No blocked dates"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 824,
                                            columnNumber: 19
                                        }, this) : availability.blockedDates.map((date)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-3 bg-red-50 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-red-700",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(date), "EEEE, MMMM d, yyyy")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 828,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            const newBlocked = availability.blockedDates.filter((d)=>d !== date);
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAvailabilitySettings"])({
                                                                ...availability,
                                                                blockedDates: newBlocked
                                                            });
                                                            loadData();
                                                        },
                                                        className: "text-red-600 hover:text-red-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, date, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 827,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 822,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 820,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Booking Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 847,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-2",
                                                        children: "Lead Time (days)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 850,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mb-2",
                                                        children: "Minimum days in advance for bookings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 851,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: 0,
                                                        max: 30,
                                                        value: availability.leadTimeDays,
                                                        onChange: (e)=>{
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAvailabilitySettings"])({
                                                                ...availability,
                                                                leadTimeDays: parseInt(e.target.value) || 0
                                                            });
                                                            loadData();
                                                        },
                                                        className: "w-32 border rounded-lg px-3 py-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 852,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 849,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-2",
                                                        children: "Max Bookings Per Slot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 865,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: 1,
                                                        max: 10,
                                                        value: availability.maxBookingsPerSlot,
                                                        onChange: (e)=>{
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAvailabilitySettings"])({
                                                                ...availability,
                                                                maxBookingsPerSlot: parseInt(e.target.value) || 1
                                                            });
                                                            loadData();
                                                        },
                                                        className: "w-32 border rounded-lg px-3 py-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 864,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 848,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 846,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 598,
                        columnNumber: 11
                    }, this),
                    activeTab === "security" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Active Sessions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 891,
                                        columnNumber: 15
                                    }, this),
                                    activeSessions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm",
                                        children: "No active sessions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 893,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: activeSessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-3 bg-green-50 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-green-800",
                                                                children: "Current Session"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 899,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-green-600",
                                                                children: [
                                                                    "IP: ",
                                                                    session.ip
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 900,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-green-600",
                                                                children: [
                                                                    "Started: ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(session.startedAt), "MMM d, h:mm a")
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 901,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 898,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forceLogoutSession"])(session.token);
                                                            handleLogout();
                                                        },
                                                        className: "px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200",
                                                        children: "Force Logout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, session.token, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 897,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 895,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 890,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Recent Login Activity"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 920,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-left text-xs font-medium text-gray-500",
                                                                    children: "Time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 925,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-left text-xs font-medium text-gray-500",
                                                                    children: "IP Address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 926,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-left text-xs font-medium text-gray-500",
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 927,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 924,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "divide-y divide-gray-100",
                                                        children: loginActivity.slice(0, 10).map((attempt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 text-sm",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(attempt.timestamp), "MMM d, h:mm a")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 933,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 text-sm font-mono text-xs",
                                                                        children: attempt.ipAddress
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 934,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2",
                                                                        children: attempt.successful ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                                    lineNumber: 938,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                " Success"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 937,
                                                                            columnNumber: 29
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                                    lineNumber: 942,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                " Failed"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 941,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 935,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, attempt.id, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 932,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 922,
                                                columnNumber: 17
                                            }, this),
                                            loginActivity.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm py-4",
                                                children: "No login activity recorded"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 950,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 921,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 919,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "Audit Log"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 957,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: exportAuditLogs,
                                                className: "flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 962,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Export CSV"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 958,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 956,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-left text-xs font-medium text-gray-500",
                                                                    children: "Time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 970,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-left text-xs font-medium text-gray-500",
                                                                    children: "Action"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 971,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-left text-xs font-medium text-gray-500",
                                                                    children: "Target"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-left text-xs font-medium text-gray-500",
                                                                    children: "Details"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 973,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 968,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "divide-y divide-gray-100",
                                                        children: auditLogs.slice(0, 20).map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 text-xs",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(log.timestamp), "MMM d, h:mm a")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 979,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium",
                                                                            children: log.actionType
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 981,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 980,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 text-sm",
                                                                        children: log.target
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 985,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 text-xs text-gray-600",
                                                                        children: [
                                                                            log.before && log.after && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    log.before,
                                                                                    " → ",
                                                                                    log.after
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 988,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            log.reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "ml-2 text-gray-500",
                                                                                children: [
                                                                                    "(",
                                                                                    log.reason,
                                                                                    ")"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 992,
                                                                                columnNumber: 42
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 986,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, log.id, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 978,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 976,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 967,
                                                columnNumber: 17
                                            }, this),
                                            auditLogs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm py-4",
                                                children: "No audit entries"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 998,
                                                columnNumber: 44
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 966,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 955,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 888,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            rescheduleBookingData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Reschedule Booking"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 1009,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-1",
                                            children: "Current:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 1012,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(rescheduleBookingData.date), "MMM d, yyyy"),
                                                " at ",
                                                rescheduleBookingData.timeSlot
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 1013,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 1011,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-2",
                                            children: "New Date"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 1018,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: newDate,
                                            onChange: (e)=>setNewDate(e.target.value),
                                            className: "w-full border rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-2",
                                            children: "New Time"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 1022,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "time",
                                            value: newTime,
                                            onChange: (e)=>setNewTime(e.target.value),
                                            className: "w-full border rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 1023,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setRescheduleBookingData(null);
                                                setNewDate("");
                                                setNewTime("");
                                            },
                                            className: "flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 1026,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleReschedule,
                                            className: "flex-1 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700",
                                            children: "Reschedule"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 1036,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 1025,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 1010,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 1008,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 1007,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_s(AdminDashboard, "QHtMc2pGtfoA+22j5T6Jh2pd2GA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7fab71a8._.js.map