'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { useStore } from '@/lib/store';

interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
  isScrolled: boolean;
  scrollToSection: (href: string) => void;
}

export default function MobileMenu({ navLinks, scrollToSection }: MobileMenuProps) {
  const { closeMobileMenu, auth } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 shadow-2xl"
      >
        <div className="flex flex-col h-full pt-24 pb-6 px-6">
          {/* Navigation Links */}
          <nav className="flex-1 space-y-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
            {auth.isAuthenticated ? (
              <div className="flex items-center gap-3 px-4 py-3 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
                <img
                  src={auth.user?.avatar}
                  alt={auth.user?.name}
                  className="w-10 h-10 rounded-full border-2 border-teal-500"
                />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{auth.user?.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{auth.user?.email}</p>
                </div>
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="w-full justify-center text-slate-700 dark:text-slate-300"
                >
                  Sign In
                </Button>
                <Button className="w-full justify-center bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg shadow-teal-500/30">
                  <User className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
