import { Booking, BookingStatus, PaymentStatus, OverbookReason, OverbookResolution, AvailabilitySettings, OverbookingSettings } from './types';
import { getServiceById, getNumericPrice, getBookingFee } from './services';
import { logAdminAction } from './auth';

const BOOKINGS_KEY = 'stylash_bookings';
const AVAILABILITY_KEY = 'stylash_availability';
const OVERBOOKING_KEY = 'stylash_overbooking';

// Default time slots
export const DEFAULT_TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
];

// Default availability settings
export const DEFAULT_AVAILABILITY: AvailabilitySettings = {
  workingHours: [
    { day: 0, isOpen: false, openTime: '09:00', closeTime: '17:00' }, // Sunday - closed
    { day: 1, isOpen: true, openTime: '09:00', closeTime: '18:00' }, // Monday
    { day: 2, isOpen: true, openTime: '09:00', closeTime: '18:00' }, // Tuesday
    { day: 3, isOpen: true, openTime: '09:00', closeTime: '18:00' }, // Wednesday
    { day: 4, isOpen: true, openTime: '09:00', closeTime: '18:00' }, // Thursday
    { day: 5, isOpen: true, openTime: '09:00', closeTime: '18:00' }, // Friday
    { day: 6, isOpen: true, openTime: '09:00', closeTime: '18:00' }, // Saturday
  ],
  blockedDates: [],
  dateSpecificSlots: [], // Custom time slots for specific dates
  leadTimeDays: 1, // No same-day bookings
  maxBookingsPerSlot: 1,
  bufferTimeMinutes: 0,
};

// Default overbooking settings
export const DEFAULT_OVERBOOKING: OverbookingSettings = {
  enabled: true,
  maxOverbookedPerDay: 2,
  maxOverbookedPerSlot: 1,
  requireReason: true,
};

// Get all bookings
export function getAllBookings(): Booking[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(BOOKINGS_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Get bookings by date
export function getBookingsByDate(date: string): Booking[] {
  return getAllBookings().filter(b => b.date === date);
}

// Get bookings by status
export function getBookingsByStatus(status: BookingStatus): Booking[] {
  return getAllBookings().filter(b => b.status === status);
}

// Get booking by ID
export function getBookingById(id: string): Booking | undefined {
  return getAllBookings().find(b => b.id === id);
}

// Get booked time slots for a date
export function getBookedSlots(date: string): string[] {
  return getBookingsByDate(date)
    .filter(b => ['pending_payment', 'awaiting_verification', 'confirmed'].includes(b.status))
    .map(b => b.timeSlot);
}

// Get available time slots for a date
export function getAvailableTimeSlots(date: string): string[] {
  const availability = getAvailabilitySettings();
  
  // Check if date has specific slots defined
  const dateSpecific = availability.dateSpecificSlots.find(s => s.date === date);
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
  const workingDay = availability.workingHours.find(w => w.day === dayOfWeek);
  
  if (!workingDay || !workingDay.isOpen) {
    return [];
  }
  
  // Generate slots from working hours
  const slots: string[] = [];
  const startHour = parseInt(workingDay.openTime.split(':')[0]);
  const startMin = parseInt(workingDay.openTime.split(':')[1]);
  const endHour = parseInt(workingDay.closeTime.split(':')[0]);
  const endMin = parseInt(workingDay.closeTime.split(':')[1]);
  
  let currentHour = startHour;
  let currentMin = startMin;
  
  while (currentHour < endHour || (currentHour === endHour && currentMin < endMin)) {
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

// Check if a time slot is available
export function isSlotAvailable(date: string, timeSlot: string): boolean {
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
  const existingBooking = bookings.find(
    b => b.timeSlot === timeSlot && 
    ['pending_payment', 'awaiting_verification', 'confirmed'].includes(b.status)
  );
  
  // Return false if ANY booking exists for this slot
  return !existingBooking;
}

// Set custom time slots for a specific date
export function setDateSpecificSlots(date: string, timeSlots: string[], note?: string): void {
  const availability = getAvailabilitySettings();
  
  const existingIndex = availability.dateSpecificSlots.findIndex(s => s.date === date);
  const newSlot: import('./types').DateSpecificSlot = {
    date,
    timeSlots,
    note,
    isFullyBooked: false,
  };
  
  if (existingIndex >= 0) {
    availability.dateSpecificSlots[existingIndex] = newSlot;
  } else {
    availability.dateSpecificSlots.push(newSlot);
  }
  
  updateAvailabilitySettings(availability);
  logAdminAction('SET_DATE_SLOTS', { date, timeSlots, note });
}

// Remove custom time slots for a date
export function removeDateSpecificSlots(date: string): void {
  const availability = getAvailabilitySettings();
  availability.dateSpecificSlots = availability.dateSpecificSlots.filter(s => s.date !== date);
  updateAvailabilitySettings(availability);
  logAdminAction('REMOVE_DATE_SLOTS', { date });
}

// Mark a date as fully booked (but keep it visible)
export function markDateFullyBooked(date: string, note?: string): void {
  const availability = getAvailabilitySettings();
  
  const existingIndex = availability.dateSpecificSlots.findIndex(s => s.date === date);
  const newSlot: import('./types').DateSpecificSlot = {
    date,
    timeSlots: [],
    isFullyBooked: true,
    note: note || 'Fully booked',
  };
  
  if (existingIndex >= 0) {
    availability.dateSpecificSlots[existingIndex] = newSlot;
  } else {
    availability.dateSpecificSlots.push(newSlot);
  }
  
  updateAvailabilitySettings(availability);
  logAdminAction('MARK_FULLY_BOOKED', { date, note });
}

// Create a new booking
export function createBooking(data: {
  date: string;
  timeSlot: string;
  serviceId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
  paymentMethod: 'gcash' | 'maya' | 'bank_transfer';
}): Booking | null {
  if (typeof window === 'undefined') return null;
  
  const service = getServiceById(data.serviceId);
  if (!service) return null;
  
  const servicePrice = getNumericPrice(service.price);
  const bookingFee = getBookingFee(service.category);
  
  const booking: Booking = {
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
    updatedAt: new Date().toISOString(),
  };
  
  const bookings = getAllBookings();
  bookings.push(booking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  
  return booking;
}

// Update booking status
export function updateBookingStatus(
  id: string, 
  status: BookingStatus, 
  paymentStatus?: PaymentStatus
): Booking | null {
  const bookings = getAllBookings();
  const index = bookings.findIndex(b => b.id === id);
  
  if (index === -1) return null;
  
  bookings[index].status = status;
  if (paymentStatus) {
    bookings[index].paymentStatus = paymentStatus;
  }
  bookings[index].updatedAt = new Date().toISOString();
  
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  
  logAdminAction('UPDATE_BOOKING_STATUS', { 
    bookingId: id, 
    newStatus: status,
    newPaymentStatus: paymentStatus 
  });
  
  return bookings[index];
}

// Mark payment as received
export function markPaymentReceived(id: string): Booking | null {
  const bookings = getAllBookings();
  const index = bookings.findIndex(b => b.id === id);
  
  if (index === -1) return null;
  
  bookings[index].status = 'confirmed';
  bookings[index].paymentStatus = 'paid';
  bookings[index].verifiedAt = new Date().toISOString();
  bookings[index].updatedAt = new Date().toISOString();
  
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  
  logAdminAction('MARK_PAYMENT_RECEIVED', { bookingId: id });
  
  return bookings[index];
}

// Mark as overbooked
export function markAsOverbooked(
  id: string, 
  reason: OverbookReason, 
  notes?: string
): Booking | null {
  const bookings = getAllBookings();
  const index = bookings.findIndex(b => b.id === id);
  
  if (index === -1) return null;
  
  bookings[index].status = 'overbooked';
  bookings[index].isOverbooked = true;
  bookings[index].overbookReason = reason;
  bookings[index].overbookNotes = notes;
  bookings[index].overbookedAt = new Date().toISOString();
  bookings[index].overbookResolution = 'pending';
  bookings[index].updatedAt = new Date().toISOString();
  
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  
  logAdminAction('MARK_OVERBOOKED', { 
    bookingId: id, 
    reason,
    notes 
  });
  
  return bookings[index];
}

// Resolve overbooking
export function resolveOverbooking(
  id: string,
  resolution: OverbookResolution,
  compensationAmount?: number
): Booking | null {
  const bookings = getAllBookings();
  const index = bookings.findIndex(b => b.id === id);
  
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
  
  logAdminAction('RESOLVE_OVERBOOKING', { 
    bookingId: id, 
    resolution,
    compensationAmount 
  });
  
  return bookings[index];
}

// Cancel booking
export function cancelBooking(id: string, reason?: string): Booking | null {
  const bookings = getAllBookings();
  const index = bookings.findIndex(b => b.id === id);
  
  if (index === -1) return null;
  
  bookings[index].status = 'cancelled';
  bookings[index].paymentStatus = 'refunded';
  bookings[index].cancellationReason = reason;
  bookings[index].cancelledAt = new Date().toISOString();
  bookings[index].updatedAt = new Date().toISOString();
  
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  
  logAdminAction('CANCEL_BOOKING', { bookingId: id, reason });
  
  return bookings[index];
}

// Reschedule booking
export function rescheduleBooking(
  id: string, 
  newDate: string, 
  newTimeSlot: string
): Booking | null {
  const bookings = getAllBookings();
  const index = bookings.findIndex(b => b.id === id);
  
  if (index === -1) return null;
  
  const oldDate = bookings[index].date;
  const oldTime = bookings[index].timeSlot;
  
  bookings[index].date = newDate;
  bookings[index].timeSlot = newTimeSlot;
  bookings[index].updatedAt = new Date().toISOString();
  
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  
  logAdminAction('RESCHEDULE_BOOKING', { 
    bookingId: id, 
    oldDate,
    oldTime,
    newDate,
    newTimeSlot 
  });
  
  return bookings[index];
}

// Get availability settings
export function getAvailabilitySettings(): AvailabilitySettings {
  if (typeof window === 'undefined') return DEFAULT_AVAILABILITY;
  const stored = localStorage.getItem(AVAILABILITY_KEY);
  if (!stored) return DEFAULT_AVAILABILITY;
  
  const parsed = JSON.parse(stored);
  
  // Merge with defaults to ensure new fields exist
  return {
    ...DEFAULT_AVAILABILITY,
    ...parsed,
    // Ensure dateSpecificSlots exists (for backward compatibility)
    dateSpecificSlots: parsed.dateSpecificSlots || [],
  };
}

// Update availability settings
export function updateAvailabilitySettings(settings: AvailabilitySettings): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(AVAILABILITY_KEY, JSON.stringify(settings));
  logAdminAction('UPDATE_AVAILABILITY', { ...settings });
}

// Get overbooking settings
export function getOverbookingSettings(): OverbookingSettings {
  if (typeof window === 'undefined') return DEFAULT_OVERBOOKING;
  const stored = localStorage.getItem(OVERBOOKING_KEY);
  return stored ? JSON.parse(stored) : DEFAULT_OVERBOOKING;
}

// Update overbooking settings
export function updateOverbookingSettings(settings: OverbookingSettings): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(OVERBOOKING_KEY, JSON.stringify(settings));
  logAdminAction('UPDATE_OVERBOOKING_SETTINGS', { ...settings });
}

// Get booking statistics
export function getBookingStats() {
  const bookings = getAllBookings();
  const today = new Date().toISOString().split('T')[0];
  
  return {
    total: bookings.length,
    pendingPayment: bookings.filter(b => b.status === 'pending_payment').length,
    awaitingVerification: bookings.filter(b => b.status === 'awaiting_verification').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
    overbooked: bookings.filter(b => b.status === 'overbooked').length,
    today: bookings.filter(b => b.date === today).length,
    revenue: bookings
      .filter(b => b.paymentStatus === 'paid')
      .reduce((sum, b) => sum + b.bookingFee, 0),
  };
}

// Search bookings
export function searchBookings(query: string): Booking[] {
  const lowerQuery = query.toLowerCase();
  return getAllBookings().filter(b => 
    b.id.toLowerCase().includes(lowerQuery) ||
    b.customerName.toLowerCase().includes(lowerQuery) ||
    b.customerEmail.toLowerCase().includes(lowerQuery) ||
    b.customerPhone.includes(query) ||
    b.serviceName.toLowerCase().includes(lowerQuery)
  );
}

// Clear all bookings (for testing)
export function clearAllBookings(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(BOOKINGS_KEY);
}