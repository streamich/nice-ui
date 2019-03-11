import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';

const padding = 20;
const lineWidth = 1;
const className = rule({
  w: padding + lineWidth + padding + 'px',
  pos: 'relative',
  cursor: 'pointer',
  d: 'flex',
  '&:after': {
    content: '""',
    d: 'block',
    pos: 'relative',
    h: '100%',
    w: lineWidth + 'px',
    bg: theme.snow[2],
    left: padding + 'px',
    z: 1,
  },
  '&:hover &:after': {
    bg: theme.warning,
  },
  '.ClickLine_hover:hover &:after': {
    bg: theme.warning,
  },
});

const barSize = 3;
const barSizeHover = 7;
const bar = rule({
  pos: 'absolute',
  w: barSize + 'px',
  h: '0%',
  bdrad: '1px',
  top: 0,
  left: padding - (barSize - lineWidth) / 2 + 'px',
  bg: theme.color1[1],
  trs: 'height .3s, opacity .2s, background-color .2s',
  op: 0,
  z: 2,
  [`.${className.trim()}:hover &`]: {
    w: barSizeHover + 'px',
    left: padding - (barSizeHover - lineWidth) / 2 + 'px',
    h: '100%',
    op: 1,
    trs: 'height .3s, opacity .2s, width .06s, left .06s, background-color .2s',
  },
  [`.${className.trim()}:active &`]: {
    w: barSize + 'px',
    left: padding - (barSize - lineWidth) / 2 + 'px',
    bg: theme.color6[1],
  },
  '.ClickLine_hover:hover &': {
    h: '100%',
    op: 1,
  },
});
const barActive = rule({
  h: '100%',
  op: 1,
});

export interface Props {
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

const ClickLine: React.SFC<Props> = ({href, active, onClick}) => {
  let El = 'div';
  const elProps: any = {
    className,
    onClick,
  };

  if (href) {
    El = 'a';
    elProps.href = href;
  }

  return (
    <El {...elProps}>
      <div className={bar + (active ? barActive : '')} />
    </El>
  );
};

export default ClickLine;
