import * as React from 'react';
import {lightTheme as theme, rule} from 'nano-theme';

const blockClass = rule({
  ...theme.font.ui1.mid,
  d: 'flex',
  ai: 'center',
  w: '100%',
  fz: '13px',
  pd: '8px 20px',
  bxz: 'border-box',
  col: theme.g(0.2),
});

export interface ContextSectionProps extends React.AllHTMLAttributes<any> {}

export const ContextSection: React.FC<ContextSectionProps> = ({className, ...rest}) => {
  return <div {...rest} className={(className || '') + blockClass} />;
};
