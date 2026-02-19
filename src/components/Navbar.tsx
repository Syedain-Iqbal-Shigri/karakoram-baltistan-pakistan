'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline, personOutline, cartOutline, searchOutline, heartOutline } from 'ionicons/icons';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Tours', href: '#tours' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMenuOpen, setMenuOpen, cart } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const totalTravelers = cart.reduce((sum, item) => sum + item.travelers, 0);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <IonIcon icon="triangle-outline" className="text-white text-xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg md:text-xl font-bold ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
                  Trekkers
                </span>
                <span className={`text-xs -mt-1 ${isScrolled ? 'text-teal-600 dark:text-teal-400' : 'text-teal-300'}`}>
                  KINGDOM
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-slate-600 hover:text-teal-600 hover:bg-teal-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <IonIcon icon={searchOutline} className="text-xl" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg transition-colors relative ${
                  isScrolled
                    ? 'text-slate-600 hover:text-teal-600 hover:bg-teal-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <IonIcon icon={heartOutline} className="text-xl" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg transition-colors relative ${
                  isScrolled
                    ? 'text-slate-600 hover:text-teal-600 hover:bg-teal-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <IonIcon icon={cartOutline} className="text-xl" />
                {totalTravelers > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-teal-500 text-white border-0">
                    {totalTravelers}
                  </Badge>
                )}
              </motion.button>

              <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />

              <Button
                variant="ghost"
                className={`gap-2 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                    : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                <IonIcon icon={personOutline} className="text-lg" />
                Sign In
              </Button>

              <Button className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg shadow-teal-500/25">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <IonIcon icon={isMenuOpen ? closeOutline : menuOutline} className="text-2xl" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl"
            >
              <div className="p-6 pt-20">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/30 font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 gap-2">
                      <IonIcon icon={personOutline} />
                      Sign In
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-600 text-white">
                      Book Now
                    </Button>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-6">
                  <button className="p-2 text-slate-500 hover:text-teal-600">
                    <IonIcon icon={searchOutline} className="text-xl" />
                  </button>
                  <button className="p-2 text-slate-500 hover:text-teal-600">
                    <IonIcon icon={heartOutline} className="text-xl" />
                  </button>
                  <button className="p-2 text-slate-500 hover:text-teal-600 relative">
                    <IonIcon icon={cartOutline} className="text-xl" />
                    {totalTravelers > 0 && (
                      <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-teal-500 text-white border-0">
                        {totalTravelers}
                      </Badge>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
