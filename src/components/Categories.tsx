'use client';

import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { gridOutline, trailSignOutline, earthOutline, sunnyOutline, pawOutline, triangleOutline } from 'ionicons/icons';
import { categories } from '@/lib/tours';
import { useStore } from '@/lib/store';

const iconMap: Record<string, string> = {
  'grid-outline': gridOutline,
  'trail-sign-outline': trailSignOutline,
  'earth-outline': earthOutline,
  'sunny-outline': sunnyOutline,
  'paw-outline': pawOutline,
  'triangle-outline': triangleOutline,
};

export default function Categories() {
  const { selectedCategory, setSelectedCategory } = useStore();

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
            Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Find Your Adventure
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative p-6 rounded-2xl text-center transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                selectedCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-teal-100 dark:bg-teal-900/30'
              }`}>
                <IonIcon
                  icon={iconMap[category.icon] || gridOutline}
                  className={`text-2xl ${
                    selectedCategory === category.id
                      ? 'text-white'
                      : 'text-teal-600 dark:text-teal-400'
                  }`}
                />
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <span className={`text-sm ${
                selectedCategory === category.id
                  ? 'text-white/80'
                  : 'text-slate-500 dark:text-slate-400'
              }`}>
                {category.count} Tours
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
