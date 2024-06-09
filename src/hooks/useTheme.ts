import { darkTheme, lightTheme } from '@/styles/theme';
import { useColorScheme } from 'react-native';

export function useTheme() {
  const currentTheme = useColorScheme();
  return currentTheme === 'dark' ? darkTheme : lightTheme;
}
