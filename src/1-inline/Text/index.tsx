import {createElement as h, CSSProperties, AllHTMLAttributes} from 'react';
import {useTheme, drule, lightTheme as theme, ThemeFontPalette} from 'nano-theme';

const createClassName = drule({
  ...theme.font.sans,
});

export interface Props extends AllHTMLAttributes<any> {
  as?: string;
  nowrap?: boolean;
  size?: number;
  font?: keyof ThemeFontPalette;
  kind?: keyof ThemeFontPalette['sans'];
}

export const Text: React.FC<Props> = ({as = 'span', nowrap, children, style, size, font, kind = 'mid', ...rest}) => {
  const theme = useTheme();

  const className = createClassName({
    col: theme.g(0.1, 0.8),
  });

  const style2: CSSProperties = style ? {...style} : {};

  if (nowrap) style2.whiteSpace = 'nowrap';

  if (size) {
    style2.fontSize = 1.1 ** size + 'em';
  }

  if (font) {
    const f = theme.font[font];
    if (f) {
      const ff = (f as any)[kind] as ThemeFontPalette['sans']['mid'];
      if (ff) {
        style2.fontFamily = ff.ff;
        style2.fontWeight = ff.fw;
      }
    }
  }

  return h(as, {...rest, className: (rest.className || '') + className, style: style2}, children);
};
