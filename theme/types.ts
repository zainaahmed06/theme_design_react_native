export type ThemeMode = "light" | "dark";

export interface ColorPalette {
  // Primary colors for crypto app
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;

  // Background colors
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  surface: string;
  surfaceSecondary: string;

  // Text colors
  text: string;
  textSecondary: string;
  textTertiary: string;
  textInverse: string;

  // Status colors for crypto trading
  success: string;
  successLight: string;
  danger: string;
  dangerLight: string;
  warning: string;
  warningLight: string;
  info: string;
  infoLight: string;

  // Crypto specific colors
  bull: string; // Green for price increases
  bear: string; // Red for price decreases
  neutral: string; // Gray for no change

  // Border and divider colors
  border: string;
  borderSecondary: string;
  divider: string;
}

export interface SpacingScale {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export interface RadiusScale {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

export interface FontSizeScale {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export interface ShadowStyles {
  small: {
    shadowColor: string;
    shadowOffset: {width: number; height: number};
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  medium: {
    shadowColor: string;
    shadowOffset: {width: number; height: number};
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  large: {
    shadowColor: string;
    shadowOffset: {width: number; height: number};
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  card: {
    shadowColor: string;
    shadowOffset: {width: number; height: number};
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
}

export interface Theme {
  mode: ThemeMode;
  colors: ColorPalette;
  spacing: SpacingScale;
  radius: RadiusScale;
  fontSizes: FontSizeScale;
  shadows: ShadowStyles;
}

export interface ThemeStore {
  themeMode: ThemeMode;
  theme: Theme;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}
