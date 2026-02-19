import { NextResponse } from 'next/server';

const tours = [
  { id: '1', name: 'K2 Base Camp Trek', slug: 'k2-base-camp-trek', shortDescription: 'Journey to the foot of the world second-highest mountain.', duration: '14 days', difficulty: 'Challenging', price: 3500, currency: 'USD', heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800', featured: true, category: { name: 'Trekking', slug: 'trekking' }, averageRating: 4.9, reviewCount: 45 },
  { id: '2', name: 'Concordia Trek', slug: 'concordia-trek', shortDescription: 'Experience the throne room of the mountain gods.', duration: '12 days', difficulty: 'Challenging', price: 2800, currency: 'USD', heroImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800', featured: true, category: { name: 'Trekking', slug: 'trekking' }, averageRating: 4.8, reviewCount: 38 },
  { id: '3', name: 'Fairy Meadows', slug: 'fairy-meadows', shortDescription: 'Stunning views of Nanga Parbat from Fairy Meadows.', duration: '5 days', difficulty: 'Moderate', price: 1200, currency: 'USD', heroImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800', featured: true, category: { name: 'Trekking', slug: 'trekking' }, averageRating: 4.9, reviewCount: 62 },
  { id: '4', name: 'Hunza Valley', slug: 'hunza-valley', shortDescription: 'Discover the legendary beauty of Hunza.', duration: '7 days', difficulty: 'Easy', price: 1500, currency: 'USD', heroImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800', featured: true, category: { name: 'Cultural', slug: 'cultural' }, averageRating: 4.7, reviewCount: 55 },
  { id: '5', name: 'Skardu Valley', slug: 'skardu-valley', shortDescription: 'Explore the breathtaking lakes and valleys.', duration: '6 days', difficulty: 'Easy', price: 1100, currency: 'USD', heroImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800', featured: false, category: { name: 'Cultural', slug: 'cultural' }, averageRating: 4.6, reviewCount: 42 },
  { id: '6', name: 'Gondogoro La', slug: 'gondogoro-la', shortDescription: 'Cross one of the most spectacular high passes.', duration: '16 days', difficulty: 'Strenuous', price: 4200, currency: 'USD', heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800', featured: true, category: { name: 'Trekking', slug: 'trekking' }, averageRating: 5.0, reviewCount: 28 }
];

export async function GET() {
  return NextResponse.json(tours);
}
