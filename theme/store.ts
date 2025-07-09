import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeStore, Theme, ThemeMode } from './types';
import {
  lightColors,
  darkColors,
  spacing,
  radius,
  fontSizes,
  lightShadows,
  darkShadows,
} from './constants';

// Create theme objects
const createTheme = (mode: ThemeMode): Theme => ({
  mode,
  colors: mode === 'light' ? lightColors : darkColors,
  spacing,
  radius,
  fontSizes,
  shadows: mode === 'light' ? lightShadows : darkShadows,
});

// Zustand store with persistence
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      themeMode: 'light',
      theme: createTheme('light'),
      
      setThemeMode: (mode: ThemeMode) => {
        const newTheme = createTheme(mode);
        set({
          themeMode: mode,
          theme: newTheme,
        });
      },
      
      toggleTheme: () => {
        const currentMode = get().themeMode;
        const newMode: ThemeMode = currentMode === 'light' ? 'dark' : 'light';
        const newTheme = createTheme(newMode);
        set({
          themeMode: newMode,
          theme: newTheme,
        });
      },
    }),
    {
      name: 'crypto-app-theme-storage', // unique name for the storage
      storage: createJSONStorage(() => AsyncStorage),
      // Only persist the theme mode, not the entire theme object
      partialize: (state) => ({ themeMode: state.themeMode }),
      // On hydration, recreate the theme object based on the persisted mode
      onRehydrateStorage: () => (state) => {
        if (state) {
          const theme = createTheme(state.themeMode);
          state.theme = theme;
        }
      },
    }
  )
);
