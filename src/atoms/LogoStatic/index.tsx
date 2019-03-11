import {createElement as h} from 'react';
import {rule} from '../../css';
import {theme} from '../../theme';

const defaultSize = 48;

const className = rule(
  {
    col: theme.black,
    ff: theme.font.sansBlack.ff,
    fw: theme.font.sansBlack.fw,
    h: defaultSize + 'px',
    w: defaultSize + 'px',
    letterSpacing: `-${defaultSize / 6}px`,
    lh: defaultSize + 'px',
    fz: (defaultSize * 2.85) / 3 + 'px',
  },
  'LogoStatic',
);

export const LogoStatic: any = ({size = 48, inverted}) => {
  let style = null;

  if (size !== defaultSize) {
    style = {
      height: size,
      width: size,
      letterSpacing: `-${size / 6}px`,
      lineHeight: size + 'px',
      fontSize: (size * 2.85) / 3 + 'px',
    };
  }

  return h(
    'div',
    {
      className,
      style,
    },
    h('span', {style: {color: theme.grey[inverted ? 3 : 1]}}, 'P'),
    h('span', {style: {color: theme.grey[inverted ? 4 : 4]}}, '4'),
  );
};
