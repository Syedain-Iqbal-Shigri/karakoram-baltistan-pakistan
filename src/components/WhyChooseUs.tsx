'use client';

import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { shieldCheckmarkOutline, diamondOutline, guideOutline, walletOutline } from 'ionicons/icons';
import { features } from '@/lib/tours';

const iconMap: Record<string, string> = {
  'shield-checkmark-outline': shieldCheckmarkOutline,
  'diamond-outline': diamondOutline,
  'guide-outline': guideOutline,
  'wallet-outline': walletOutline,
};

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80"
                alt="Travel experience"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                    alt="Customer"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                    alt="Customer"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                    alt="Customer"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 bg-teal-500 flex items-center justify-center text-white text-xs font-bold">
                    +50k
                  </div>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                <span className="font-semibold text-teal-600">50,000+</span> happy travelers trust us for their adventures
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              We Make Travel <br />
              <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
                Unforgettable
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              With over 15 years of experience in crafting extraordinary adventures, we know exactly how to turn your travel dreams into reality. Our commitment to quality, safety, and authentic experiences sets us apart.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <IonIcon
                      icon={iconMap[feature.icon] || shieldCheckmarkOutline}
                      className="text-white text-xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
