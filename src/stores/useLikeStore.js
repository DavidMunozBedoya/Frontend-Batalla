import { create } from "zustand";

export const useLikeStore = create((set) => ({

   onclickOk: false,
   onclickNoOk: false,
   toggleClickOk: () => set((state) => ({ onclickOk: !state.onclickOk, onclickNoOk: false })),
   toggleClickNoOk: () => set((state) => ({ onclickNoOk: !state.onclickNoOk, onclickOk: false }))

}));