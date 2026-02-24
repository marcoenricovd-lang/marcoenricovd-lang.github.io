"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LogOut,
  Calendar,
  Clock,
  User,
  Phone,
  Search,
  CheckCircle,
  XCircle,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Settings,
  Shield,
  Ban,
  AlertTriangle,
  Download,
  Eye,
  EyeOff,
  RefreshCw,
  Plus,
  Minus,
  MapPin,
  CreditCard,
  Filter,
  MoreVertical,
  CalendarDays,
  LayoutGrid,
  List,
} from "lucide-react";
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek, addWeeks, subWeeks, addDays, subDays } from "date-fns";
import { logoutAdmin, getSession, getLoginActivity, getActiveSessions, forceLogoutSession, getAuditLog, addAuditLogEntry } from "@/lib/auth";
import {
  getAllBookings,
  getBookingStats,
  markPaymentReceived,
  cancelBooking,
  rescheduleBooking,
  getAvailabilitySettings,
  updateAvailabilitySettings,
  setDateSpecificSlots,
  removeDateSpecificSlots,
  markDateFullyBooked,
  DEFAULT_AVAILABILITY,
  DEFAULT_TIME_SLOTS,
} from "@/lib/bookings";
import { SERVICES, getServiceById } from "@/lib/services";
import { Booking, BookingStatus, CalendarView, AuditLogEntry } from "@/lib/types";

const STATUS_COLORS: Record<BookingStatus, { bg: string; text: string; border: string }> = {
  pending_payment: { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
  awaiting_verification: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  confirmed: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  completed: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  cancelled: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  overbooked: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
};

const SERVICE_COLORS: Record<string, string> = {
  lashes: "bg-pink-400",
  nails: "bg-purple-400",
  brows: "bg-amber-400",
  hair: "bg-cyan-400",
  underarm: "bg-emerald-400",
  airlashes: "bg-rose-400",
  training: "bg-indigo-400",
};

type AdminTab = "calendar" | "bookings" | "availability" | "security";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>("calendar");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState(getBookingStats());
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Calendar state
  const [calendarView, setCalendarView] = useState<CalendarView>("month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Availability state
  const [availability, setAvailability] = useState(getAvailabilitySettings());
  const [selectedSlotDate, setSelectedSlotDate] = useState<string>("");
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);
  const [slotNote, setSlotNote] = useState("");

  // Security state
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>([]);
  const [activeSessions, setActiveSessions] = useState<{ token: string; ip: string; startedAt: string }[]>([]);
  const [loginActivity, setLoginActivity] = useState<import("@/lib/types").LoginAttempt[]>([]);

  // Reschedule modal
  const [rescheduleBookingData, setRescheduleBookingData] = useState<Booking | null>(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadData = () => {
    setBookings(getAllBookings());
    setStats(getBookingStats());
    setAvailability(getAvailabilitySettings());
    setAuditLogs(getAuditLog());
    setActiveSessions(getActiveSessions());
    setLoginActivity(getLoginActivity());
    setLoading(false);
  };

  const handleLogout = () => {
    logoutAdmin();
    router.push("/admin/login");
  };

  const handleMarkPaid = (bookingId: string) => {
    markPaymentReceived(bookingId);
    addAuditLogEntry({
      timestamp: new Date().toISOString(),
      user: "admin",
      actionType: "PAYMENT_RECEIVED",
      target: bookingId,
      after: "paid",
      ipAddress: activeSessions[0]?.ip || "unknown",
      sessionToken: activeSessions[0]?.token || "unknown",
    });
    loadData();
  };

  const handleCancel = (bookingId: string) => {
    cancelBooking(bookingId, "Cancelled by admin");
    addAuditLogEntry({
      timestamp: new Date().toISOString(),
      user: "admin",
      actionType: "BOOKING_CANCELLED",
      target: bookingId,
      after: "cancelled",
      ipAddress: activeSessions[0]?.ip || "unknown",
      sessionToken: activeSessions[0]?.token || "unknown",
    });
    loadData();
  };

  const handleReschedule = () => {
    if (rescheduleBookingData && newDate && newTime) {
      rescheduleBooking(rescheduleBookingData.id, newDate, newTime);
      addAuditLogEntry({
        timestamp: new Date().toISOString(),
        user: "admin",
        actionType: "BOOKING_RESCHEDULED",
        target: rescheduleBookingData.id,
        before: `${rescheduleBookingData.date} ${rescheduleBookingData.timeSlot}`,
        after: `${newDate} ${newTime}`,
        ipAddress: activeSessions[0]?.ip || "unknown",
        sessionToken: activeSessions[0]?.token || "unknown",
      });
      setRescheduleBookingData(null);
      setNewDate("");
      setNewTime("");
      loadData();
    }
  };

  // Calendar navigation
  const navigateCalendar = (direction: "prev" | "next") => {
    if (calendarView === "month") {
      setCurrentDate(direction === "prev" ? subMonths(currentDate, 1) : addMonths(currentDate, 1));
    } else if (calendarView === "week") {
      setCurrentDate(direction === "prev" ? subWeeks(currentDate, 1) : addWeeks(currentDate, 1));
    } else {
      setCurrentDate(direction === "prev" ? subDays(currentDate, 1) : addDays(currentDate, 1));
    }
  };

  // Get calendar days
  const getCalendarDays = () => {
    if (calendarView === "month") {
      const start = startOfMonth(currentDate);
      const end = endOfMonth(currentDate);
      return eachDayOfInterval({ start, end });
    } else if (calendarView === "week") {
      const start = startOfWeek(currentDate);
      const end = endOfWeek(currentDate);
      return eachDayOfInterval({ start, end });
    } else {
      return [currentDate];
    }
  };

  // Get bookings for a specific date
  const getBookingsForDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return bookings.filter((b) => b.date === dateStr);
  };

  // Quick actions
  const blockToday = () => {
    const today = format(new Date(), "yyyy-MM-dd");
    const newBlocked = [...availability.blockedDates, today];
    updateAvailabilitySettings({ ...availability, blockedDates: newBlocked });
    addAuditLogEntry({
      timestamp: new Date().toISOString(),
      user: "admin",
      actionType: "AVAILABILITY_CHANGED",
      target: today,
      after: "blocked",
      ipAddress: activeSessions[0]?.ip || "unknown",
      sessionToken: activeSessions[0]?.token || "unknown",
    });
    loadData();
  };

  const blockTomorrow = () => {
    const tomorrow = format(addDays(new Date(), 1), "yyyy-MM-dd");
    const newBlocked = [...availability.blockedDates, tomorrow];
    updateAvailabilitySettings({ ...availability, blockedDates: newBlocked });
    addAuditLogEntry({
      timestamp: new Date().toISOString(),
      user: "admin",
      actionType: "AVAILABILITY_CHANGED",
      target: tomorrow,
      after: "blocked",
      ipAddress: activeSessions[0]?.ip || "unknown",
      sessionToken: activeSessions[0]?.token || "unknown",
    });
    loadData();
  };

  const emergencyFullBook = () => {
    const today = format(new Date(), "yyyy-MM-dd");
    if (!availability.blockedDates.includes(today)) {
      blockToday();
    }
  };

  // Filter bookings
  const filteredBookings = bookings
    .filter(
      (b) =>
        b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Export audit logs
  const exportAuditLogs = () => {
    const csv = [
      ["Timestamp", "User", "Action", "Target", "Before", "After", "IP Address"].join(","),
      ...auditLogs.map((log) =>
        [log.timestamp, log.user, log.actionType, log.target, log.before || "", log.after || "", log.ipAddress].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `audit-log-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-pink-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold font-serif text-pink-600">
              StyLash
            </Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 font-medium">Admin Dashboard</span>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            {[
              { id: "calendar", label: "Calendar", icon: Calendar },
              { id: "bookings", label: "Bookings", icon: List },
              { id: "availability", label: "Availability", icon: Settings },
              { id: "security", label: "Security", icon: Shield },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AdminTab)}
                className={`flex items-center gap-2 px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === tab.id ? "border-pink-600 text-pink-600" : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Quick Actions Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Today's Bookings: <strong className="text-pink-600">{stats.today}</strong></span>
            <span>This Week's Revenue: <strong className="text-pink-600">₱{stats.revenue}</strong></span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          {[
            { label: "Total", value: stats.total, color: "text-gray-900", bg: "bg-gray-50" },
            { label: "Pending Payment", value: stats.pendingPayment, color: "text-yellow-600", bg: "bg-yellow-50" },
            { label: "Awaiting Verification", value: stats.awaitingVerification, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Confirmed", value: stats.confirmed, color: "text-green-600", bg: "bg-green-50" },
            { label: "Completed", value: stats.completed, color: "text-purple-600", bg: "bg-purple-50" },
            { label: "Revenue", value: `₱${stats.revenue}`, color: "text-pink-600", bg: "bg-pink-50" },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-xl p-4 text-center`}>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Calendar Tab */}
        {activeTab === "calendar" && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold">
                  {calendarView === "month" && format(currentDate, "MMMM yyyy")}
                  {calendarView === "week" && `Week of ${format(startOfWeek(currentDate), "MMM d")}`}
                  {calendarView === "day" && format(currentDate, "EEEE, MMMM d, yyyy")}
                </h2>
                <div className="flex items-center gap-1">
                  <button onClick={() => navigateCalendar("prev")} className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={() => setCurrentDate(new Date())} className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
                    Today
                  </button>
                  <button onClick={() => navigateCalendar("next")} className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                {(["month", "week", "day"] as CalendarView[]).map((view) => (
                  <button
                    key={view}
                    onClick={() => setCalendarView(view)}
                    className={`px-3 py-1.5 text-sm rounded-md capitalize ${
                      calendarView === view ? "bg-white shadow-sm text-pink-600" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
              {calendarView === "month" && (
                <div className="grid grid-cols-7 gap-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {getCalendarDays().map((date, i) => {
                    const dayBookings = getBookingsForDate(date);
                    const isBlocked = availability.blockedDates.includes(format(date, "yyyy-MM-dd"));
                    const isToday = isSameDay(date, new Date());
                    const isCurrentMonth = isSameMonth(date, currentDate);

                    return (
                      <div
                        key={i}
                        onClick={() => setSelectedDate(date)}
                        className={`min-h-[100px] p-2 border rounded-lg cursor-pointer hover:border-pink-300 transition-colors ${
                          isToday ? "bg-pink-50 border-pink-300" : "bg-white border-gray-200"
                        } ${!isCurrentMonth && "opacity-50"} ${isBlocked && "bg-red-50"}`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-medium ${isToday ? "text-pink-600" : "text-gray-700"}`}>
                            {format(date, "d")}
                          </span>
                          {isBlocked && <Ban className="w-4 h-4 text-red-500" />}
                          {dayBookings.length > 0 && (
                            <span className="text-xs bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded-full">
                              {dayBookings.length}
                            </span>
                          )}
                        </div>
                        <div className="space-y-1">
                          {dayBookings.slice(0, 3).map((booking) => {
                            const service = getServiceById(booking.serviceId);
                            return (
                              <div
                                key={booking.id}
                                className={`text-xs px-1.5 py-0.5 rounded truncate ${
                                  SERVICE_COLORS[service?.category || "lashes"] || "bg-gray-400"
                                } text-white`}
                              >
                                {booking.timeSlot} - {booking.customerName.split(" ")[0]}
                              </div>
                            );
                          })}
                          {dayBookings.length > 3 && (
                            <div className="text-xs text-gray-500 text-center">+{dayBookings.length - 3} more</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {(calendarView === "week" || calendarView === "day") && (
                <div className="space-y-2">
                  {getCalendarDays().map((date) => {
                    const dayBookings = getBookingsForDate(date);
                    const isBlocked = availability.blockedDates.includes(format(date, "yyyy-MM-dd"));

                    return (
                      <div key={date.toISOString()} className="border rounded-lg overflow-hidden">
                        <div className={`p-3 font-medium ${isBlocked ? "bg-red-50 text-red-700" : "bg-gray-50 text-gray-700"}`}>
                          {format(date, "EEEE, MMMM d, yyyy")}
                          {isBlocked && <span className="ml-2 text-sm">(Blocked)</span>}
                        </div>
                        <div className="p-4 space-y-2">
                          {dayBookings.length === 0 ? (
                            <p className="text-gray-500 text-sm">No bookings</p>
                          ) : (
                            dayBookings.map((booking) => {
                              const service = getServiceById(booking.serviceId);
                              return (
                                <div
                                  key={booking.id}
                                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`w-3 h-3 rounded-full ${
                                        SERVICE_COLORS[service?.category || "lashes"]
                                      }`}
                                    />
                                    <div>
                                      <p className="font-medium">{booking.timeSlot}</p>
                                      <p className="text-sm text-gray-600">{booking.serviceName}</p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">{booking.customerName}</p>
                                    <span
                                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                                        STATUS_COLORS[booking.status].bg
                                      } ${STATUS_COLORS[booking.status].text}`}
                                    >
                                      {booking.status.replace("_", " ")}
                                    </span>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Search */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bookings by customer, ID, or service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border rounded-xl focus:border-pink-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Bookings Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Service</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date & Time</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-600">{booking.id}</td>
                      <td className="px-4 py-3">
                        <p className="font-medium text-sm">{booking.customerName}</p>
                        <p className="text-xs text-gray-500">{booking.customerPhone}</p>
                      </td>
                      <td className="px-4 py-3 text-sm">{booking.serviceName}</td>
                      <td className="px-4 py-3">
                        <p className="text-sm">{format(parseISO(booking.date), "MMM d, yyyy")}</p>
                        <p className="text-xs text-gray-500">{booking.timeSlot}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${STATUS_COLORS[booking.status].bg} ${STATUS_COLORS[booking.status].text}`}
                        >
                          {booking.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {booking.status === "awaiting_verification" && (
                            <button
                              onClick={() => handleMarkPaid(booking.id)}
                              className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-lg hover:bg-green-200 font-medium"
                            >
                              Mark Paid
                            </button>
                          )}
                          {(booking.status === "pending_payment" || booking.status === "awaiting_verification") && (
                            <button
                              onClick={() => handleCancel(booking.id)}
                              className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-200 font-medium"
                            >
                              Cancel
                            </button>
                          )}
                          {booking.status !== "cancelled" && booking.status !== "completed" && (
                            <button
                              onClick={() => {
                                setRescheduleBookingData(booking);
                                setNewDate(booking.date);
                                setNewTime(booking.timeSlot);
                              }}
                              className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-200 font-medium"
                            >
                              Reschedule
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredBookings.length === 0 && <p className="text-center text-gray-500 py-12">No bookings found</p>}
            </div>
          </div>
        )}

        {/* Availability Tab */}
        {activeTab === "availability" && (
          <div className="space-y-6">
            {/* Date-Specific Time Slots */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Date-Specific Time Slots</h3>
              <p className="text-sm text-gray-600 mb-4">
                Set custom available times for specific dates. This overrides the default working hours.
              </p>
              
              {/* Add New Date Slots */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Date</label>
                    <input
                      type="date"
                      value={selectedSlotDate}
                      onChange={(e) => {
                        setSelectedSlotDate(e.target.value);
                        // Load existing slots if any
                        const existing = availability.dateSpecificSlots.find(s => s.date === e.target.value);
                        if (existing) {
                          setSelectedTimeSlots(existing.timeSlots);
                          setSlotNote(existing.note || "");
                        } else {
                          setSelectedTimeSlots([]);
                          setSlotNote("");
                        }
                      }}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Note (optional)</label>
                    <input
                      type="text"
                      value={slotNote}
                      onChange={(e) => setSlotNote(e.target.value)}
                      placeholder="e.g., Holiday hours, Special event"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>
                
                <label className="block text-sm font-medium mb-2">Available Time Slots</label>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mb-4">
                  {DEFAULT_TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => {
                        if (selectedTimeSlots.includes(slot)) {
                          setSelectedTimeSlots(selectedTimeSlots.filter(s => s !== slot));
                        } else {
                          setSelectedTimeSlots([...selectedTimeSlots, slot].sort());
                        }
                      }}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedTimeSlots.includes(slot)
                          ? "bg-pink-600 text-white"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (selectedSlotDate && selectedTimeSlots.length > 0) {
                        setDateSpecificSlots(selectedSlotDate, selectedTimeSlots, slotNote);
                        addAuditLogEntry({
                          timestamp: new Date().toISOString(),
                          user: "admin",
                          actionType: "AVAILABILITY_CHANGED",
                          target: selectedSlotDate,
                          after: `${selectedTimeSlots.length} slots: ${selectedTimeSlots.join(", ")}`,
                          ipAddress: activeSessions[0]?.ip || "unknown",
                          sessionToken: activeSessions[0]?.token || "unknown",
                        });
                        loadData();
                        setSelectedSlotDate("");
                        setSelectedTimeSlots([]);
                        setSlotNote("");
                      }
                    }}
                    disabled={!selectedSlotDate || selectedTimeSlots.length === 0}
                    className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Save Time Slots
                  </button>
                  <button
                    onClick={() => {
                      if (selectedSlotDate) {
                        markDateFullyBooked(selectedSlotDate, slotNote);
                        addAuditLogEntry({
                          timestamp: new Date().toISOString(),
                          user: "admin",
                          actionType: "AVAILABILITY_CHANGED",
                          target: selectedSlotDate,
                          after: "Fully Booked",
                          ipAddress: activeSessions[0]?.ip || "unknown",
                          sessionToken: activeSessions[0]?.token || "unknown",
                        });
                        loadData();
                        setSelectedSlotDate("");
                        setSelectedTimeSlots([]);
                        setSlotNote("");
                      }
                    }}
                    disabled={!selectedSlotDate}
                    className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Mark Fully Booked
                  </button>
                </div>
              </div>
              
              {/* Existing Date Slots */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700">Configured Dates</h4>
                {availability.dateSpecificSlots.length === 0 ? (
                  <p className="text-gray-500 text-sm">No date-specific slots configured</p>
                ) : (
                  availability.dateSpecificSlots.map((slot) => (
                    <div key={slot.date} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium text-blue-900">
                          {format(parseISO(slot.date), "EEEE, MMMM d, yyyy")}
                        </p>
                        {slot.isFullyBooked ? (
                          <p className="text-sm text-orange-600 font-medium">Fully Booked</p>
                        ) : (
                          <p className="text-sm text-blue-700">
                            {slot.timeSlots.length} slots: {slot.timeSlots.slice(0, 5).join(", ")}
                            {slot.timeSlots.length > 5 && ` +${slot.timeSlots.length - 5} more`}
                          </p>
                        )}
                        {slot.note && <p className="text-xs text-gray-500 mt-1">{slot.note}</p>}
                      </div>
                      <button
                        onClick={() => {
                          removeDateSpecificSlots(slot.date);
                          addAuditLogEntry({
                            timestamp: new Date().toISOString(),
                            user: "admin",
                            actionType: "AVAILABILITY_CHANGED",
                            target: slot.date,
                            after: "Removed custom slots",
                            ipAddress: activeSessions[0]?.ip || "unknown",
                            sessionToken: activeSessions[0]?.token || "unknown",
                          });
                          loadData();
                        }}
                        className="text-red-600 hover:text-red-700"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
              <div className="space-y-3">
                {availability.workingHours.map((day, index) => (
                  <div key={day.day} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <span className="w-24 font-medium">
                        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day.day]}
                      </span>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={day.isOpen}
                          onChange={(e) => {
                            const newHours = [...availability.workingHours];
                            newHours[index].isOpen = e.target.checked;
                            updateAvailabilitySettings({ ...availability, workingHours: newHours });
                            loadData();
                          }}
                          className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                        />
                        <span className="text-sm">Open</span>
                      </label>
                    </div>
                    {day.isOpen && (
                      <div className="flex items-center gap-2">
                        <input
                          type="time"
                          value={day.openTime}
                          onChange={(e) => {
                            const newHours = [...availability.workingHours];
                            newHours[index].openTime = e.target.value;
                            updateAvailabilitySettings({ ...availability, workingHours: newHours });
                            loadData();
                          }}
                          className="text-sm border rounded px-2 py-1"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                          type="time"
                          value={day.closeTime}
                          onChange={(e) => {
                            const newHours = [...availability.workingHours];
                            newHours[index].closeTime = e.target.value;
                            updateAvailabilitySettings({ ...availability, workingHours: newHours });
                            loadData();
                          }}
                          className="text-sm border rounded px-2 py-1"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Blocked Dates */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Blocked Dates</h3>
              <div className="space-y-2">
                {availability.blockedDates.length === 0 ? (
                  <p className="text-gray-500 text-sm">No blocked dates</p>
                ) : (
                  availability.blockedDates.map((date) => (
                    <div key={date} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="font-medium text-red-700">{format(parseISO(date), "EEEE, MMMM d, yyyy")}</span>
                      <button
                        onClick={() => {
                          const newBlocked = availability.blockedDates.filter((d) => d !== date);
                          updateAvailabilitySettings({ ...availability, blockedDates: newBlocked });
                          loadData();
                        }}
                        className="text-red-600 hover:text-red-700"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Lead Time */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Booking Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Lead Time (days)</label>
                  <p className="text-xs text-gray-500 mb-2">Minimum days in advance for bookings</p>
                  <input
                    type="number"
                    min={0}
                    max={30}
                    value={availability.leadTimeDays}
                    onChange={(e) => {
                      updateAvailabilitySettings({ ...availability, leadTimeDays: parseInt(e.target.value) || 0 });
                      loadData();
                    }}
                    className="w-32 border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Max Bookings Per Slot</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={availability.maxBookingsPerSlot}
                    onChange={(e) => {
                      updateAvailabilitySettings({
                        ...availability,
                        maxBookingsPerSlot: parseInt(e.target.value) || 1,
                      });
                      loadData();
                    }}
                    className="w-32 border rounded-lg px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === "security" && (
          <div className="space-y-6">
            {/* Active Sessions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Active Sessions</h3>
              {activeSessions.length === 0 ? (
                <p className="text-gray-500 text-sm">No active sessions</p>
              ) : (
                <div className="space-y-2">
                  {activeSessions.map((session) => (
                    <div key={session.token} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-800">Current Session</p>
                        <p className="text-xs text-green-600">IP: {session.ip}</p>
                        <p className="text-xs text-green-600">Started: {format(parseISO(session.startedAt), "MMM d, h:mm a")}</p>
                      </div>
                      <button
                        onClick={() => {
                          forceLogoutSession(session.token);
                          handleLogout();
                        }}
                        className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200"
                      >
                        Force Logout
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Login Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Login Activity</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Time</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">IP Address</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {loginActivity.slice(0, 10).map((attempt) => (
                      <tr key={attempt.id}>
                        <td className="px-4 py-2 text-sm">{format(parseISO(attempt.timestamp), "MMM d, h:mm a")}</td>
                        <td className="px-4 py-2 text-sm font-mono text-xs">{attempt.ipAddress}</td>
                        <td className="px-4 py-2">
                          {attempt.successful ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
                              <CheckCircle className="w-3 h-3" /> Success
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs">
                              <XCircle className="w-3 h-3" /> Failed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {loginActivity.length === 0 && <p className="text-gray-500 text-sm py-4">No login activity recorded</p>}
              </div>
            </div>

            {/* Audit Log */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Audit Log</h3>
                <button
                  onClick={exportAuditLogs}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200"
                >
                  <Download className="w-4 h-4" />
                  Export CSV
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Time</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Action</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Target</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {auditLogs.slice(0, 20).map((log) => (
                      <tr key={log.id}>
                        <td className="px-4 py-2 text-xs">{format(parseISO(log.timestamp), "MMM d, h:mm a")}</td>
                        <td className="px-4 py-2">
                          <span className="inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                            {log.actionType}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-sm">{log.target}</td>
                        <td className="px-4 py-2 text-xs text-gray-600">
                          {log.before && log.after && (
                            <span>
                              {log.before} → {log.after}
                            </span>
                          )}
                          {log.reason && <span className="ml-2 text-gray-500">({log.reason})</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {auditLogs.length === 0 && <p className="text-gray-500 text-sm py-4">No audit entries</p>}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Reschedule Modal */}
      {rescheduleBookingData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Reschedule Booking</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Current:</p>
                <p className="font-medium">
                  {format(parseISO(rescheduleBookingData.date), "MMM d, yyyy")} at {rescheduleBookingData.timeSlot}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">New Date</label>
                <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">New Time</label>
                <input type="time" value={newTime} onChange={(e) => setNewTime(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setRescheduleBookingData(null);
                    setNewDate("");
                    setNewTime("");
                  }}
                  className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button onClick={handleReschedule} className="flex-1 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}