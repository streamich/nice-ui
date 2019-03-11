import * as React from 'react';
import {sheet} from '../../css';
import RunningBackground from '../RunningBackground';
import {theme} from '../../theme';

const h = React.createElement;
const glowColor = theme.color1[0];

const styles = sheet(
  {
    main: {
      h: '2px',
      pos: 'relative',
      bg: theme.color1[0],
      trs: 'width 0.3s',
      transitionTimingFunction: 'cubic-bezier(.08,.91,.26,1)',
    },
    glow: {
      pos: 'absolute',
      right: 0,
      w: '100px',
      h: '2px',
      boxShadow: `0 0 10px ${glowColor}, 0 0 5px ${glowColor}, 0 0 5px ${glowColor}`,
      transform: 'rotate(3deg) translate(0px, -4px)',
    },
  },
  'Progress',
);

const Progress: React.SFC<any> = ({children, glow, value = 0}) =>
  h(
    RunningBackground,
    null,
    h(
      'div',
      {
        className: styles.main,
        style: {
          width: Math.min(1, Math.max(0, value)) * 100 + '%',
        },
      },
      glow && h('div', {className: styles.glow}),
    ),
  );

export default Progress;
