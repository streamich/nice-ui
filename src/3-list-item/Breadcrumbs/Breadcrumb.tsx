import * as React from 'react';
import {rule, theme, makeRule} from 'nano-theme';
import {Link} from 'react-router-lite';

const blockClass = rule({
  ...theme.font.ui2.bold,
  fz: '17.6px',
  pad: '4px 8px',
  bdrad: '8px',
  col: theme.g(0.1),
  '&:hover': {
    col: theme.blue,
    bg: theme.green(0.08),
  },
});

const useBlockNoHoverClass = makeRule((theme) => ({
  ...theme.font.ui2.bold,
  col: theme.g(0.5),
  '&:hover': {
    bg: 'transparent',
    col: theme.g(0.5),
  },
}));

export interface BreadcrumbProps {
  to?: string;
  noHover?: boolean;
  noClick?: boolean;
  children?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({to, noHover, noClick, children}) => {
  const blockNoHoverClass = useBlockNoHoverClass();
  const className = blockClass + (noHover ? blockNoHoverClass : '');

  if (noClick || !to) {
    return <span className={className}>{children}</span>;
  }

  return (
    <Link a to={to} className={className}>
      {children}
    </Link>
  );
};
