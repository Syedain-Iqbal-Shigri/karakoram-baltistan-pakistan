'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { mailOutline, paperPlaneOutline, checkmarkCircleOutline } from 'ionicons/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-600" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')] bg-cover bg-center opacity-20" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <IonIcon icon={mailOutline} className="text-3xl text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Travel Inspiration
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Subscribe to our newsletter and receive exclusive offers, travel tips, and destination guides straight to your inbox.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-white"
            >
              <IonIcon icon={checkmarkCircleOutline} className="text-2xl" />
              <span className="text-lg font-medium">Thanks for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <IonIcon icon={mailOutline} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-white/95 border-0 focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white gap-2 h-12 px-6"
              >
                Subscribe
                <IonIcon icon={paperPlaneOutline} />
              </Button>
            </form>
          )}

          <p className="text-white/60 text-sm mt-4">
            Join 10,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
