import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet
} from 'react-native';
import Box from './Box';
import P from './P';
import { useTheme } from '@/hooks/useTheme';

export type BrewMethodCardProps = {
  name: string;
  description: string;
  imageSrc: ImageSourcePropType;
};

export function BrewMethodCard(props: BrewMethodCardProps) {
  const theme = useTheme();
  return (
    <Box style={styles.slide}>
      <Box
        jc="center"
        fd="row"
      >
        <Image
          source={props.imageSrc}
          style={{ ...styles.image, borderColor: theme.colors['coffee-6'] }}
        />
      </Box>
      <Box p={32}>
        <P
          ta="center"
          fs={32}
          my={32}
        >
          {props.name}
        </P>
        <P
          ta="center"
          fs={16}
        >
          {props.description}
        </P>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: Dimensions.get('screen').width,
    overflow: 'hidden'
  },
  image: {
    width: '80%',
    height: 300,
    objectFit: 'contain',
    borderWidth: 3,
    borderRadius: 24
  }
});
