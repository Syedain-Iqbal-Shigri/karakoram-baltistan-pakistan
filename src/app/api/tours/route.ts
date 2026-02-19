import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const tours = await db.tour.findMany({
      include: {
        category: true,
        reviews: {
          where: { approved: true },
          select: { rating: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const toursWithRating = tours.map((tour) => ({
      ...tour,
      averageRating: tour.reviews.length > 0
        ? tour.reviews.reduce((acc, r) => acc + r.rating, 0) / tour.reviews.length
        : null,
      reviewCount: tour.reviews.length,
    }));

    return NextResponse.json(toursWithRating);
  } catch (error) {
    console.error('Error fetching tours:', error);
    return NextResponse.json({ error: 'Failed to fetch tours' }, { status: 500 });
  }
}