import {createElement as h} from 'react';
import {useStyles} from '../../css';
import {theme} from '../../theme';

const keyframes = {
  '0%': {
    ransform: 'perspective(120px) rotateX(0deg) rotateY(0deg)',
  },
  '50%': {
    transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)',
  },
  '100%': {
    transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)',
  },
};

const styles = {
  main: {
    w: '40px',
    h: '40px',
    bg: theme.color2[1],
    mar: '40px auto',
    animation: 'spinner-rotate-plane 1.2s infinite ease-in-out',
    '@keyframes spinner-rotate-plane': keyframes,
  },
};

const SpinnerSquare = useStyles(styles, function SpinnerSquare(props, styles) {
  return h('div', {...props, className: styles.main});
});

export default SpinnerSquare;
