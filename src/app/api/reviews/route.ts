import { NextResponse } from 'next/server';

const reviews = [
  { id: '1', guestName: 'John Smith', guestCountry: 'USA', rating: 5, title: 'Unforgettable K2 Experience', content: 'The K2 Base Camp trek was incredible. Our guide was knowledgeable and the scenery was breathtaking.' },
  { id: '2', guestName: 'Emma Wilson', guestCountry: 'UK', rating: 5, title: 'Best Trekking Company', content: 'Professional from start to finish. The Concordia trek exceeded all expectations.' },
  { id: '3', guestName: 'Marco Rossi', guestCountry: 'Italy', rating: 4, title: 'Amazing Fairy Meadows', content: 'The views of Nanga Parbat from Fairy Meadows are stunning.' },
  { id: '4', guestName: 'Yuki Tanaka', guestCountry: 'Japan', rating: 5, title: 'Hunza Valley Magic', content: 'Hunza is truly a paradise. The cultural experiences were unforgettable.' },
  { id: '5', guestName: 'Anna Mueller', guestCountry: 'Germany', rating: 5, title: 'Professional and Safe', content: 'Felt completely safe throughout the entire trek.' },
  { id: '6', guestName: 'Pierre Dubois', guestCountry: 'France', rating: 4, title: 'Gondogoro La Adventure', content: 'Challenging but rewarding. The views from the pass are among the best.' }
];

export async function GET() {
  return NextResponse.json(reviews);
}
