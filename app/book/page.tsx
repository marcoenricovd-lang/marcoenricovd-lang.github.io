"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, User, Phone, Mail, CheckCircle, CreditCard, Loader2 } from "lucide-react";
import { format, isSameDay, startOfDay, isBefore, isToday } from "date-fns";
import { SERVICES, getServiceById, getBookingFee, formatPrice } from "@/lib/services";
import { createBooking } from "@/lib/bookings";

const TIME_SLOTS = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30"];

function BookingForm() {
  const searchParams = useSearchParams();
  const preSelectedService = searchParams.get("service");
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState(preSelectedService || "");
  const [isLoading, setIsLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });

  const selectedService = getServiceById(selectedServiceId);

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear(), month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1), lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDay.getDay(); i++) days.push(null);
    for (let i = 1; i <= lastDay.getDate(); i++) days.push(new Date(year, month, i));
    return days;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!selectedDate || !selectedTime || !selectedService) { setIsLoading(false); return; }
    createBooking({ 
      date: format(selectedDate, "yyyy-MM-dd"), 
      timeSlot: selectedTime, 
      serviceId: selectedServiceId, 
      customerName: formData.name, 
      customerEmail: formData.email, 
      customerPhone: formData.phone, 
      notes: formData.notes, 
      paymentMethod: "gcash" 
    });
    setStep(4);
    setIsLoading(false);
  };

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold font-serif mb-4">Booking Confirmed!</h1>
            <p className="text-gray-600 mb-6">Your appointment has been scheduled.</p>
            <Link href="/" className="px-8 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-pink-600"><ChevronLeft className="w-5 h-5" /><span>Back</span></Link>
          <span className="text-2xl font-bold font-serif text-pink-600">Stylash</span>
          <div className="w-16" />
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {step === 1 && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Select a Service</h1>
            <div className="grid md:grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <button key={service.id} onClick={() => { setSelectedServiceId(service.id); setStep(2); }} 
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${selectedServiceId === service.id ? "border-pink-600 bg-pink-50" : "border-gray-200 hover:border-pink-300"}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-pink-600 font-bold">{formatPrice(service.price)}</span>
                  </div>
                  <h3 className="font-bold text-lg">{service.name}</h3>
                  {service.description && <p className="text-gray-500 text-sm mt-1">{service.description}</p>}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Select Date & Time</h1>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 hover:bg-gray-100 rounded">&lt;</button>
                  <h3 className="font-bold">{format(currentMonth, "MMMM yyyy")}</h3>
                  <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 hover:bg-gray-100 rounded">&gt;</button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">{["S","M","T","W","T","F","S"].map(d => <div key={d} className="py-2 text-gray-500">{d}</div>)}</div>
                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDays().map((date, i) => (
                    <div key={i}>
                      {date ? (
                        <button onClick={() => setSelectedDate(date)} disabled={isBefore(date, startOfDay(new Date()))} 
                          className={`w-full aspect-square rounded-lg text-sm ${selectedDate && isSameDay(date, selectedDate) ? "bg-pink-600 text-white" : isBefore(date, startOfDay(new Date())) ? "text-gray-300" : "hover:bg-pink-50"}`}>{date.getDate()}</button>
                      ) : <div />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-pink-600" />Available Times</h3>
                {!selectedDate ? <p className="text-gray-500 text-center py-12">Select a date first</p> : (
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map(time => (
                      <button key={time} onClick={() => setSelectedTime(time)} 
                        className={`py-2 px-1 rounded-lg text-sm ${selectedTime === time ? "bg-pink-600 text-white" : "bg-pink-50 text-pink-700 hover:bg-pink-100"}`}>{time}</button>
                    ))}
                  </div>
                )}
                {selectedTime && <button onClick={() => setStep(3)} className="w-full mt-4 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700">Continue</button>}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Your Details</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <div className="relative"><User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full pl-10 pr-4 py-3 border rounded-xl focus:border-pink-500 focus:outline-none" placeholder="Your name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <div className="relative"><Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full pl-10 pr-4 py-3 border rounded-xl focus:border-pink-500 focus:outline-none" placeholder="09XX XXX XXXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <div className="relative"><Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full pl-10 pr-4 py-3 border rounded-xl focus:border-pink-500 focus:outline-none" placeholder="your@email.com" />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 border-2 border-gray-300 rounded-full font-medium hover:bg-gray-50">Back</button>
                <button type="submit" disabled={isLoading} className="flex-1 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 flex items-center justify-center gap-2">
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <CreditCard className="w-5 h-5" />}{isLoading ? "Processing..." : "Complete Booking"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-pink-600" /></div>}>
      <BookingForm />
    </Suspense>
  );
}