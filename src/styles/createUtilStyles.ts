import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from './theme';

type Margins = {
  mt?: ViewStyle['marginTop'];
  mb?: ViewStyle['marginBottom'];
  mr?: ViewStyle['marginRight'];
  ml?: ViewStyle['marginLeft'];
  my?: ViewStyle['margin'];
  mx?: ViewStyle['margin'];
  m?: ViewStyle['margin'];
};

type Paddings = {
  pt?: ViewStyle['paddingTop'];
  pb?: ViewStyle['paddingBottom'];
  pr?: ViewStyle['paddingRight'];
  pl?: ViewStyle['paddingLeft'];
  py?: ViewStyle['padding'];
  px?: ViewStyle['padding'];
  p?: ViewStyle['padding'];
};

type Colors = {
  c?: keyof Theme['colors'];
  bg?: keyof Theme['colors'];
};

type FlexLayout = {
  fd?: ViewStyle['flexDirection'];
  ai?: ViewStyle['alignItems'];
  jc?: ViewStyle['justifyContent'];
  flex?: ViewStyle['flex'];
  g?: ViewStyle['gap'];
};

type Text = {
  ta?: TextStyle['textAlign'];
  fs?: TextStyle['fontSize'];
  fw?: TextStyle['fontWeight'];
};

export type UtilityStyles = Margins & Paddings & FlexLayout & Colors & Text;

/**
 * Utility function that creates shorthand styles derived from a Text, View or Image props
 * @param props
 * @returns
 */
export function createUtilStyles<T extends UtilityStyles>(
  props: T,
  theme: Theme
) {
  const {
    mt,
    mb,
    mr,
    ml,
    pt,
    pb,
    pr,
    pl,
    fd,
    c,
    bg,
    my,
    mx,
    m,
    p,
    px,
    py,
    jc,
    ai,
    flex,
    ta,
    fs,
    fw,
    g
  } = props;

  const utilities = StyleSheet.create({
    margins: {
      marginTop: mt,
      marginBottom: mb,
      marginLeft: ml,
      marginRight: mr,
      ...(my && {
        marginTop: my,
        marginBottom: my
      }),
      ...(mx && {
        marginLeft: mx,
        marginRight: mx
      }),
      ...(m && {
        marginTop: m,
        marginBottom: m,
        marginLeft: m,
        marginRight: m
      })
    },
    paddings: {
      paddingTop: pt,
      paddingBottom: pb,
      paddingLeft: pl,
      paddingRight: pr,
      ...(py && {
        marginTop: py,
        marginBottom: py
      }),
      ...(px && {
        marginLeft: px,
        marginRight: px
      }),
      ...(p && {
        marginTop: p,
        marginBottom: p,
        marginLeft: p,
        marginRight: p
      })
    },
    flexLayout: {
      flexDirection: fd,
      justifyContent: jc,
      alignItems: ai,
      flex,
      gap: g
    },
    colors: {
      color: (c && theme.colors[c]) ?? c,
      backgroundColor: (bg && theme.colors[bg]) ?? bg
    },
    text: {
      textAlign: ta,
      fontWeight: fw,
      fontSize: fs
    }
  });

  return StyleSheet.flatten({
    ...utilities.margins,
    ...utilities.paddings,
    ...utilities.colors,
    ...utilities.flexLayout,
    ...utilities.text
  });
}
