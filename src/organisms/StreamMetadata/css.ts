import {rule} from 'p4-css';
import {theme} from '../../theme';

export const classes = {
  block: rule({
    d: 'flex',
    alignItems: 'center',
    height: '60px',
    maxW: '1100px',
    mar: '0 auto',
  }),
  streamAvatar: rule({
    minW: '200px',
    maxW: '300px',
  }),
  by: rule({
    ...theme.font.slabLite,
    fontSize: '11px',
    col: theme.grey[4],
    pad: '0 6px 0 20px',
  }),
  creatorAvatar: rule({
    maxW: '300px',
  }),
};
