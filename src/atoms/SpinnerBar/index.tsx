import {createElement as h} from 'react';
import {useStyles} from '../../css';
import {theme} from '../../theme';
import {TSize} from '../../types';

export interface ISpinnerBarProps {
  color?: string;
  size?: TSize;
}

const SpinnerBar: React.SFC<ISpinnerBarProps> = useStyles(
  {
    block: {
      w: `${theme.space[1]}px`,
      h: `${theme.space[3]}px`,
      bg: theme.color1[1],
      mar: `${theme.space[3]}px auto`,
      animation: 'spinner-rotate-bar 1.2s infinite linear',
      '@keyframes spinner-rotate-bar': {
        to: {
          transform: 'rotate(359.9deg)',
        },
      },
    },
  },
  function SpinnerBar({size, color}, styles) {
    const style: any = {};

    if (size) {
      style.width = theme.space[1 + size];
      style.height = theme.space[3 + size];
    }

    if (color) {
      style.background = color;
    }

    return h('div', {
      className: styles.block,
      style,
    });
  },
);

export default SpinnerBar;
