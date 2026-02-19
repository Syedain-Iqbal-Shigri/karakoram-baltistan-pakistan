'use client';

import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import { tours } from '@/lib/tours';
import { useStore, Tour } from '@/lib/store';
import TourCard from './TourCard';
import { Button } from '@/components/ui/button';

export default function FeaturedTours() {
  const { setSelectedTour, setBookingModalOpen } = useStore();

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    setBookingModalOpen(true);
  };

  return (
    <section id="tours" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
            Our Tours
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
            Featured Adventures
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore our handpicked selection of extraordinary journeys to the world's most breathtaking destinations
          </p>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onBookNow={handleBookNow}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-teal-500 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/30"
          >
            View All Tours
            <IonIcon icon={arrowForwardOutline} className="text-lg" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
