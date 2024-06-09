import { Link } from 'expo-router';
import { View, Text } from 'tamagui';
import * as Updates from 'expo-updates';
import { Appearance, TouchableOpacity, useColorScheme } from 'react-native';
import Button from '@/components/Button';
import P from '@/components/P';
import Box from '@/components/Box';
import Heading from '@/components/Heading';

export default function HomeScreen() {
  const currentTheme = useColorScheme();
  return (
    <Box
      flex={1}
      ai="center"
      jc="center"
      bg="background"
    >
      <View
        gap={16}
        alignItems="center"
      >
        <Heading>Ready to brew?</Heading>
        <Button
          onPress={() =>
            Appearance.setColorScheme(
              currentTheme === 'dark' ? 'light' : 'dark'
            )
          }
        >
          <P>{currentTheme}</P>
        </Button>
        <Link
          href="/"
          asChild
        >
          <TouchableOpacity
            onPress={Updates.reloadAsync}
            activeOpacity={0.5}
            style={{
              backgroundColor: 'black',
              borderWidth: 2,
              padding: 12,
              borderRadius: 12
            }}
          >
            <Text
              fontSize={16}
              fontWeight="500"
            >
              Reload
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </Box>
  );
}
