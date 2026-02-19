import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    const tour = await db.tour.findUnique({
      where: { slug },
      include: {
        category: true,
        departures: {
          where: {
            startDate: { gte: new Date() },
          },
          orderBy: { startDate: 'asc' },
        },
        reviews: {
          where: { approved: true },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!tour) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    const averageRating = tour.reviews.length > 0
      ? tour.reviews.reduce((acc, r) => acc + r.rating, 0) / tour.reviews.length
      : null;

    return NextResponse.json({
      ...tour,
      averageRating,
      reviewCount: tour.reviews.length,
    });
  } catch (error) {
    console.error('Error fetching tour:', error);
    return NextResponse.json({ error: 'Failed to fetch tour' }, { status: 500 });
  }
}