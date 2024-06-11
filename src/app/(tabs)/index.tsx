import Box from '@/components/Box';
import Heading from '@/components/Heading';
import P from '@/components/P';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      flex={1}
      bg="gray-1"
      p={16}
    >
      <Box
        my={32}
        ai="center"
        g={12}
      >
        <Heading
          aria-level={1}
          c="coffee-11"
          fs={28}
          fw={600}
          ta="center"
        >
          {t('home:title')}
        </Heading>
        <P
          c="gray-12"
          fs={18}
        >
          {t('home:choose')}
        </P>
      </Box>
      <Box
        ai="center"
        jc="center"
        g={16}
      >
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => ({
            ...styles.button,
            backgroundColor: theme.colors['coffee-4'],
            ...(pressed && {
              backgroundColor: theme.colors['coffee-3'],
              borderColor: theme.colors['coffee-3'],
              transform: [{ translateY: 3 }]
            })
          })}
        >
          <P
            c="gray-12"
            style={styles.text}
          >
            {t('home:start')}
          </P>
        </Pressable>
        <Pressable
          style={({ pressed }) => ({
            ...styles.button,
            backgroundColor: theme.colors['gray-4'],
            ...(pressed && {
              backgroundColor: theme.colors['gray-3'],
              borderColor: theme.colors['gray-3'],
              transform: [{ translateY: 3 }]
            })
          })}
        >
          <P
            c="gray-12"
            style={styles.text}
          >
            {t('home:how')}
          </P>
        </Pressable>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    paddingEnd: 24,
    paddingStart: 24,
    paddingVertical: 12,
    padding: 12,
    borderRadius: 8
  },
  text: {
    fontSize: 18,
    fontWeight: 600
  }
});
