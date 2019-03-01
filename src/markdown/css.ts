import {theme} from '../theme';

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

  return {
    hr,
    lh: 1.6,
    ww: 'break-word',
    'overflow-wrap': 'break-word',
    'word-break': 'break-word',
    '-webkit-hyphens': 'auto',
    hyphens: 'auto',
    '.md-inlineCode': {
      color: 'red',
    },
    blockquote,
  };
};
