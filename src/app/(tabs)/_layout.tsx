import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';

export default function TabsLayout() {
  const theme = useTheme();
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.primary }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home'
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings'
        }}
      />
    </Tabs>
  );
}
