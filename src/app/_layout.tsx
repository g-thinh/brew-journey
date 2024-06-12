import { SplashScreen as ExpoSplashScreen, Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import SplashScreen from '../components/SplashScreen';
import { ThemeProvider } from '@react-navigation/native';
import { LightTheme, DarkTheme } from '@/styles/navigationTheme';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18nConfig from '@/locales/i18n';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic
} from '@expo-google-fonts/lato';

ExpoSplashScreen.preventAutoHideAsync().catch(() => {});

export default function AppLayout() {
  const currentTheme = useColorScheme();
  const { t } = useTranslation();
  const [isAppReady, setIsAppReady] = useState(false);
  const [loaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic
  });

  useEffect(() => {
    if (loaded) {
      ExpoSplashScreen.hideAsync();
      setTimeout(() => {
        setIsAppReady(true);
      }, 4000);
    }
  }, [loaded]);

  return (
    <I18nextProvider i18n={i18nConfig}>
      <ThemeProvider value={currentTheme === 'dark' ? DarkTheme : LightTheme}>
        {isAppReady ? (
          <Stack initialRouteName="(tabs)">
            <Stack.Screen
              name="(tabs)"
              options={{ title: t('screen:home'), headerShown: false }}
            />
            <Stack.Screen
              name="brew"
              options={{ title: t('screen:home'), headerShown: false }}
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
