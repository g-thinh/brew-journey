import Box from '@/components/Box';
import Heading from '@/components/Heading';
import P from '@/components/P';
import { useTheme } from '@/hooks/useTheme';
import { Link } from 'expo-router';
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
          ff="Lato_700Bold"
        >
          {t('home:title')}
        </Heading>
        <P
          c="gray-12"
          ff="Lato_400Regular"
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
        <Link
          asChild
          href="/brew"
          style={{
            ...styles.button,
            backgroundColor: theme.colors['coffee-4']
          }}
        >
          <Pressable
            style={({ pressed }) => ({
              ...styles.button,
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
        </Link>
        <Link
          asChild
          href="/discover"
          style={{
            ...styles.button,
            backgroundColor: theme.colors['gray-4']
          }}
        >
          <Pressable
            style={({ pressed }) => ({
              ...styles.button,

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
        </Link>
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
