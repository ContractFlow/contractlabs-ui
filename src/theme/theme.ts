import { createTheme, ThemeOptions } from '@mui/material/styles';
import './../styles/fonts.css';

declare module '@mui/material/styles' {
  interface Palette {
    extendedColors: {
      grey: Record<number, string>;
      blue: Record<number, string>;
      turquoise: Record<number, string>;
      orange: Record<number, string>;
      red: Record<number, string>;
      green: Record<number, string>;
      purple: Record<number, string>;
    };
  }

  interface PaletteOptions {
    extendedColors?: {
      grey: Record<number, string>;
      blue: Record<number, string>;
      turquoise: Record<number, string>;
      orange: Record<number, string>;
      red: Record<number, string>;
      green: Record<number, string>;
      purple: Record<number, string>;
    };
  }
}

// 🔵 **Color Scales (Aligned with ContractFlow)**
const extendedColors = {
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  blue: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#1279A1', // Aligned with ContractFlow
    600: '#0F6A8E',
    700: '#0C5C7B',
    800: '#094D68',
    900: '#073F55',
  },
  turquoise: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#00ACC1', // Aligned with ContractFlow
    600: '#0097A7',
    700: '#00838F',
    800: '#006064',
    900: '#004D52',
  },
  orange: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
  },
  red: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#C62828', // Aligned with ContractFlow
    600: '#B71C1C',
    700: '#9C0F0F',
    800: '#820808',
    900: '#6A0303',
  },
  green: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#006B52', // Aligned with ContractFlow
    600: '#005A45',
    700: '#004D39',
    800: '#003F2E',
    900: '#002F22',
  },
  purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#8E24AA',
    600: '#7B1FA2',
    700: '#6A1B9A',
    800: '#4A148C',
    900: '#38006B',
  },
};

// 🌙 **Light & Dark Theme Configuration**
const lightPalette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: { main: '#00274D', contrastText: '#08eace' }, // ContractFlow Primary
  secondary: { main: '#1279A1' }, // ContractFlow Secondary
  background: {
    default: '#F5F7FA',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#153A67',
    secondary: '#1279A1',
  },
  success: { main: '#006B52', contrastText: '#FFFFFF' },
  info: { main: '#1279A1', contrastText: '#FFFFFF' },
  warning: { main: '#F4C542', contrastText: '#4A2500' },
  error: { main: '#C62828', contrastText: '#FFFFFF' },
  extendedColors,
};

const darkPalette: ThemeOptions['palette'] = {
  mode: 'dark',
  primary: { main: '#375A8A' }, // Less saturated, deeper blue
  secondary: { main: '#1B768F' }, // Muted turquoise
  background: {
    default: '#0D1214', // Deep charcoal, not fully black
    paper: '#1E2227', // Slightly lighter for contrast
  },
  text: {
    primary: '#B8C5D2', // Soft grayish-blue, easier on eyes
    secondary: '#85A7C0', // Muted highlight
  },
  success: { main: '#1B6F57', contrastText: '#1E2227' }, // Deeper green
  info: { main: '#3E97BA', contrastText: '#1E2227' }, // Desaturated blue
  warning: { main: '#B38A3E', contrastText: '#1E2227' }, // Muted gold
  error: { main: '#9A3B3B', contrastText: '#FFFFFF' }, // Darker, softer red
  extendedColors,
};

const getThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: mode === 'dark' ? darkPalette : lightPalette,
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontWeight: 400 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          'textTransform': 'none',
          'fontWeight': 400,
          'boxShadow': 'none',
          '&:hover': {
            boxShadow: 'none', // No shadow on hover
          },
          'transition': 'transform 0.2s ease-out',
          '&:active': {
            transform: 'scale(0.9)', // Shrink on click
          },
        },
        sizeSmall: {
          fontSize: '0.8rem',
        },
        sizeMedium: {
          fontSize: '1rem',
        },
        sizeLarge: {
          fontSize: '1.2rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        // root: { borderRadius: "12px" },
      },
    },
    MuiPaper: {
      styleOverrides: {
        // rounded: { borderRadius: "12px" },
      },
    },
    MuiTextField: {
      styleOverrides: {
        // root: { borderRadius: "8px" },
      },
    },
  },
});

// 🌍 **Export the Theme**
export const createCustomTheme = (mode: 'light' | 'dark', overrides?: ThemeOptions) =>
  createTheme({ ...getThemeOptions(mode), ...overrides });

export default getThemeOptions;
