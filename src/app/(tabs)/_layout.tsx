import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import { Appearance, Pressable, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

import P from '@/components/P';

export default function TabsLayout() {
  const theme = useTheme();
  const currentTheme = useColorScheme();
  const { t, i18n } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors['gray-12'],
        headerLeft: () => (
          <Pressable
            onPress={() =>
              Appearance.setColorScheme(
                currentTheme === 'dark' ? 'light' : 'dark'
              )
            }
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 12,
              gap: 4
            }}
          >
            <Feather
              name={currentTheme === 'dark' ? 'moon' : 'sun'}
              size={24}
              color={theme.colors['coffee-9']}
            />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable
            onPress={() => {
              const newLocale = i18n.language === 'en' ? 'fr' : 'en';
              i18n.changeLanguage(newLocale);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 12,
              gap: 4
            }}
          >
            <P style={{ fontWeight: 500, textTransform: 'uppercase' }}>
              {i18n.language}
            </P>
            <Feather
              name="globe"
              size={24}
              color={theme.colors['coffee-9']}
            />
          </Pressable>
        )
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tab:brew'),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="coffee"
                size={24}
                color={theme.colors['coffee-9']}
              />
            ) : (
              <MaterialCommunityIcons
                name="coffee-outline"
                size={24}
                color={theme.colors['gray-9']}
              />
            )
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: t('tab:discover'),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather
                name="book-open"
                size={24}
                color={theme.colors['coffee-9']}
              />
            ) : (
              <Feather
                name="book"
                size={24}
                color={theme.colors['gray-9']}
              />
            )
        }}
      />
    </Tabs>
  );
}
