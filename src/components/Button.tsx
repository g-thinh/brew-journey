import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/styles/theme';
import { UtilityStyles, createUtilStyles } from '@/styles/createUtilStyles';
import { PressableProps, Pressable, ViewStyle, StyleSheet } from 'react-native';

type ButtonProps = PressableProps & UtilityStyles;

export default function Button(props: ButtonProps) {
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
          backgroundColor: theme.colors['gray-3'],
          borderColor: theme.colors['gray-3'],
          transform: [{ translateY: 3 }]
        }),
        ...(props.style as ViewStyle)
      })}
    />
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    base: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 80,
      backgroundColor: theme.colors['gray-4'],
      padding: theme.space[2],
      borderRadius: 4,
      borderBottomWidth: 3,
      borderRightWidth: 3,
      borderColor: theme.colors['gray-5']
    }
  });
