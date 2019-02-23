import * as React from 'react';
import {rule} from '../../../../css';
import {theme} from '../../../../theme';

const h = React.createElement;
const className = rule(
  {
    pos: 'relative',
    d: 'flex',
    w: '32px',
    h: '32px',
    bdrad: '3px',
    cur: 'pointer',
    trs: 'all .3s',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    svg: {
      w: '32px',
      h: '32px',
      trs: 'transform .3s',
    },
    '&:hover': {
      bdrad: '0px',
      '.line-1': {
        stroke: theme.color6[0],
      },
      '.line-2': {
        'stroke-dashoffset': 0,
      },
    },
    '&:active': {
      '.line-1': {
        stroke: 'transparent',
      },
      '.line-2': {
        transform: 'rotate(90deg)',
        stroke: '#aaa',
        trs: 'all 0.3s',
      },
      svg: {
        transform: 'scale(.7)',
      },
    },
    '.close-icon': {
      w: '28px',
      h: '28px',
    },
    '.line-1': {
      fill: 'none',
      stroke: 'rgba(0,0,0,.3)',
      'stroke-width': '2px',
    },
    '.line-2': {
      fill: 'none',
      stroke: theme.grey[4],
      strokeWidth: '3px',
      strokeDasharray: 25,
      strokeDashoffset: 25,
      trs: 'all 0.2s',
      transformOrigin: '50% 50%',
    },
  },
  'IconIntClose',
);

export interface Props extends React.HtmlHTMLAttributes<any> {}

const Close: React.SFC<Props> = (props) => {
  return h(
    'span',
    {...props, className: (props.className || '') + className},
    h(
      'svg',
      null,
      h('path', {className: 'line-1', d: 'M12 12 L20 20 M20 12 L12 20'}),
      h('path', {className: 'line-2', d: 'M11 11 L21 21 M21 11 L11 21'}),
    ),
  );
};

export default Close;
