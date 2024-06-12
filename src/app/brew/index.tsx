import Box from '@/components/Box';
import Heading from '@/components/Heading';
import P from '@/components/P';
import { Link } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import BrewRatio from '@/components/BrewRatio';
import { useTranslation } from 'react-i18next';

export default function BrewScreen() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      flex={1}
      bg="gray-1"
      p={16}
      jc="space-between"
    >
      <Box>
        <Box
          p={12}
          g={8}
        >
          <Heading
            fs={18}
            c="coffee-12"
            ff="Lato_700Bold"
          >
            {t('brew:instruction')}
          </Heading>
          <Link
            href="/(tabs)/discover"
            asChild
          >
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
              <P
                fs={14}
                c="gray-12"
                ff="Lato_400Regular"
              >
                {t('brew:learn')}
              </P>
              <MaterialIcons
                name="info-outline"
                size={14}
                color="black"
              />
            </Pressable>
          </Link>
        </Box>
        <Box>
          <BrewRatio />
        </Box>
      </Box>
      <Pressable
        style={({ pressed }) => ({
          borderRadius: 24,
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 24,
          marginHorizontal: 32,
          paddingHorizontal: 12,
          paddingVertical: 14,
          backgroundColor: theme.colors['coffee-4'],
          ...(pressed && {
            backgroundColor: theme.colors['coffee-3'],
            borderColor: theme.colors['coffee-3'],
            transform: [{ translateY: 3 }]
          })
        })}
      >
        <P
          ff="Lato_700Bold"
          c="coffee-12"
          fs={24}
        >
          {t('brew:continue')}
        </P>
      </Pressable>
    </Box>
  );
}
