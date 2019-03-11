import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';

const blockClass = rule({
  ...theme.font.sansLite,
  col: theme.grey[2],
  fz: '13px',
  pos: 'relative',
  flexGrow: 1,
  ta: 'center',
  cur: 'pointer',
  userSelect: 'none',
  '&:hover': {
    col: theme.grey[0],
    bg: 'rgba(0,0,0,.02)',
  },
});

const blockClassActive = rule({
  bg: 'transparent',
  col: theme.color1[2],
  '&:hover': {
    bg: 'transparent',
    col: theme.color1[2],
  },
});

const barClass = rule({
  pos: 'absolute',
  top: 0,
  left: 0,
  h: '2px',
  w: '100%',
  bg: theme.color1[1],
});

export interface Props {
  active?: boolean;
  onClick?: React.MouseEventHandler;
}

const SidebarTab: React.SFC<Props> = ({active, onClick, children}) => {
  return (
    <div className={blockClass + (active ? blockClassActive : '')} onClick={onClick}>
      {children}
      {active && <div className={barClass} />}
    </div>
  );
};

export default SidebarTab;
