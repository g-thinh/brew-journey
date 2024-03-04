import { TamaguiProvider } from '@tamagui/core';
import '@tamagui/core/reset.css';
import { SplashScreen as ExpoSplashScreen, Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import SplashScreen from '../components/SplashScreen';

import { useEffect, useState } from 'react';
import config from '../../tamagui.config';

ExpoSplashScreen.preventAutoHideAsync().catch(() => {});

export default function AppLayout() {
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
    <TamaguiProvider config={config}>
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
    </TamaguiProvider>
  );
}
