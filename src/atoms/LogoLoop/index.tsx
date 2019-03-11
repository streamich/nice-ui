import * as React from 'react';
import {rule} from '../../css';
import {theme} from '../../theme';

const h = React.createElement;
const size = 48;

const className = rule(
  {
    d: 'inline-block',
    cur: 'pointer',
    bd: 0,
    pos: 'relative',
    ff: theme.font.sansBlack.ff,
    fw: theme.font.sansBlack.fw,
    ta: 'center',
    pointerEvents: 'none',
    userSelect: 'none',
    '&>span': {
      pos: 'absolute',
      top: 0,
      willChage: 'left',
      userSelect: 'none',
    },
    '&>.a': {
      zIndex: 1,
      left: '2px',
      col: theme.black,
      animation: 'logo-loop-a 1s',
      animationIterationCount: 'infinite',
    },
    '&>.b': {
      zIndex: 2,
      left: '20px',
      col: theme.silver,
      animation: 'logo-loop-b 1s',
      animationIterationCount: 'infinite',
    },
    '@keyframes logo-loop-a': {
      '25%': {
        zIndex: 2,
        left: '-5px',
      },
      '50%': {
        zIndex: 2,
        left: '2px',
      },
      '75%': {
        zIndex: 1,
        left: '-5px',
      },
    },
    '@keyframes logo-loop-b': {
      '25%': {
        zIndex: 1,
        left: '27px',
      },
      '50%': {
        zIndex: 1,
        left: '20px',
      },
      '75%': {
        zIndex: 2,
        left: '27px',
      },
    },
  },
  'LogoLoop',
);

const element = h(
  'span',
  {
    className,
    style: {
      height: size,
      width: size,
      lineHeight: size + 'px',
      fontSize: (size * 2.85) / 3 + 'px',
    },
  },
  h('span', {className: 'a'}, 'P'),
  h('span', {className: 'b'}, '4'),
);

export const LogoLoop = () => element as JSX.Element;
