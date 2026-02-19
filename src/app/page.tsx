'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TourCard } from '@/components/TourCard';
import { BookingModal } from '@/components/BookingModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mountain, Star, Users, Shield, Award, ArrowRight, MapPin, Phone, Mail, Loader2, CheckCircle, ChevronDown, Clock } from 'lucide-react';

interface Tour {
  id: string; name: string; slug: string; shortDescription: string; duration: string;
  difficulty: string; price: number; currency: string; heroImage: string; featured: boolean;
  category?: { name: string; slug: string; } | null; averageRating: number | null; reviewCount: number;
}

interface Review {
  id: string; guestName: string; guestCountry: string; rating: number; title: string; content: string;
}

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  useEffect(() => {
    async function fetchData() {
      try {
        const [toursRes, reviewsRes] = await Promise.all([fetch('/api/tours'), fetch('/api/reviews')]);
        const toursData = await toursRes.json();
        const reviewsData = await reviewsRes.json();
        setTours(toursData);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleBooking = (tour: Tour) => {
    setSelectedTour(tour);
    setIsBookingOpen(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      if (response.ok) {
        setContactSuccess(true);
        setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Contact error:', error);
    } finally {
      setContactSubmitting(false);
    }
  };

  const featuredTours = tours.filter((t) => t.featured).slice(0, 6);
  const stats = [
    { icon: Mountain, value: '500+', label: 'Successful Expeditions' },
    { icon: Users, value: '2,000+', label: 'Happy Travelers' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-emerald-900 to-stone-900" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <Mountain className="h-4 w-4" />
              Your Gateway to the World&apos;s Greatest Mountains
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the
            <span className="block bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">Majestic Karakoram</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            From K2 Base Camp to Fairy Meadows, we guide you through Pakistan&apos;s most breathtaking landscapes. Local expertise, world-class service, unforgettable adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#tours">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg shadow-xl shadow-emerald-900/30 group">
                Explore Tours
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm">
                Learn More
              </Button>
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-emerald-800 py-8 border-b border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-emerald-300 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-emerald-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Our Tours</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Unforgettable Adventures Await</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From challenging high-altitude treks to cultural journeys through ancient valleys, we offer experiences that will stay with you forever.
            </p>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="h-64 bg-stone-200 animate-pulse" />
                  <CardContent className="p-6">
                    <div className="h-6 bg-stone-200 rounded mb-4 animate-pulse" />
                    <div className="h-4 bg-stone-200 rounded mb-2 animate-pulse" />
                    <div className="h-4 bg-stone-200 rounded w-2/3 animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map((tour) => (
                <div key={tour.id} onClick={() => handleBooking(tour)} className="cursor-pointer">
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Your Trusted Partner in Adventure</h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                For over 15 years, Karakoram Baltistan Pakistan has been guiding adventurers through the world&apos;s most spectacular mountain landscapes. Our team of local experts, world-class equipment, and unwavering commitment to safety have earned us the trust of travelers from over 50 countries.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 bg-emerald-100 p-3 rounded-xl"><Shield className="h-6 w-6 text-emerald-600" /></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Safety First</h3>
                    <p className="text-stone-600 text-sm">Certified guides, satellite communication, comprehensive first aid, and emergency evacuation plans for every expedition.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 bg-emerald-100 p-3 rounded-xl"><Users className="h-6 w-6 text-emerald-600" /></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Local Expertise</h3>
                    <p className="text-stone-600 text-sm">Our guides are born and raised in the mountains of Baltistan. They know every trail, peak, and hidden gem.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 bg-emerald-100 p-3 rounded-xl"><Award className="h-6 w-6 text-emerald-600" /></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Responsible Tourism</h3>
                    <p className="text-stone-600 text-sm">We support local communities, practice Leave No Trace principles, and contribute to conservation efforts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800" alt="Mountain trekking" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-600 text-white p-2 rounded-lg"><Star className="h-5 w-5 fill-current" /></div>
                  <div>
                    <div className="text-2xl font-bold text-stone-900">4.9/5</div>
                    <div className="text-sm text-stone-500">From 500+ reviews</div>
                  </div>
                </div>
                <p className="text-stone-600 text-sm">&quot;Best trekking company in Pakistan. Professional, safe, and truly authentic experiences.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-emerald-500/30">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review) => (
              <Card key={review.id} className="bg-white/10 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-600'}`} />
                    ))}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{review.title}</h4>
                  <p className="text-stone-300 text-sm mb-4 line-clamp-4">{review.content}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-white">{review.guestName}</span>
                    <span className="text-stone-400">{review.guestCountry}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Let&apos;s Plan Your Adventure</h2>
              <p className="text-stone-600 mb-8">Have questions about our tours? Want to customize an itinerary? Our team is here to help you plan the perfect adventure.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl shrink-0"><MapPin className="h-6 w-6 text-emerald-600" /></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Our Office</h3>
                    <p className="text-stone-600">Main Bazaar, Skardu<br />Gilgit-Baltistan, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl shrink-0"><Phone className="h-6 w-6 text-emerald-600" /></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                    <p className="text-stone-600">+92 300 1234567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl shrink-0"><Mail className="h-6 w-6 text-emerald-600" /></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-600">info@karakorambaltistan.pk</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {contactSuccess ? (
                <Card className="p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">Message Sent!</h3>
                  <p className="text-stone-600 mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <Button onClick={() => setContactSuccess(false)} variant="outline">Send Another Message</Button>
                </Card>
              ) : (
                <Card className="p-8">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} placeholder="+1 234 567 8900" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" value={contactForm.subject} onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} placeholder="Tour inquiry" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" required rows={5} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} placeholder="Tell us about your travel plans..." />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={contactSubmitting}>
                      {contactSubmitting ? (<><Loader2 className="h-4 w-4 mr-2 animate-spin" />Sending...</>) : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-12 bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-stone-900 mb-2">Payment Methods</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We accept bank transfers and payment on arrival. A 30% deposit is required to confirm your booking, with the balance due 30 days before departure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} tour={selectedTour} />
    </div>
  );
}