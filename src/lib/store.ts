import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Tour {
  id: string;
  title: string;
  location: string;
  country: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  highlights: string[];
  included: string[];
  maxGroupSize: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Expert';
  bestTime: string;
}

export interface BookingItem {
  tour: Tour;
  travelers: number;
  date: string;
  totalPrice: number;
}

interface AppState {
  // UI State
  isMenuOpen: boolean;
  isBookingModalOpen: boolean;
  selectedTour: Tour | null;
  activeSection: string;

  // Filters
  selectedCategory: string;
  priceRange: [number, number];
  durationFilter: string;
  searchQuery: string;

  // Cart/Bookings
  cart: BookingItem[];

  // Actions
  setMenuOpen: (open: boolean) => void;
  setBookingModalOpen: (open: boolean) => void;
  setSelectedTour: (tour: Tour | null) => void;
  setActiveSection: (section: string) => void;
  setSelectedCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setDurationFilter: (duration: string) => void;
  setSearchQuery: (query: string) => void;
  addToCart: (booking: BookingItem) => void;
  removeFromCart: (tourId: string) => void;
  clearCart: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial UI State
      isMenuOpen: false,
      isBookingModalOpen: false,
      selectedTour: null,
      activeSection: 'home',

      // Initial Filters
      selectedCategory: 'all',
      priceRange: [0, 10000],
      durationFilter: 'all',
      searchQuery: '',

      // Initial Cart
      cart: [],

      // Actions
      setMenuOpen: (open) => set({ isMenuOpen: open }),
      setBookingModalOpen: (open) => set({ isBookingModalOpen: open }),
      setSelectedTour: (tour) => set({ selectedTour: tour }),
      setActiveSection: (section) => set({ activeSection: section }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setPriceRange: (range) => set({ priceRange: range }),
      setDurationFilter: (duration) => set({ durationFilter: duration }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      addToCart: (booking) => set((state) => ({ cart: [...state.cart, booking] })),
      removeFromCart: (tourId) => set((state) => ({ cart: state.cart.filter((b) => b.tour.id !== tourId) })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'trekkers-kingdom-store',
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
