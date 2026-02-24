import { Booking, BookingStatus, PaymentStatus, OverbookReason, OverbookResolution, AvailabilitySettings, OverbookingSettings } from './types';
import { getServiceById, getNumericPrice, getBookingFee } from './services';
import { logAdminAction } from './auth';

const BOOKINGS_KEY = 'stylash_bookings';
const AVAILABILITY_KEY = 'stylash_availability';
const OVERBOOKING_KEY = 'stylash_overbooking';

// Default availability settings
export const DEFAULT_AVAILABILITY: AvailabilitySettings = {
  workingHours: [
    { day: 0, isOpen: true, openTime: '09:00', closeTime: '17:00' }, // Sunday
    { day: 1, isOpen: true, openTime: '09:00', closeTime: '17:00' }, // Monday
    { day: 2, isOpen: true, openTime: '09:00', closeTime: '17:00' }, // Tuesday
    { day: 3, isOpen: true, openTime: '09:00', closeTime: '17:00' }, // Wednesday
    { day: 4, isOpen: true, openTime: '09:00', closeTime: '17:00' }, // Thursday
    { day: 5, isOpen: true, openTime: '09:00', closeTime: '17:00' }, // Friday
    { day: 6, isOpen: true, openTime: '09:00', closeTime: '17:00' }, // Saturday
  ],
  blockedDates: [],
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

// Check if a time slot is available
export function isSlotAvailable(date: string, timeSlot: string): boolean {
  const availability = getAvailabilitySettings();
  const bookings = getBookingsByDate(date);
  
  // Check if date is blocked
  if (availability.blockedDates.includes(date)) {
    return false;
  }
  
  // Check working hours
  const dateObj = new Date(date);
  const dayOfWeek = dateObj.getDay();
  const workingDay = availability.workingHours.find(w => w.day === dayOfWeek);
  
  if (!workingDay || !workingDay.isOpen) {
    return false;
  }
  
  // Check if time is within working hours
  if (timeSlot < workingDay.openTime || timeSlot > workingDay.closeTime) {
    return false;
  }
  
  // Check lead time
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const bookingDate = new Date(date);
  const daysDiff = Math.ceil((bookingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysDiff < availability.leadTimeDays) {
    return false;
  }
  
  // Count bookings for this slot
  const slotBookings = bookings.filter(
    b => b.timeSlot === timeSlot && 
    ['pending_payment', 'awaiting_verification', 'confirmed'].includes(b.status)
  );
  
  return slotBookings.length < availability.maxBookingsPerSlot;
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
  return stored ? JSON.parse(stored) : DEFAULT_AVAILABILITY;
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