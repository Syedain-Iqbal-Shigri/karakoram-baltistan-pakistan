'use client';

import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { locationOutline, arrowForwardOutline } from 'ionicons/icons';
import { destinations } from '@/lib/tours';
import { Button } from '@/components/ui/button';

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              Popular Destinations
            </h2>
          </div>
          <Button
            variant="outline"
            className="gap-2 border-teal-500 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/30"
          >
            View All
            <IonIcon icon={arrowForwardOutline} />
          </Button>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1 text-white/80 mb-1">
                  <IonIcon icon={locationOutline} className="text-sm" />
                  <span className="text-sm">{destination.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">
                    {destination.tours} Tours
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-teal-500 transition-colors"
                  >
                    <IonIcon icon={arrowForwardOutline} className="text-white text-sm" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
