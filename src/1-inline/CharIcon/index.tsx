import * as React from 'react';
import {rule, lightTheme as theme, useTheme} from 'nano-theme';

const blockClass = rule({
  ...theme.font.mono.bold,
  textAlign: 'center',
  verticalAlign: 'middle',
  bdrad: '15%',
});

export interface CharIconProps {
  size?: number;
  children?: React.ReactNode;
}

export const CharIcon: React.FC<CharIconProps> = ({size = 16, children}) => {
  const theme = useTheme();

  const style: React.CSSProperties = {
    background: theme.g(0, 0.08),
    width: size,
    height: size,
    fontSize: 0.9 * size,
    lineHeight: `${size}px`,
  };

  return (
    <span className={blockClass} style={style}>
      {children}
    </span>
  );
};
