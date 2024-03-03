import { Link } from 'expo-router';
import { View, Text } from 'tamagui';

import { TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="orange"
    >
      <View
        gap={16}
        alignItems="center"
      >
        <Text
          fontSize={32}
          fontWeight="500"
        >
          Ready to brew?
        </Text>
        <Link
          href="/"
          asChild
        >
          <TouchableOpacity
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
              Get Started
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
