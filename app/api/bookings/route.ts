import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-static';

let bookings: any[] = [];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const date = searchParams.get("date");
  
  if (date) {
    const dateBookings = bookings.filter(b => b.date === date);
    return NextResponse.json({ bookings: dateBookings, bookedSlots: dateBookings.map(b => b.timeSlot) });
  }
  
  return NextResponse.json({ bookings });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { date, timeSlot, service, name, email, phone } = body;
    
    if (!date || !timeSlot || !service || !name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    
    const existingBooking = bookings.find(b => b.date === date && b.timeSlot === timeSlot);
    if (existingBooking) {
      return NextResponse.json({ error: "Time slot already booked" }, { status: 409 });
    }
    
    const newBooking = {
      id: `STL-${Date.now().toString(36).toUpperCase()}`,
      date, timeSlot, service, name, email, phone,
      status: "confirmed",
      createdAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    
    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}