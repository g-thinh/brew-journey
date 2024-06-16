import Box from '@/components/Box';
import { BrewMethodCard, BrewMethodCardProps } from '@/components/BrewCard';
import Heading from '@/components/Heading';
import P from '@/components/P';
import { useTheme } from '@/hooks/useTheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Pressable } from 'react-native';

export default function BrewScreen() {
  const theme = useTheme();
  const { t } = useTranslation('brew');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const METHODS: BrewMethodCardProps[] = [
    {
      name: t('brew:cards.aeropress.name'),
      description: t('brew:cards.aeropress.description'),
      imageSrc: require('@/assets/images/aeropress.png')
    },
    {
      name: t('brew:cards.frenchpress.name'),
      description: t('brew:cards.frenchpress.description'),
      imageSrc: require('@/assets/images/frenchpress.jpg')
    },
    {
      name: t('brew:cards.pourover.name'),
      description: t('brew:cards.pourover.description'),
      imageSrc: require('@/assets/images/pourover.webp')
    }
  ];

  const canScrollNext = currentSlide !== METHODS.length - 1;
  const canScrollPrevious = currentSlide >= 1;

  const scrollNext = () => {
    if (!flatListRef.current || !canScrollNext) return;
    const newSlideIndex = currentSlide + 1;
    setCurrentSlide(newSlideIndex);
    flatListRef.current.scrollToIndex({ animated: true, index: newSlideIndex });
  };

  const scrollPrevious = () => {
    if (!flatListRef.current || !canScrollPrevious) return;
    const newSlideIndex = currentSlide - 1;
    setCurrentSlide(newSlideIndex);
    flatListRef.current.scrollToIndex({ animated: true, index: newSlideIndex });
  };

  return (
    <Box
      flex={1}
      bg="gray-1"
      jc="space-between"
    >
      <Box
        m={24}
        fd="row"
        jc="center"
        ai="center"
        g={18}
      >
        <Pressable
          disabled={!canScrollPrevious}
          onPress={scrollPrevious}
          style={{
            borderRadius: 999,
            padding: 8,
            backgroundColor: theme.colors['gray-3'],
            ...(!canScrollPrevious && {
              opacity: 0.25
            })
          }}
        >
          <AntDesign
            name="left"
            size={24}
            color="black"
          />
        </Pressable>
        <Heading
          ta="center"
          fs={24}
          c="coffee-12"
          ff="Lato_700Bold"
        >
          {t('brew:choose_method')}
        </Heading>
        <Pressable
          onPress={scrollNext}
          disabled={!canScrollNext}
          style={{
            borderRadius: 999,
            padding: 8,
            backgroundColor: theme.colors['gray-3'],
            ...(!canScrollNext && {
              opacity: 0.25
            })
          }}
        >
          <AntDesign
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
      </Box>
      <FlatList
        ref={flatListRef}
        horizontal
        onViewableItemsChanged={({ changed }) =>
          setCurrentSlide(changed[0].index)
        }
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
        data={METHODS}
        initialScrollIndex={currentSlide}
        renderItem={({ index, item }) => (
          <BrewMethodCard
            key={index}
            {...item}
          />
        )}
      />
      <Link
        href="/brew/steps/first"
        asChild
        push
        style={{
          borderRadius: 24,
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 24,
          marginHorizontal: 32,
          paddingHorizontal: 12,
          paddingVertical: 14,
          backgroundColor: theme.colors['coffee-4']
        }}
      >
        <Pressable>
          <P
            ff="Lato_700Bold"
            c="coffee-12"
            fs={24}
          >
            {t('brew:continue')}
          </P>
        </Pressable>
      </Link>
    </Box>
  );
}
