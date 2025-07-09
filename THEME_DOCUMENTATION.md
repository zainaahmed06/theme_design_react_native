# Crypto Trading App Theme System

A comprehensive, responsive theming solution built with React Native, Zustand, and TypeScript. Designed specifically for crypto trading applications with support for light/dark themes and persistent theme selection.

## Features

✅ **Complete Theme System**: Colors, spacing, typography, shadows, and border radius  
✅ **Light & Dark Themes**: Pre-configured themes optimized for crypto trading apps  
✅ **Responsive Design**: Uses react-native-responsive-screen for consistent sizing  
✅ **State Management**: Zustand store with AsyncStorage persistence  
✅ **TypeScript Support**: Fully typed for better developer experience  
✅ **Crypto-Specific Colors**: Bull/bear colors for market trends  
✅ **Utility Functions**: Helper functions for common theming tasks  
✅ **Easy Theme Switching**: Toggle between themes with one function call  

## Installation

The following packages are required and already installed:

```bash
npm install zustand react-native-responsive-screen @react-native-async-storage/async-storage
```

## Quick Start

### 1. Import and Use the Theme Hook

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';

const MyComponent = () => {
  const { colors, spacing, fontSizes, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      padding: spacing.md,
    },
    title: {
      color: colors.text,
      fontSize: fontSizes.xl,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Crypto World!</Text>
    </View>
  );
};
```

### 2. Theme Switching

```tsx
import { useTheme } from './theme';

const ThemeToggleButton = () => {
  const { themeMode, toggleTheme, isDark } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Text>{isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}</Text>
    </TouchableOpacity>
  );
};
```

## Available Theme Properties

### Colors
```tsx
const { colors } = useTheme();

// Primary colors
colors.primary          // Main brand color
colors.primaryLight     // Lighter variant
colors.primaryDark      // Darker variant
colors.secondary        // Secondary brand color

// Backgrounds
colors.background       // Main background
colors.backgroundSecondary
colors.surface          // Card/component backgrounds

// Text colors
colors.text             // Primary text
colors.textSecondary    // Secondary text
colors.textTertiary     // Muted text
colors.textInverse      // Text on colored backgrounds

// Status colors
colors.success          // Success states
colors.danger           // Error/danger states
colors.warning          // Warning states
colors.info             // Info states

// Crypto-specific colors
colors.bull             // Green for price increases
colors.bear             // Red for price decreases
colors.neutral          // Gray for no change

// Chart colors
colors.chartPositive
colors.chartNegative
colors.chartGrid
colors.chartBackground
```

### Spacing (Responsive)
```tsx
const { spacing } = useTheme();

spacing.xs     // ~4px
spacing.sm     // ~8px
spacing.md     // ~16px (base)
spacing.lg     // ~24px
spacing.xl     // ~32px
spacing.xxl    // ~48px
spacing.xxxl   // ~64px
```

### Border Radius (Responsive)
```tsx
const { radius } = useTheme();

radius.xs      // ~4px
radius.sm      // ~8px
radius.md      // ~12px
radius.lg      // ~16px
radius.xl      // ~24px
radius.full    // 9999 (fully rounded)
```

### Font Sizes (Responsive)
```tsx
const { fontSizes } = useTheme();

fontSizes.xs   // ~12px
fontSizes.sm   // ~14px
fontSizes.md   // ~16px (base)
fontSizes.lg   // ~18px
fontSizes.xl   // ~20px
fontSizes.xxl  // ~24px
fontSizes.xxxl // ~32px
```

### Shadows
```tsx
const { shadows } = useTheme();

shadows.small   // Subtle shadow
shadows.medium  // Standard shadow
shadows.large   // Prominent shadow
shadows.card    // Card-specific shadow
```

## Utility Functions

### Button Styles
```tsx
import { createButtonStyles } from './theme';

const buttonStyle = createButtonStyles('primary', theme);
// Returns complete button style object
```

### Card Styles
```tsx
import { createCardStyles } from './theme';

const cardStyle = createCardStyles(theme, true); // elevated = true
```

### Color Utilities
```tsx
import { hexToRgba, getChangeColor, formatPercentageChange } from './theme';

const transparentColor = hexToRgba('#6366f1', 0.5);
const changeColor = getChangeColor(2.34, colors); // Returns bull color
const formattedChange = formatPercentageChange(2.34); // Returns "+2.34%"
```

## Advanced Usage

### Custom Shadow
```tsx
const { createShadow } = useTheme();

const customShadow = createShadow(
  colors.primary,  // shadow color
  0.2,            // opacity
  6,              // radius
  4               // elevation
);
```

### Responsive Spacing
```tsx
const { getSpacing } = useTheme();

const doubleSpacing = getSpacing(2); // spacing.md * 2
```

### Crypto Price Colors
```tsx
import { getCryptoTrendColor } from './theme';

const trendColor = getCryptoTrendColor('bull', colors); // Green color
```

## Theme Store Direct Access

If you need direct access to the Zustand store:

```tsx
import { useThemeStore } from './theme';

const Component = () => {
  const { themeMode, setThemeMode, theme } = useThemeStore();
  
  // Direct theme mode setting
  const switchToLight = () => setThemeMode('light');
  const switchToDark = () => setThemeMode('dark');
  
  return (
    // Component JSX
  );
};
```

## Extending the Theme

### Adding New Colors
Edit `theme/constants.ts` to add new color properties:

```tsx
export const lightColors: ColorPalette = {
  // ...existing colors
  customColor: '#your-color',
  // ...
};
```

### Adding New Spacing Values
```tsx
export const spacing: SpacingScale = {
  // ...existing spacing
  custom: wp('10%'), // Custom spacing value
};
```

### Custom Theme Properties
Edit `theme/types.ts` to add new theme properties:

```tsx
export interface Theme {
  // ...existing properties
  customProperty: YourCustomType;
}
```

## Example Component

Check out `theme/ExampleComponent.tsx` for a complete crypto trading card component that demonstrates all theme features including:

- Dynamic styling based on theme mode
- Crypto-specific color usage (bull/bear colors)
- Responsive spacing and typography
- Theme toggle functionality
- Card layouts with shadows
- Status indicators

## Best Practices

1. **Always use theme values**: Instead of hardcoded values, use theme properties
2. **Responsive first**: Leverage the responsive spacing and font sizes
3. **Consistent shadows**: Use predefined shadow styles for consistency
4. **Semantic colors**: Use crypto-specific colors (bull/bear) for price changes
5. **Theme-aware components**: Always consider both light and dark theme appearances

## Theme Persistence

Themes are automatically persisted to AsyncStorage and will be restored when the app restarts. The persistence only stores the theme mode (`'light'` or `'dark'`) to keep storage minimal, and the full theme object is recreated on app launch.

## TypeScript Support

The entire theme system is fully typed with TypeScript, providing:
- Autocomplete for all theme properties
- Type safety for theme functions
- Intellisense support in your IDE
- Compile-time error checking

This ensures a robust development experience and helps prevent runtime errors related to theming.
