'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { closeOutline, locationOutline, timeOutline, peopleOutline, starOutline, checkmarkOutline, calendarOutline, removeOutline, addOutline } from 'ionicons/icons';
import { useStore, BookingItem } from '@/lib/store';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { toast } from 'sonner';

export default function TourModal() {
  const { selectedTour, isBookingModalOpen, setBookingModalOpen, addToCart } = useStore();
  const [travelers, setTravelers] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeImage, setActiveImage] = useState(0);

  if (!selectedTour) return null;

  const totalPrice = selectedTour.price * travelers;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Moderate': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'Challenging': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Expert': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const handleBooking = () => {
    const booking: BookingItem = {
      tour: selectedTour,
      travelers,
      date: date ? format(date, 'PPP') : '',
      totalPrice,
    };
    addToCart(booking);
    toast.success('Booking added to cart!', {
      description: `${selectedTour.title} for ${travelers} traveler${travelers > 1 ? 's' : ''}`,
    });
    setBookingModalOpen(false);
    setTravelers(1);
  };

  return (
    <Dialog open={isBookingModalOpen} onOpenChange={setBookingModalOpen}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] overflow-y-auto p-0 gap-0">
        <div className="grid lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative bg-slate-100 dark:bg-slate-800">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={selectedTour.images[activeImage]}
                  alt={selectedTour.title}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              {selectedTour.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === index
                      ? 'border-white scale-105'
                      : 'border-white/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <IonIcon icon={closeOutline} className="text-xl" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                  {selectedTour.category}
                </Badge>
                <Badge className={getDifficultyColor(selectedTour.difficulty)}>
                  {selectedTour.difficulty}
                </Badge>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {selectedTour.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <IonIcon icon={locationOutline} />
                  <span>{selectedTour.location}, {selectedTour.country}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IonIcon icon={starOutline} className="text-amber-500" />
                  <span>{selectedTour.rating} ({selectedTour.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <IonIcon icon={timeOutline} className="text-xl text-teal-500 mb-1" />
                <div className="text-sm font-medium text-slate-900 dark:text-white">{selectedTour.duration}</div>
                <div className="text-xs text-slate-500">Duration</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <IonIcon icon={peopleOutline} className="text-xl text-teal-500 mb-1" />
                <div className="text-sm font-medium text-slate-900 dark:text-white">{selectedTour.maxGroupSize}</div>
                <div className="text-xs text-slate-500">Max Group</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <IonIcon icon={calendarOutline} className="text-xl text-teal-500 mb-1" />
                <div className="text-sm font-medium text-slate-900 dark:text-white text-xs">{selectedTour.bestTime}</div>
                <div className="text-xs text-slate-500">Best Time</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {selectedTour.description}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Highlights</h3>
              <div className="grid grid-cols-2 gap-2">
                {selectedTour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <IonIcon icon={checkmarkOutline} className="text-teal-500 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Date Picker */}
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                    Select Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <IonIcon icon={calendarOutline} className="mr-2" />
                        {date ? format(date, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Travelers */}
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                    Travelers
                  </label>
                  <div className="flex items-center justify-between h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      disabled={travelers <= 1}
                    >
                      <IonIcon icon={removeOutline} />
                    </Button>
                    <span className="font-medium">{travelers}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setTravelers(Math.min(selectedTour.maxGroupSize, travelers + 1))}
                      disabled={travelers >= selectedTour.maxGroupSize}
                    >
                      <IonIcon icon={addOutline} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <div>
                  <div className="text-sm text-slate-500">Total Price</div>
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                    ${totalPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400">
                    ${selectedTour.price.toLocaleString()} × {travelers} traveler{travelers > 1 ? 's' : ''}
                  </div>
                </div>
                <Button
                  onClick={handleBooking}
                  className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8"
                >
                  Book Now
                </Button>
              </div>
            </div>

            {/* Included */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What&apos;s Included</h3>
              <div className="flex flex-wrap gap-2">
                {selectedTour.included.map((item, index) => (
                  <Badge key={index} variant="secondary" className="bg-slate-100 dark:bg-slate-700">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
