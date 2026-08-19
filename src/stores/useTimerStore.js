import { create } from "zustand";

export const useTimerStore = create((set) => ({
   isActive: true,
   toggleActive: (value) => set({ isActive: value})
}));