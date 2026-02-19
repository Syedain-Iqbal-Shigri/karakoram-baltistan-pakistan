'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { starOutline, chevronBackOutline, chevronForwardOutline, quoteOutline } from 'ionicons/icons';
import { testimonials } from '@/lib/tours';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real experiences from real adventurers who explored the world with us
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
            >
              {/* Quote Icon */}
              <IonIcon icon={quoteOutline} className="text-4xl text-teal-400/50 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <IonIcon key={i} icon={starOutline} className="text-amber-400 text-lg" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-teal-400"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-teal-400 text-sm">
                    {testimonials[currentIndex].tour}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/30"
            >
              <IonIcon icon={chevronBackOutline} className="text-xl" />
            </Button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-6 bg-teal-400'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/30"
            >
              <IonIcon icon={chevronForwardOutline} className="text-xl" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
