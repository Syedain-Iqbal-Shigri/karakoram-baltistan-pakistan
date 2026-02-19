'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain, Phone, Mail } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tours', href: '#tours' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="bg-emerald-800 text-white py-1.5 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              +92 300 1234567
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              info@karakorambaltistan.pk
            </span>
          </div>
          <span>🏔️ Your Gateway to the Karakoram</span>
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-stone-900 leading-tight">
                Karakoram Baltistan
              </span>
              <span className="text-xs text-emerald-700 font-medium tracking-wide">
                PAKISTAN
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-stone-600 hover:text-emerald-700 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#tours">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all">
                Book a Tour
              </Button>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <Mountain className="h-6 w-6 text-emerald-600" />
                    <span className="font-bold text-lg">Karakoram Baltistan</span>
                  </div>
                </div>
                <nav className="flex-1 p-6">
                  <div className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-stone-700 hover:text-emerald-600 py-2 border-b border-stone-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
                <div className="p-6 border-t border-stone-200 bg-stone-50">
                  <div className="space-y-3 text-sm text-stone-600">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-emerald-600" />
                      +92 300 1234567
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-emerald-600" />
                      info@karakorambaltistan.pk
                    </p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}