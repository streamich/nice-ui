import {rule} from 'p4-css';
import {theme} from '../../theme';

const borderRadius = 4;
const width = 256;
const height = 128;

const block = rule({
  pos: 'relative',
  w: width + 'px',
  h: height + 'px',
  bdrad: borderRadius + 'px',
  // boxShadow: '0 0 3px rgba(0,0,0,.15), 0 2px 6px rgba(0,0,0,.05), 0 5px 20px rgba(0,0,0,.02)',
  cur: 'pointer',
  userSelect: 'none',
  trs: 'transform .2s, box-shadow .2s',
  '&:hover': {
    // transform: 'scale(.97)',
    boxShadow: 'inset 0 0 90px rgba(0,0,0,.2)',
  },
  '&:active': {
    transform: 'scale(.95)',
    boxShadow: 'inset 0 0 90px rgba(0,0,0,.01)',
  },
});

export const classes = {
  block,
  letters: rule({
    ...theme.font.serifBold,
    fz: theme.fontSize[6] + 'px',
    pos: 'absolute',
    col: '#fff',
    top: theme.space[4] + 'px',
    left: theme.space[4] + 'px',
    // trs: 'left .1s',
    w: '70px',
    // [`.${block.trim()}:hover &`]: {
    // textAlign: 'right',
    // left: width - 70 - theme.space[4] + 'px',
    // },
  }),
  texts: rule({
    ...theme.font.sansLite,
    col: '#fff',
    fz: theme.fontSize[3] + 'px',
    pos: 'absolute',
    h: 3 * theme.fontSize[3] + 'px',
    w: '100%',
    left: 0,
    bottom: 0,
    bxz: 'border-box',
    pad: `${theme.space[3]}px ${theme.space[4]}px`,
    bdrad: `0 0 ${borderRadius}px ${borderRadius}px`,
    trs: 'height .1s, opacity .1s',
    op: 0.5,
    [`.${block.trim()}:hover &`]: {
      h: 3 * theme.fontSize[3] + 'px',
      op: 1,
    },
  }),
  name: rule({
    w: '100%',
    whiteSpace: 'nowrap',
    ov: 'hidden',
    textOverflow: 'ellipsis',
    lh: '1.3em',
  }),
};
