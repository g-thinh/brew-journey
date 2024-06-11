import { Theme } from '@/styles/theme';
import { useTheme } from '@/hooks/useTheme';
import { createUtilStyles, UtilityStyles } from '@/styles/createUtilStyles';
import { StyleSheet, Text, TextProps } from 'react-native';

type HeadingProps = TextProps & UtilityStyles;

export default function Heading({ children, ...props }: HeadingProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const utilities = createUtilStyles(props, theme);

  return (
    <Text
      accessibilityRole="header"
      {...props}
      style={[utilities, styles.base, props.style]}
    >
      {children}
    </Text>
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    base: {
      color: theme.colors['gray-12'],
      fontSize: theme.fontSizes[5],
      fontWeight: 600
    }
  });
