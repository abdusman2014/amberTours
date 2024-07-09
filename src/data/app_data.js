import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useVehicleStore = create(
  persist(
    (set, get) => ({
      vehicles: [],
      setVehicles: (veh) => set((state) => ({ vehicles: veh })),
      removeAllVehicles: () => set({ vehicles: [] }),
      testimonials: [],
      setTestimonials: (test) => set((state) => ({ testimonials: test })),
      removeAllTestimonials: () => set({ testimonials: [] }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useVehicleStore;
