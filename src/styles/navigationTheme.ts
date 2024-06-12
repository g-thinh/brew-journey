import type { Theme } from '@react-navigation/native';
import { colors } from './colors';

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: colors.dark['coffee-9'],
    background: colors.dark['gray-1'],
    card: colors.dark['gray-2'],
    text: colors.dark['gray-12'],
    border: colors.dark['gray-6'],
    notification: 'rgb(255, 69, 58)'
  }
};

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.light['coffee-9'],
    background: colors.light['gray-1'],
    card: colors.light['gray-2'],
    text: colors.light['gray-12'],
    border: colors.light['gray-6'],
    notification: 'rgb(255, 59, 48)'
  }
};

export default DarkTheme;
