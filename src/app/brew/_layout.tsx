import { Stack, useNavigation, useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { Pressable } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';

export default function BrewLayout() {
  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();

  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: t('brew:title'),
          headerLeft: () => (
            <Pressable
              role="button"
              onPress={router.back}
            >
              <Feather
                name="arrow-left"
                size={24}
                color={theme.colors['coffee-9']}
              />
            </Pressable>
          )
        }}
      />
      <Stack.Screen
        name="steps/first"
        options={{
          title: 'First Step',
          headerLeft: () => (
            <Pressable
              role="button"
              onPress={() => router.back()}
            >
              <Feather
                name="arrow-left"
                size={24}
                color={theme.colors['coffee-9']}
              />
            </Pressable>
          )
        }}
      />
    </Stack>
  );
}
