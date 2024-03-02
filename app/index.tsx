import { TamaguiProvider, View, Text } from '@tamagui/core';
import { StatusBar } from 'expo-status-bar';
import '@tamagui/core/reset.css';

import { useFonts } from 'expo-font';

import config from '../tamagui.config';
import { Link } from 'expo-router';
import { Button } from 'tamagui';
import { useEffect } from 'react';

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <View
        flex={1}
        backgroundColor="white"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Open up App.tsx to start working on your app!</Text>

        <Link href="/test">
          <>Test</>
        </Link>
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}
