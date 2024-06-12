import { Stack, useNavigation } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { Pressable } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';

export default function BrewLayout() {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: t('brew:title'),
          headerLeft: () => (
            <Pressable
              role="button"
              onPress={navigation.goBack}
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
