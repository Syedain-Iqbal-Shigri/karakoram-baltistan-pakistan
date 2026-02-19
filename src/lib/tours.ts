import { Tour } from './store';

export const tours: Tour[] = [
  {
    id: '1',
    title: 'Everest Base Camp Trek',
    location: 'Khumbu Region',
    country: 'Nepal',
    duration: '14 Days',
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 328,
    image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80'
    ],
    category: 'Adventure',
    description: 'Embark on the journey of a lifetime to the base of the world\'s highest peak. This iconic trek takes you through Sherpa villages, ancient monasteries, and breathtaking Himalayan landscapes.',
    highlights: ['Visit Namche Bazaar', 'See Mount Everest up close', 'Experience Sherpa culture', 'Cross suspension bridges', 'Visit Tengboche Monastery'],
    included: ['Professional guide', 'Porter services', 'All meals during trek', 'Teahouse accommodation', 'Sagarmatha National Park permit'],
    maxGroupSize: 12,
    difficulty: 'Challenging',
    bestTime: 'March-May, Sept-Nov'
  },
  {
    id: '2',
    title: 'Machu Picchu Adventure',
    location: 'Cusco Region',
    country: 'Peru',
    duration: '7 Days',
    price: 1899,
    originalPrice: 2299,
    rating: 4.8,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80'
    ],
    category: 'Cultural',
    description: 'Discover the lost city of the Incas on this unforgettable journey through Peru. Walk the ancient paths, explore sacred valleys, and witness the sunrise over Machu Picchu.',
    highlights: ['Inca Trail trekking', 'Machu Picchu sunrise', 'Explore Cusco', 'Sacred Valley tour', 'Local Peruvian cuisine'],
    included: ['Expert local guide', 'Train to Aguas Calientes', 'Machu Picchu entrance', 'Hotel accommodation', 'All breakfasts'],
    maxGroupSize: 16,
    difficulty: 'Moderate',
    bestTime: 'April-October'
  },
  {
    id: '3',
    title: 'Safari in Serengeti',
    location: 'Serengeti National Park',
    country: 'Tanzania',
    duration: '6 Days',
    price: 3299,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80'
    ],
    category: 'Wildlife',
    description: 'Witness the greatest wildlife show on Earth. Track the Big Five, watch the Great Migration, and experience the raw beauty of the African savanna.',
    highlights: ['Big Five safari', 'Great Migration viewing', 'Ngorongoro Crater', 'Maasai village visit', 'Sunset game drives'],
    included: ['Safari vehicle', 'Professional guide', 'Park fees', 'Luxury tented camps', 'All meals and drinks'],
    maxGroupSize: 8,
    difficulty: 'Easy',
    bestTime: 'June-October'
  },
  {
    id: '4',
    title: 'Northern Lights in Iceland',
    location: 'Reykjavik & Beyond',
    country: 'Iceland',
    duration: '5 Days',
    price: 1599,
    originalPrice: 1899,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80'
    ],
    category: 'Adventure',
    description: 'Chase the magical Aurora Borealis across Iceland\'s dramatic landscapes. From geysers to glaciers, waterfalls to volcanic beaches, experience the land of fire and ice.',
    highlights: ['Northern Lights hunting', 'Golden Circle tour', 'Blue Lagoon spa', 'Glacier walking', 'Black sand beaches'],
    included: ['Aurora guide', '4x4 vehicle', 'Hot spring visits', 'Boutique hotels', 'Daily breakfast'],
    maxGroupSize: 10,
    difficulty: 'Easy',
    bestTime: 'September-March'
  },
  {
    id: '5',
    title: 'Maldives Paradise Escape',
    location: 'Malé Atoll',
    country: 'Maldives',
    duration: '7 Days',
    price: 4599,
    rating: 5.0,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80'
    ],
    category: 'Beach',
    description: 'Escape to crystal-clear waters and pristine white sand beaches. Stay in luxurious overwater villas, snorkel with manta rays, and unwind in paradise.',
    highlights: ['Overwater villa stay', 'Snorkeling with mantas', 'Sunset dolphin cruise', 'Underwater dining', 'Spa treatments'],
    included: ['Water villa accommodation', 'All meals', 'Water sports equipment', 'Airport transfers', 'Sunset cruise'],
    maxGroupSize: 4,
    difficulty: 'Easy',
    bestTime: 'November-April'
  },
  {
    id: '6',
    title: 'Swiss Alps Adventure',
    location: 'Zermatt & Interlaken',
    country: 'Switzerland',
    duration: '8 Days',
    price: 2899,
    rating: 4.8,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    ],
    category: 'Mountain',
    description: 'Experience the majestic Swiss Alps in all their glory. From the iconic Matterhorn to pristine alpine lakes, this journey offers breathtaking scenery and world-class hiking.',
    highlights: ['Matterhorn views', 'Jungfraujoch excursion', 'Alpine hiking trails', 'Swiss chocolate tasting', 'Scenic train rides'],
    included: ['Swiss Travel Pass', 'Mountain guide', 'Alpine hut stays', 'Breakfast daily', 'Cable car tickets'],
    maxGroupSize: 14,
    difficulty: 'Moderate',
    bestTime: 'June-September'
  },
  {
    id: '7',
    title: 'Japanese Culture Journey',
    location: 'Tokyo to Kyoto',
    country: 'Japan',
    duration: '10 Days',
    price: 3199,
    originalPrice: 3699,
    rating: 4.9,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80'
    ],
    category: 'Cultural',
    description: 'Immerse yourself in the fascinating blend of ancient traditions and modern innovation. From Tokyo\'s neon streets to Kyoto\'s serene temples, discover the essence of Japan.',
    highlights: ['Mount Fuji views', 'Traditional tea ceremony', 'Geisha district tour', 'Bamboo forest walk', 'Shinkansen experience'],
    included: ['JR Pass', 'Expert local guide', 'Ryokan stay', 'Temple visits', 'Traditional kaiseki dinner'],
    maxGroupSize: 12,
    difficulty: 'Easy',
    bestTime: 'March-May, October-November'
  },
  {
    id: '8',
    title: 'Patagonia Expedition',
    location: 'Torres del Paine',
    country: 'Chile',
    duration: '9 Days',
    price: 2799,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      'https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=800&q=80',
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80'
    ],
    category: 'Adventure',
    description: 'Journey to the end of the world in Patagonia. Trek through dramatic landscapes of glaciers, mountains, and pristine wilderness in one of Earth\'s last frontiers.',
    highlights: ['Torres del Paine W Trek', 'Grey Glacier', 'Wildlife spotting', 'Gaucho experience', 'Stargazing'],
    included: ['Park entrance fees', 'Mountain guide', 'Refugio accommodation', 'All trekking meals', 'Transportation'],
    maxGroupSize: 10,
    difficulty: 'Challenging',
    bestTime: 'November-March'
  }
];

export const categories = [
  { id: 'all', name: 'All Tours', icon: 'grid-outline', count: tours.length },
  { id: 'Adventure', name: 'Adventure', icon: 'trail-sign-outline', count: tours.filter(t => t.category === 'Adventure').length },
  { id: 'Cultural', name: 'Cultural', icon: 'earth-outline', count: tours.filter(t => t.category === 'Cultural').length },
  { id: 'Beach', name: 'Beach', icon: 'sunny-outline', count: tours.filter(t => t.category === 'Beach').length },
  { id: 'Wildlife', name: 'Wildlife', icon: 'paw-outline', count: tours.filter(t => t.category === 'Wildlife').length },
  { id: 'Mountain', name: 'Mountain', icon: 'triangle-outline', count: tours.filter(t => t.category === 'Mountain').length },
];

export const destinations = [
  { id: '1', name: 'Nepal', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80', tours: 15 },
  { id: '2', name: 'Peru', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80', tours: 12 },
  { id: '3', name: 'Tanzania', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', tours: 8 },
  { id: '4', name: 'Iceland', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80', tours: 10 },
  { id: '5', name: 'Maldives', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80', tours: 6 },
  { id: '6', name: 'Switzerland', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80', tours: 14 },
  { id: '7', name: 'Japan', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80', tours: 18 },
  { id: '8', name: 'Chile', image: 'https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&q=80', tours: 9 },
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    text: 'The Everest Base Camp trek was absolutely life-changing! The guides were incredibly knowledgeable and the entire experience exceeded all my expectations. Trekkers Kingdom made everything seamless.',
    tour: 'Everest Base Camp Trek'
  },
  {
    id: '2',
    name: 'James Chen',
    location: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
    text: 'From booking to the final day, everything was perfectly organized. The Machu Picchu tour was a dream come true. Our guide brought the history to life. Highly recommend!',
    tour: 'Machu Picchu Adventure'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
    text: 'The Serengeti safari was the trip of a lifetime. Seeing the Great Migration in person was breathtaking. The luxury camps were amazing and the staff went above and beyond.',
    tour: 'Safari in Serengeti'
  },
  {
    id: '4',
    name: 'Michael Rodriguez',
    location: 'Barcelona, Spain',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
    text: 'I\'ve traveled with many companies, but Trekkers Kingdom stands out for their attention to detail and genuine care for travelers. The Japan tour was perfectly curated.',
    tour: 'Japanese Culture Journey'
  }
];

export const stats = [
  { label: 'Happy Travelers', value: '50,000+', icon: 'people-outline' },
  { label: 'Tour Packages', value: '200+', icon: 'map-outline' },
  { label: 'Destinations', value: '60+', icon: 'location-outline' },
  { label: 'Years Experience', value: '15+', icon: 'time-outline' },
];

export const features = [
  {
    icon: 'shield-checkmark-outline',
    title: 'Safe Travel',
    description: 'Your safety is our top priority with 24/7 support, travel insurance options, and experienced guides on every trip.'
  },
  {
    icon: 'diamond-outline',
    title: 'Premium Quality',
    description: 'We partner with the best local operators and hotels to ensure you have a premium experience at competitive prices.'
  },
  {
    icon: 'guide-outline',
    title: 'Expert Guides',
    description: 'Our certified guides are passionate locals who bring destinations to life with their knowledge and stories.'
  },
  {
    icon: 'wallet-outline',
    title: 'Best Price Guarantee',
    description: 'Find a lower price elsewhere? We\'ll match it. Plus, enjoy flexible payment options and no hidden fees.'
  }
];
