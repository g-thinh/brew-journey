import Box from '@/components/Box';
import Button from '@/components/Button';
import * as Updates from 'expo-updates';
import P from '@/components/P';

export default function SettingsScreen() {
  return (
    <Box
      ai="center"
      jc="center"
      bg="gray-1"
      style={{ flex: 1 }}
    >
      <Button onPress={Updates.reloadAsync}>
        <P>Reload App</P>
      </Button>
    </Box>
  );
}
