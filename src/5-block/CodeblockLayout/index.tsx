import * as React from 'react';
import {rule, theme, useRule} from 'nano-theme';

const blockClass = rule({
  ...theme.font.mono,
  d: 'block',
  bdrad: '5px',
  trs: 'background 0.6s ease 0s',
  fz: '.9em',
  lh: 1.3,
  overflowY: 'hidden',
  bd: '1px solid transparent',
  pad: '16px !important',
  '@media (max-width: 800px)': {
    pad: '8px !important',
  },
});

const blockCompactClass = rule({
  pad: `${theme.g(0.2)}px ${theme.g(0.3)}px !important`,
});

export interface CodeblockLayoutProps {
  compact?: boolean;
  children?: React.ReactNode;
}

export const CodeblockLayout: React.FC<CodeblockLayoutProps> = ({compact, children}) => {
  const dynamicBlockClass = useRule((theme) => ({
    col: theme.g(0.3),
    bg: theme.g(0, 0.02),
    '&:hover': {
      bg: theme.bg,
      bd: `1px solid ${theme.g(0, 0.04)}`,
    },
  }));

  const blockStyle: React.CSSProperties = {};

  return (
    <pre className={blockClass + dynamicBlockClass + (compact ? blockCompactClass : '')} style={blockStyle}>
      {children}
    </pre>
  );
};
