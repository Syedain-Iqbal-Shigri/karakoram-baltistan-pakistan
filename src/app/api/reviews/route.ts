import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const reviews = await db.review.findMany({
      where: {
        featured: true,
        approved: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}