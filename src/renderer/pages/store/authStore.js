import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  userIsLogged: false,
  onLogin: () => set({ userIsLogged: true }),
  onLogout: () => set({ userIsLogged: false }),
}));
