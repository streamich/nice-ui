import * as React from 'react';
import {lightTheme as theme, useTheme, rule} from 'nano-theme';

const blockClass = rule({
  ...theme.font.mono.bold,
  d: 'inline-block',
  pad: '.1em .2em',
  bdrad: '.25em',
  col: theme.color.sem.blue[0],
  fz: '.9em',
});

const blockAltClass = rule({
  ...theme.font.mono.mid,
});

export interface CodeProps {
  gray?: boolean;
  noBg?: boolean;
  size?: number;
  alt?: boolean;
  border?: boolean;
  nowrap?: boolean;
  spacious?: boolean;
  children?: React.ReactNode;
}

export const Code: React.FC<CodeProps> = ({gray, noBg, size, alt, border, nowrap, spacious, children}) => {
  const theme = useTheme();
  const style: React.CSSProperties = {
    background: theme.g(0, 0.04),
  };

  if (size) {
    style.fontSize = `${0.9 + size / 10}em`;
  }

  if (gray) {
    style.color = theme.g(0, 0.7);
    style.background = theme.g(0, 0.04);
  }

  if (noBg) {
    style.background = 'transparent';
  }

  if (border) {
    style.border = `1px solid ${theme.g(0, 0.06)}`;
  }

  if (nowrap) {
    style.whiteSpace = 'nowrap';
  }

  if (spacious) {
    style.padding = '.175em .6em .125em';
  }

  return (
    <code className={blockClass + (alt ? blockAltClass : '')} style={style}>
      {children}
    </code>
  );
};
