import { create } from 'zustand';

interface SubscriptionStore {
  isPremium: boolean;
  subscribe: (plan: 'monthly' | 'yearly') => void;
  unsubscribe: () => void;
}

export const useSubscriptionStore = create<SubscriptionStore>((set) => ({
  isPremium: true, // Always true to make all features free
  subscribe: (plan) => set({ isPremium: true }),
  unsubscribe: () => set({ isPremium: true }),
}));