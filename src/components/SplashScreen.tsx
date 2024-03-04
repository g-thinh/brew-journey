import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { View, Text } from 'tamagui';
import splashJson from '../assets/splash.json';
import { Animated } from 'react-native';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animationRef = useRef(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Adjust the duration as per your preference
      useNativeDriver: true
    }).start();
  }, [fadeAnim]);

  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="#ffffff"
    >
      <LottieView
        autoPlay
        ref={animationRef}
        style={{
          width: 200,
          height: 200
        }}
        source={splashJson}
      />
      <Animated.Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          opacity: fadeAnim,
          transform: [
            {
              translateX: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-80, 0] // Adjust the starting position
              })
            }
          ]
        }}
      >
        Brew Journey
      </Animated.Text>
    </View>
  );
}
