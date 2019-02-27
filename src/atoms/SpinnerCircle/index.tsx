import {createElement as h} from 'react';
import {useStyles} from '../../css';

const styles = {
  main: {
    d: 'inline-block',
    bdrad: '50%',
    animation: 'spinner-circle .3s infinite linear',
    w: '16px',
    h: '16px',
    bd: '1px solid rgba(0,0,0,.25)',
    bdl: '1px solid transparent',
    '@keyframes spinner-circle': {
      to: {
        transform: 'rotate(359.9deg)',
      },
    },
  },
};

export interface ISpinnerCircleProps {
  color?: string;
  size?: number;
}

const SpinnerCircle: React.SFC<ISpinnerCircleProps> = useStyles(styles, function SpinnerCircle(
  {size = 0, color},
  styles,
) {
  const style: any = {};

  if (color) {
    const bd = Math.min(3, Math.max(1, size));

    style.border = `${bd}px solid ${color}`;
    style.borderLeft = `${bd}px solid transparent`;
  }

  if (size) {
    style.width = `${16 + size * 8}px`;
    style.height = `${16 + size * 8}px`;
  }

  return h('div', {
    className: styles.main,
    style,
  });
});

export default SpinnerCircle;
