import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/styles/theme';
import { UtilityStyles, createUtilStyles } from '@/styles/createUtilStyles';
import {
  View,
  PressableProps,
  Pressable,
  ViewStyle,
  StyleSheet
} from 'react-native';

type ButtonProps = PressableProps & UtilityStyles;

export default function Button({ children, ...props }: ButtonProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const utils = createUtilStyles(props, theme);

  return (
    <Pressable
      {...props}
      style={({ pressed }) => ({
        ...utils,
        ...styles.base,
        ...(pressed && {
          backgroundColor: 'blue'
        }),
        ...(props.style as ViewStyle)
      })}
    >
      {children}
    </Pressable>
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    base: {
      backgroundColor: theme.colors.muted,
      padding: theme.space[2],
      borderRadius: 4
    }
  });
