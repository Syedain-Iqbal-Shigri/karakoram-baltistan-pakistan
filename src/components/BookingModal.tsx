'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: {
    id: string;
    name: string;
    price: number;
    duration: string;
    departures?: Array<{ id: string; startDate: Date; endDate: Date; availableSpots: number; price: number | null; }>;
  } | null;
}

export function BookingModal({ isOpen, onClose, tour }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', country: '',
    numberOfGuests: '1', departureId: '', specialRequests: '', paymentMethod: 'bank_transfer',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tour) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tourId: tour.id, ...formData, numberOfGuests: parseInt(formData.numberOfGuests) }),
      });
      const data = await response.json();
      if (response.ok) {
        setBookingRef(data.bookingRef);
        setIsSuccess(true);
      } else {
        alert('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', country: '', numberOfGuests: '1', departureId: '', specialRequests: '', paymentMethod: 'bank_transfer' });
    onClose();
  };

  if (!tour) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <DialogHeader>
              <DialogTitle className="text-2xl text-emerald-700">Booking Request Submitted!</DialogTitle>
              <DialogDescription className="text-lg mt-2">
                Your booking reference: <span className="font-bold text-stone-900">{bookingRef}</span>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg text-left">
              <h4 className="font-semibold text-emerald-800 mb-2">What happens next?</h4>
              <ul className="text-sm text-emerald-700 space-y-2">
                <li>• We&apos;ll review your booking within 24 hours</li>
                <li>• You&apos;ll receive a confirmation email with payment instructions</li>
                <li>• A 30% deposit is required to secure your spot</li>
                <li>• Full payment is due 30 days before departure</li>
              </ul>
            </div>
            <Button onClick={handleClose} className="mt-6 bg-emerald-600 hover:bg-emerald-700">Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Book: {tour.name}</DialogTitle>
              <DialogDescription>{tour.duration} • ${tour.price.toLocaleString()} USD per person</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 234 567 8900" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input id="country" required value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} placeholder="United States" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests *</Label>
                  <Select value={formData.numberOfGuests} onValueChange={(value) => setFormData({ ...formData, numberOfGuests: value })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <SelectItem key={n} value={n.toString()}>{n} {n === 1 ? 'Guest' : 'Guests'}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment">Payment Method</Label>
                <Select value={formData.paymentMethod} onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                    <SelectItem value="pay_on_arrival">Pay on Arrival</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialRequests">Special Requests (optional)</Label>
                <Textarea id="specialRequests" value={formData.specialRequests} onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })} placeholder="Dietary requirements, medical conditions, etc." rows={3} />
              </div>
              <div className="bg-stone-50 p-4 rounded-lg text-sm">
                <p className="font-medium text-stone-700 mb-2">Booking Summary</p>
                <p className="text-stone-600">Total: <span className="font-semibold text-emerald-700">${(tour.price * parseInt(formData.numberOfGuests)).toLocaleString()} USD</span></p>
                <p className="text-stone-500 text-xs mt-1">30% deposit (${((tour.price * parseInt(formData.numberOfGuests)) * 0.3).toLocaleString()}) required to confirm</p>
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                {isSubmitting ? (<><Loader2 className="h-4 w-4 mr-2 animate-spin" />Submitting...</>) : 'Submit Booking Request'}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}