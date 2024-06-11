import { SplashScreen as ExpoSplashScreen, Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import SplashScreen from '../components/SplashScreen';
import { ThemeProvider } from '@react-navigation/native';
import { LightTheme, DarkTheme } from '@/styles/navigationTheme';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18nConfig from '@/locales/i18n';

ExpoSplashScreen.preventAutoHideAsync().catch(() => {});

export default function AppLayout() {
  const currentTheme = useColorScheme();
  const [isAppReady, setIsAppReady] = useState(false);
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  });

  useEffect(() => {
    if (loaded) {
      ExpoSplashScreen.hideAsync();
      setTimeout(() => {
        setIsAppReady(true);
      }, 3000);
    }
  }, [loaded]);

  return (
    <I18nextProvider i18n={i18nConfig}>
      <ThemeProvider value={currentTheme === 'dark' ? DarkTheme : LightTheme}>
        {isAppReady ? (
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
            />
          </Stack>
        ) : (
          <SplashScreen />
        )}
        <StatusBar style="auto" />
      </ThemeProvider>
    </I18nextProvider>
  );
}
