import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

function generateBookingRef(): string {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `KBP-${year}-${random}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      tourId,
      departureId,
      firstName,
      lastName,
      email,
      phone,
      country,
      numberOfGuests,
      specialRequests,
      paymentMethod,
    } = body;

    if (!tourId || !firstName || !lastName || !email || !phone || !country) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const tour = await db.tour.findUnique({
      where: { id: tourId },
    });

    if (!tour) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    const totalAmount = tour.price * (numberOfGuests || 1);

    const booking = await db.booking.create({
      data: {
        bookingRef: generateBookingRef(),
        tourId,
        departureId,
        firstName,
        lastName,
        email,
        phone,
        country,
        numberOfGuests: numberOfGuests || 1,
        specialRequests,
        paymentMethod: paymentMethod || 'bank_transfer',
        totalAmount,
        depositAmount: totalAmount * 0.3,
        status: 'pending',
        paymentStatus: 'pending',
      },
      include: {
        tour: true,
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const bookingRef = searchParams.get('ref');

    if (!bookingRef) {
      return NextResponse.json({ error: 'Booking reference required' }, { status: 400 });
    }

    const booking = await db.booking.findUnique({
      where: { bookingRef },
      include: {
        tour: true,
        departure: true,
      },
    });

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    return NextResponse.json({ error: 'Failed to fetch booking' }, { status: 500 });
  }
}