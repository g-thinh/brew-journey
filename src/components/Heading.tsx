import { useTheme } from '@/hooks/useTheme';
import { createUtilStyles, UtilityStyles } from '@/styles/createUtilStyles';
import { Text, TextProps } from 'react-native';

type HeadingProps = TextProps & UtilityStyles;

export default function Heading({ children, ...props }: HeadingProps) {
  const theme = useTheme();
  const utilities = createUtilStyles(props, theme);

  return (
    <Text
      accessibilityRole="header"
      {...props}
      style={[utilities, props.style]}
    >
      {children}
    </Text>
  );
}
