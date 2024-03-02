import { Link } from 'expo-router';
import { Button, Text, View, styled } from 'tamagui';

export default function TestPage() {
  return (
    <View
      flex={1}
      backgroundColor="white"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="black">Test page</Text>

      <ButtonLink href="/">Go Home</ButtonLink>
    </View>
  );
}

const ButtonLink = styled(Link, {
  padding: '$3',
  borderRadius: '$radius.10',
  backgroundColor: '$blue9'
});
