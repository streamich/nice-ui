import * as React from 'react';
import {useStyles} from '../../css';
import {theme} from '../../theme';

const h = React.createElement;

function r(delay) {
  return {
    '-webkit-animation-delay': delay,
    'animation-delay': delay,
  };
}

const styles = {
  main: {
    w: '20px',
    h: '20px',
    ta: 'center',
    fs: '10px',
    d: 'inline-block',
    pointerEvents: 'none',
    '&>span': {
      bg: theme.grey[8],
      h: '100%',
      w: '4px',
      d: 'inline-block',
      mar: '0',
      animation: 'spinner-bars 1.2s infinite ease-in-out',
    },
    '&>.r2': r('-1.1s'),
    '&>.r3': r('-1.0s'),
    '&>.r4': r('-0.9s'),
    '&>.r5': r('-0.8s'),
    '@keyframes spinner-bars': {
      '0%, 40%, 100%': {
        transform: 'scaleY(0.4)',
      },
      '20%': {
        transform: 'scaleY(1.0)',
      },
    },
  },
};

const SpinnerBars = useStyles(styles, function SpinnerBars({color}, styles) {
  const style: any = {};

  if (color) {
    style.background = typeof color === 'string' ? color : theme.color2[1];
  }

  return h(
    'span',
    {className: styles.main},
    h('span', {className: 'r1', style}, ' '),
    h('span', {className: 'r2', style}, ' '),
    h('span', {className: 'r3', style}, ' '),
    h('span', {className: 'r4', style}, ' '),
    h('span', {className: 'r5', style}, ' '),
  );
});

export default SpinnerBars;
