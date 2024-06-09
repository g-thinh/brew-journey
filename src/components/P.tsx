import { Theme } from '@/styles/theme';
import { useTheme } from '@/hooks/useTheme';
import { UtilityStyles, createUtilStyles } from '@/styles/createUtilStyles';
import { StyleSheet, Text, TextProps } from 'react-native';

type ParagraphProps = TextProps & UtilityStyles;

export default function P({ children, ...props }: ParagraphProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const utilities = createUtilStyles(props, theme);

  return (
    <Text
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
      color: theme.colors.text,
      fontSize: theme.fontSizes[2],
      fontWeight: 400
    }
  });
