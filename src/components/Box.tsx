import { useTheme } from '@/hooks/useTheme';
import { UtilityStyles, createUtilStyles } from '@/styles/createUtilStyles';
import { View, ViewProps } from 'react-native';

type BoxProps = ViewProps & UtilityStyles;

export default function Box({ children, ...props }: BoxProps) {
  const theme = useTheme();
  const utils = createUtilStyles(props, theme);

  return (
    <View
      {...props}
      style={[utils, props.style]}
    >
      {children}
    </View>
  );
}
