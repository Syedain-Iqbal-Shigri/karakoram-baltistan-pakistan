import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
  {
    name: 'Trekking Expeditions',
    slug: 'trekking',
    description: 'High-altitude treks through the majestic Karakoram mountain range',
    icon: 'mountain',
  },
  {
    name: 'Cultural Tours',
    slug: 'cultural',
    description: 'Discover the rich heritage and traditions of Baltistan',
    icon: 'landmark',
  },
  {
    name: 'Adventure Sports',
    slug: 'adventure',
    description: 'Thrilling adventures in the heart of the mountains',
    icon: 'zap',
  },
  {
    name: 'Photography Tours',
    slug: 'photography',
    description: 'Capture the breathtaking landscapes of northern Pakistan',
    icon: 'camera',
  },
];

const tours = [
  {
    name: 'K2 Base Camp Trek',
    slug: 'k2-base-camp-trek',
    shortDescription: 'Journey to the foot of the world\'s second-highest mountain through the legendary Baltoro Glacier.',
    description: `The K2 Base Camp Trek is one of the world's greatest mountain journeys. This epic adventure takes you through the heart of the Karakoram Range, along the famous Baltoro Glacier, to the base of K2 (8,611m) - the "Savage Mountain."

You'll walk among the greatest concentration of 8,000m peaks on Earth, including Broad Peak, Gasherbrum I & II, and the legendary Trango Towers. The trek offers unparalleled views of some of the most dramatic mountain scenery on the planet.

This is a challenging but rewarding expedition that requires good physical fitness. Our expert guides, porters, and support team ensure a safe and memorable experience.`,
    duration: '14-16 days',
    difficulty: 'Challenging',
    maxAltitude: '5,150m',
    bestSeason: 'June - September',
    price: 3200,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800',
    highlights: JSON.stringify([
      'Stand at the base of K2, the world\'s second-highest mountain',
      'Walk the legendary Baltoro Glacier',
      'Witness the stunning Trango Towers',
      'Experience Concordia - the "Throne Room of the Mountain Gods"',
      'See four 8,000m peaks in one panorama',
      'Cross the famous Gondogoro La pass (optional)',
    ]),
    included: JSON.stringify([
      'Airport transfers in Islamabad and Skardu',
      'Domestic flights Islamabad-Skardu-Islamabad',
      'All accommodation (hotels and camps)',
      'All meals during the trek',
      'Expert English-speaking guide',
      'Porters and cooking staff',
      'Tents, camping equipment, and kitchen gear',
      'First aid kit and emergency oxygen',
      'All trekking permits and fees',
    ]),
    notIncluded: JSON.stringify([
      'International flights',
      'Pakistan visa',
      'Personal trekking equipment',
      'Travel insurance (mandatory)',
      'Tips for guide and porters',
      'Personal expenses and drinks',
    ]),
    categorySlug: 'trekking',
  },
  {
    name: 'Concordia & Gondogoro La Trek',
    slug: 'concordia-gondogoro-la-trek',
    shortDescription: 'Experience the "Throne Room of the Mountain Gods" with views of four 8,000m peaks.',
    description: `Concordia is often called the "Throne Room of the Mountain Gods" - and for good reason. This spectacular junction of glaciers offers what many consider the finest mountain view on Earth.

From this single point, you can see four of the world's 8,000m peaks: K2 (8,611m), Broad Peak (8,051m), Gasherbrum I (8,068m), and Gasherbrum II (8,035m). The 360-degree panorama includes countless other majestic peaks.

The Gondogoro La pass adds an adventurous element to the return journey, offering incredible views and a different perspective of the Karakoram.`,
    duration: '15-17 days',
    difficulty: 'Challenging',
    maxAltitude: '5,585m',
    bestSeason: 'June - September',
    price: 3500,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800',
    highlights: JSON.stringify([
      'Witness the legendary Concordia viewpoint',
      'Panoramic views of four 8,000m peaks',
      'Cross the stunning Gondogoro La pass',
      'Experience the Baltoro Glacier',
      'Visit K2 Base Camp',
      'Trek through Hushe Valley',
    ]),
    included: JSON.stringify([
      'All transfers and domestic flights',
      'Hotels in Islamabad and Skardu',
      'Full camping support during trek',
      'Expert mountain guides',
      'All meals during the expedition',
      'Trekking permits and conservation fees',
    ]),
    notIncluded: JSON.stringify([
      'International flights',
      'Visa fees',
      'Personal gear',
      'Travel insurance',
      'Tips',
    ]),
    categorySlug: 'trekking',
  },
  {
    name: 'Fairy Meadows & Nanga Parbat Base Camp',
    slug: 'fairy-meadows-nanga-parbat',
    shortDescription: 'Visit the enchanting Fairy Meadows with stunning views of Nanga Parbat, the "Killer Mountain."',
    description: `Fairy Meadows is one of the most beautiful and accessible high-altitude meadows in Pakistan. Located at 3,300m, it offers spectacular views of Nanga Parbat (8,126m), the ninth-highest mountain in the world.

The name "Fairy Meadows" was given by German climbers and translates to "Fairies' Land" - and you'll understand why when you see this magical place. Green meadows, alpine forests, and the towering mass of Nanga Parbat create an unforgettable scene.

This moderate trek is perfect for those who want to experience the grandeur of the Himalayas without the extreme altitude of K2 region treks.`,
    duration: '6-7 days',
    difficulty: 'Moderate',
    maxAltitude: '3,967m',
    bestSeason: 'May - October',
    price: 1200,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800',
    highlights: JSON.stringify([
      'Stunning views of Nanga Parbat (8,126m)',
      'Experience the magical Fairy Meadows',
      'Trek to Nanga Parbat Base Camp',
      'Witness dramatic sunrises and sunsets',
      'Easy to moderate difficulty level',
      'Perfect for acclimatization',
    ]),
    included: JSON.stringify([
      'All transportation from Islamabad',
      'Jeep ride to Tato village',
      'Accommodation in wooden cottages',
      'All meals',
      'Expert guide',
      'Permits and fees',
    ]),
    notIncluded: JSON.stringify([
      'International flights',
      'Personal equipment',
      'Insurance',
      'Tips',
    ]),
    categorySlug: 'trekking',
  },
  {
    name: 'Skardu Valley Cultural Tour',
    slug: 'skardu-valley-cultural-tour',
    shortDescription: 'Discover the rich culture, ancient forts, and stunning landscapes of Skardu Valley.',
    description: `Skardu Valley is the heart of Baltistan, a region of rich cultural heritage and stunning natural beauty. This cultural tour takes you through ancient Buddhist sites, historic forts, pristine lakes, and traditional Balti villages.

Visit the 8th-century Khorpocho Fort, the stunning Shangrila Lake (also called "Heaven on Earth"), and the surreal Deosai Plains - one of the highest plateaus in the world. Experience the warm hospitality of the Balti people and taste local cuisine.

This tour is perfect for those who want to experience the beauty of northern Pakistan without strenuous trekking.`,
    duration: '7-8 days',
    difficulty: 'Easy',
    maxAltitude: '4,500m',
    bestSeason: 'May - October',
    price: 1800,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800',
    highlights: JSON.stringify([
      'Explore historic Khorpocho and Shigar Forts',
      'Visit the enchanting Shangrila Lake',
      'Experience the vast Deosai Plains',
      'Discover ancient Buddhist rock carvings',
      'Meet local Balti communities',
      'Visit Satpara Lake and Upper Kachura Lake',
    ]),
    included: JSON.stringify([
      'All domestic flights and transfers',
      'Quality hotel accommodation',
      'All meals',
      'Expert cultural guide',
      'All entrance fees',
      'Cultural experiences',
    ]),
    notIncluded: JSON.stringify([
      'International flights',
      'Personal expenses',
      'Tips',
      'Travel insurance',
    ]),
    categorySlug: 'cultural',
  },
  {
    name: 'Hunza Valley Explorer',
    slug: 'hunza-valley-explorer',
    shortDescription: 'Explore the legendary Hunza Valley, known for its longevity, stunning peaks, and ancient culture.',
    description: `Hunza Valley is perhaps Pakistan's most famous destination - and for good reason. Known for the legendary longevity of its people, dramatic mountain scenery, and ancient cultural heritage, Hunza offers an unforgettable experience.

Visit the fairytale Baltit and Altit Forts, witness the stunning Rakaposhi (7,788m), drive along the legendary Karakoram Highway, and experience the legendary hospitality of the Hunzakut people. The spring cherry blossoms and autumn colors make this valley particularly magical.`,
    duration: '8-9 days',
    difficulty: 'Easy',
    maxAltitude: '3,000m',
    bestSeason: 'March - November',
    price: 1600,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
    highlights: JSON.stringify([
      'Visit ancient Baltit and Altit Forts',
      'See the stunning Rakaposhi and Ultar Sar peaks',
      'Drive the legendary Karakoram Highway',
      'Experience Attabad Lake\'s turquoise waters',
      'Visit the Khunjerab Pass (Pakistan-China border)',
      'Meet the legendary Hunzakut people',
    ]),
    included: JSON.stringify([
      'All ground transportation',
      'Quality hotel accommodation',
      'All meals',
      'Expert guide',
      'All entrance fees',
      'Border pass for Khunjerab',
    ]),
    notIncluded: JSON.stringify([
      'International flights',
      'Personal expenses',
      'Tips',
      'Travel insurance',
    ]),
    categorySlug: 'cultural',
  },
  {
    name: 'Snow Lake & Hispar La Trek',
    slug: 'snow-lake-hispar-la-trek',
    shortDescription: 'One of the world\'s greatest glacial traverses across the legendary Snow Lake.',
    description: `Snow Lake (Lukpe Lawo) is a high-altitude glacial basin that legendary explorer Eric Shipton called "the last blank on the map." This epic journey crosses one of the largest glacial systems outside the polar regions.

The trek traverses the Biafo and Hispar Glaciers, crossing the Hispar La pass (5,151m) to reach the legendary Snow Lake. This is a true wilderness experience with very few other trekkers.`,
    duration: '18-20 days',
    difficulty: 'Extreme',
    maxAltitude: '5,151m',
    bestSeason: 'June - September',
    price: 4000,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800',
    highlights: JSON.stringify([
      'Cross one of the world\'s largest glacial systems',
      'Experience true wilderness',
      'See the legendary Snow Lake',
      'Cross the Hispar La pass',
      'Witness incredible mountain scenery',
      'Rare and challenging expedition',
    ]),
    included: JSON.stringify([
      'All ground logistics',
      'Full expedition support',
      'Expert high-altitude guides',
      'All meals and camping',
      'Satellite communication',
      'Emergency support',
    ]),
    notIncluded: JSON.stringify([
      'International flights',
      'Personal expedition gear',
      'Insurance',
      'Tips',
    ]),
    categorySlug: 'trekking',
  },
  {
    name: 'Deosai Plains & Satpara Lake Tour',
    slug: 'deosai-satpara-tour',
    shortDescription: 'Experience the "Land of Giants" - one of the highest plateaus on Earth.',
    description: `The Deosai Plains are one of the highest plateaus in the world, averaging 4,100m above sea level. Known as "Deosai" (Land of Giants) in the local Balti language, this vast wilderness is home to the Himalayan brown bear, stunning wildflowers, and endless horizons.

Combined with the beautiful Satpara Lake, this tour offers an accessible way to experience high-altitude wilderness without trekking. Perfect for photographers and nature lovers.`,
    duration: '5-6 days',
    difficulty: 'Easy',
    maxAltitude: '4,500m',
    bestSeason: 'June - October',
    price: 900,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800',
    highlights: JSON.stringify([
      'Explore one of the world\'s highest plateaus',
      'Spot Himalayan brown bears',
      'See endless fields of wildflowers',
      'Visit beautiful Satpara Lake',
      'Stargazing in pristine wilderness',
      'Accessible high-altitude experience',
    ]),
    included: JSON.stringify([
      '4x4 jeep transportation',
      'Camping equipment',
      'All meals',
      'Guide and driver',
      'Permits',
    ]),
    notIncluded: JSON.stringify([
      'Flights',
      'Personal gear',
      'Insurance',
    ]),
    categorySlug: 'cultural',
  },
];

const reviews = [
  {
    guestName: 'Michael Schmidt',
    guestCountry: 'Germany',
    rating: 5,
    title: 'An Unforgettable Journey to K2',
    content: 'The K2 Base Camp trek exceeded all my expectations. The organization was flawless, our guide was incredibly knowledgeable, and the views were absolutely spectacular. Standing at the base of K2 was a dream come true. Highly recommend Karakoram Baltistan Pakistan for anyone seeking a genuine adventure.',
    featured: true,
  },
  {
    guestName: 'Sarah Johnson',
    guestCountry: 'United States',
    rating: 5,
    title: 'Best Trekking Company in Pakistan',
    content: 'I\'ve trekked in Nepal, Peru, and Patagonia, but my experience with Karakoram Baltistan Pakistan was truly special. The attention to safety, the quality of equipment, and the warmth of the staff made this trip memorable. The Fairy Meadows trek was magical!',
    featured: true,
  },
  {
    guestName: 'Takeshi Yamamoto',
    guestCountry: 'Japan',
    rating: 5,
    title: 'Professional and Trustworthy',
    content: 'As a solo female traveler, I was initially nervous about trekking in Pakistan. The team at Karakoram Baltistan Pakistan made me feel completely safe and welcome. The Concordia trek was the highlight of my year-long world travels. The Balti porters were kind and helpful.',
    featured: true,
  },
  {
    guestName: 'Emma Williams',
    guestCountry: 'United Kingdom',
    rating: 5,
    title: 'Hunza Valley Stole My Heart',
    content: 'The Hunza Valley tour was absolutely stunning. From the ancient forts to the warm hospitality of the Hunzakut people, every moment was special. Our guide Ali was fantastic - his knowledge of local history and culture added so much depth to the experience.',
    featured: true,
  },
  {
    guestName: 'Pierre Dubois',
    guestCountry: 'France',
    rating: 5,
    title: 'A Life-Changing Adventure',
    content: 'The Gondogoro La crossing was challenging but incredibly rewarding. The views from the pass were the most spectacular I\'ve ever seen. The support team was exceptional - always encouraging and professional. This trip changed my perspective on what\'s possible.',
    featured: true,
  },
  {
    guestName: 'Anna Lindqvist',
    guestCountry: 'Sweden',
    rating: 4,
    title: 'Great Experience, Well Organized',
    content: 'The Skardu cultural tour was well-planned and executed. The Deosai Plains were breathtaking, and the lakes were stunning. Only minor issue was a delayed flight, but the team handled it professionally. Would definitely travel with them again.',
    featured: false,
  },
];

async function main() {
  console.log('Starting seed...');

  for (const category of categories) {
    await prisma.tourCategory.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    });
  }
  console.log('Categories created');

  for (const tour of tours) {
    const { categorySlug, ...tourData } = tour;
    const category = await prisma.tourCategory.findUnique({
      where: { slug: categorySlug },
    });
    
    await prisma.tour.upsert({
      where: { slug: tour.slug },
      update: {
        ...tourData,
        categoryId: category?.id,
      },
      create: {
        ...tourData,
        categoryId: category?.id,
      },
    });
  }
  console.log('Tours created');

  for (const review of reviews) {
    await prisma.review.create({
      data: review,
    });
  }
  console.log('Reviews created');

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });