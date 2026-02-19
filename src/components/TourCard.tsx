'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Clock, Mountain, ArrowRight } from 'lucide-react';

interface Tour {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  duration: string;
  difficulty: string;
  price: number;
  currency: string;
  heroImage: string;
  featured: boolean;
  category?: { name: string; slug: string; } | null;
  averageRating: number | null;
  reviewCount: number;
}

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const [imageError, setImageError] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'challenging': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'extreme': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative h-64 overflow-hidden">
        {!imageError ? (
          <Image
            src={tour.heroImage}
            alt={tour.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-stone-800 flex items-center justify-center">
            <Mountain className="h-16 w-16 text-white/50" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {tour.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-amber-500 text-white border-0 font-medium">⭐ Featured</Badge>
          </div>
        )}

        {tour.category && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-stone-700 font-medium">
              {tour.category.name}
            </Badge>
          </div>
        )}

        <div className="absolute bottom-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
            <span className="text-2xl font-bold text-emerald-700">${tour.price.toLocaleString()}</span>
            <span className="text-stone-500 text-sm ml-1">USD</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
            {tour.name}
          </h3>
          {tour.averageRating && (
            <div className="flex items-center gap-1 shrink-0 bg-amber-50 px-2 py-1 rounded">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-amber-700">{tour.averageRating.toFixed(1)}</span>
            </div>
          )}
        </div>

        <p className="text-stone-600 text-sm mb-4 line-clamp-2">{tour.shortDescription}</p>

        <div className="flex items-center gap-4 mb-5 text-sm text-stone-500">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
          <Badge variant="outline" className={`${getDifficultyColor(tour.difficulty)} text-xs font-medium`}>
            {tour.difficulty}
          </Badge>
        </div>

        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white group/btn">
          View Details
          <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}