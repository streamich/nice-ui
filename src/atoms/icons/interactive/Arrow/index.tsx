import * as React from 'react';
import {drule} from '../../../../css';
import {theme} from '../../../../theme';

const h = React.createElement;
const style = drule({
  trs: 'transform .3s',
  path: {
    fill: 'none',
    stroke: theme.grey[4],
    strokeWidth: '2px',
    strokeLinecap: 'round',
  },
});

export interface IArrowProps {
  direction?: 'u' | 'r' | 'd' | 'l';
}

const Arrow: React.SFC<IArrowProps> = ({direction}) => {
  const css: any = {};

  if (direction !== 'u') {
    let deg = 90;

    switch (direction) {
      case 'd':
        deg = 180;
        break;
      case 'l':
        deg = 270;
        break;
    }

    css.transform = `rotate(${deg}deg)`;
  }

  const className = style(css);

  return h(
    'svg',
    {className, viewBox: '0 0 32 32'},
    h(
      'path',
      {d: 'M10 18 L16 12 L22 18'},
      h('animate', {
        attributeName: 'd',
        dur: '300ms',
      }),
    ),
  );
};

export default Arrow;
