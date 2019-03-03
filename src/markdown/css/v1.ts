import {theme} from '../../theme';

export const css = () => {
  const hr = {
    bd: `1px solid ${theme.grey[9]}`,
    mar: '20px 0',
  };
  const blockquoteGreyIndex = 8;
  const blockquote = {
    pad: '0 0 0 2em',
    bdl: `5px solid ${theme.grey[blockquoteGreyIndex]}`,
    trs: 'border 0.2s',
    '&:hover': {
      bdl: `5px solid ${theme.grey[blockquoteGreyIndex - 2]}`,
    },
  };
  const p = {
    ...theme.font.sans,
    lh: 1.7,
    fz: '1.24em',
    col: 'rgba(0, 0, 0, 0.8)',
  };

  const headingScale = {};
  for (let h = 1; h <= 6; h++) {
    const inv = 6 - h;
    headingScale['h' + h] = {
      fz: 1.4 ** inv + 'em',
      letterSpacing: h - 5 + 'px',
      col: `rgba(0,0,0,${1 - h / 15})`,
      mar: `${h * 0.1 + 0.3}em 0`,
    };
  }

  const pre = {
    ...theme.font.mono,
    col: theme.grey[3],
    bdrad: '5px',
    trs: 'background 0.6s ease 0s',
    fz: '1em',
    lh: 1.3,
    ov: 'hidden',
    bg: '#fafafa',
    bd: '1px solid transparent',
    pad: `${theme.space[4]}px`,
    '&:hover': {
      bg: '#fff',
      bd: `1px solid ${theme.grey[9]}`,
    },
  };

  return {
    ...theme.font.sans,
    lh: 1.6,
    ww: 'break-word',
    'overflow-wrap': 'break-word',
    'word-break': 'break-word',
    '-webkit-hyphens': 'auto',
    hyphens: 'auto',
    hr,
    p,
    'h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,h6:first-child': {
      mart: 0,
    },
    'h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child': {
      marb: 0,
    },
    'h1,h2,h3,h4,h5,h6': {
      ...theme.font.serif,
      col: 'rgba(0, 0, 0, 0.9)',
      lh: 1.2,
    },
    ...headingScale,
    pre,
    '.md-inlineCode': {
      color: 'red',
    },
    blockquote,
  };
};
