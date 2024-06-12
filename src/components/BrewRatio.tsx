import { useState } from 'react';
import Box from './Box';
import P from './P';
import { Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';

type ChoiceItem = {
  id: number;
  name: string;
  description?: string;
  partsWater: number;
};

export default function BrewRatio() {
  const theme = useTheme();
  const { t } = useTranslation('brew');
  const [ratio, setRatio] = useState<number>(15);
  const [currentChoice, setCurrentChoice] = useState(1);

  const increment = () => setRatio((prev) => prev + 1);
  const decrement = () => setRatio((prev) => prev - 1);

  const handleChoiceSelection = (newChoice: number) => {
    setCurrentChoice(newChoice);
    const selectedChoice = CHOICES.find((item) => item.id === newChoice);

    if (selectedChoice) setRatio(selectedChoice.partsWater);
  };

  const showCustomizeRatio = currentChoice === 3;

  const CHOICES: ChoiceItem[] = [
    {
      id: 0,
      name: t('brew:choices.light'),
      description: t('brew:choices.light_description'),
      partsWater: 18
    },
    {
      id: 1,
      name: t('brew:choices.balanced'),
      description: t('brew:choices.balanced_description'),
      partsWater: 16
    },
    {
      id: 2,
      name: t('brew:choices.strong'),
      description: t('brew:choices.strong_description'),
      partsWater: 14
    },
    {
      id: 3,
      name: t('brew:choices.custom'),
      description: t('brew:choices.custom_description'),
      partsWater: ratio
    }
  ];

  return (
    <Box>
      <Box
        fd="row"
        ai="center"
        jc="center"
        g={28}
        my={18}
        style={{ alignSelf: 'center' }}
      >
        {showCustomizeRatio && (
          <Pressable
            onPress={increment}
            disabled={ratio >= 20}
            style={{
              ...styles.button,
              ...(ratio >= 20 && {
                opacity: 0.5
              }),
              backgroundColor: theme.colors['coffee-5']
            }}
          >
            <MaterialIcons
              name="add"
              size={36}
              color={theme.colors['coffee-9']}
            />
          </Pressable>
        )}
        <P
          ta="center"
          fs={96}
          style={{ minWidth: 200 }}
        >
          1:{ratio}
        </P>
        {showCustomizeRatio && (
          <Pressable
            onPress={decrement}
            disabled={ratio === 1}
            style={{
              ...styles.button,
              ...(ratio === 1 && {
                opacity: 0.5
              }),
              backgroundColor: theme.colors['coffee-5']
            }}
          >
            <MaterialIcons
              name="remove"
              size={36}
              color={theme.colors['coffee-9']}
            />
          </Pressable>
        )}
      </Box>
      <Box
        jc="center"
        style={{ gap: 12 }}
      >
        {CHOICES.map((choice, index) => (
          <Pressable
            onPress={() => handleChoiceSelection(index)}
            key={index}
            style={{
              ...styles.card,
              borderColor: theme.colors['gray-3'],
              ...(currentChoice === index && {
                borderColor: theme.colors['coffee-9']
              })
            }}
          >
            <P
              fs={18}
              c="gray-12"
              ff={currentChoice === index ? 'Lato_900Black' : 'Lato_400Regular'}
              style={{}}
            >
              {choice.name}
            </P>
            <P>1:{choice.partsWater}</P>
            <P
              fs={14}
              ta="center"
            >
              {choice.description}
            </P>
          </Pressable>
        ))}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 999
  },
  card: {
    minHeight: 80,
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 12,
    padding: 12
  }
});
