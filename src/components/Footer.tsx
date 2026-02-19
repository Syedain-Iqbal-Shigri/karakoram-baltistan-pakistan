import Link from 'next/link';
import { Mountain, Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">Karakoram Baltistan</span>
                <span className="text-xs text-emerald-400 font-medium tracking-wide">PAKISTAN</span>
              </div>
            </Link>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
              Your trusted partner for extraordinary adventures in the heart of the Karakoram. 
              Experience the world&apos;s most spectacular mountains with local expertise and international standards.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-stone-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-stone-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-stone-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-stone-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#tours" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">Our Tours</Link></li>
              <li><Link href="#about" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="#contact" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">Contact</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">Travel Guide</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Popular Tours</h3>
            <ul className="space-y-3">
              <li><Link href="#tours" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">K2 Base Camp Trek</Link></li>
              <li><Link href="#tours" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">Fairy Meadows Trek</Link></li>
              <li><Link href="#tours" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">Hunza Valley Tour</Link></li>
              <li><Link href="#tours" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">Concordia Trek</Link></li>
              <li><Link href="#tours" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm">Skardu Cultural Tour</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-stone-400 text-sm">Main Bazaar, Skardu<br />Gilgit-Baltistan, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-stone-400 text-sm">+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-stone-400 text-sm">info@karakorambaltistan.pk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Karakoram Baltistan Pakistan. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-stone-500 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-stone-500 hover:text-emerald-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}