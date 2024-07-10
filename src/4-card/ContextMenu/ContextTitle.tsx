import * as React from 'react';
import {lightTheme as theme, rule} from 'nano-theme';

const blockClass = rule({
  ...theme.font.ui3,
  col: theme.g(0.4),
  fz: '10px',
  d: 'block',
  pad: '0px 20px',
  mar: 0,
  textTransform: 'uppercase',
  letterSpacing: '1px',
});

export interface ContextTitleProps {
  children?: React.ReactNode;
}

export const ContextTitle: React.FC<ContextTitleProps> = ({children}) => {
  return <h6 className={blockClass}>{children}</h6>;
};
