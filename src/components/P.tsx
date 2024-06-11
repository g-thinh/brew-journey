import { useTheme } from '@/hooks/useTheme';
import { UtilityStyles, createUtilStyles } from '@/styles/createUtilStyles';
import { Text, TextProps } from 'react-native';

type ParagraphProps = TextProps & UtilityStyles;

export default function P({ children, ...props }: ParagraphProps) {
  const theme = useTheme();
  const utilities = createUtilStyles(props, theme);

  return (
    <Text
      {...props}
      style={[utilities, props.style]}
    >
      {children}
    </Text>
  );
}
