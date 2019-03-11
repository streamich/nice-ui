import * as React from 'react';
import {sheet} from '../../css';
import {theme} from '../../theme';
import CloseIcon from '../../atoms/icons/interactive/Close';

const h = React.createElement;
const padding = 24;
const borderColor = theme.snow[2];

const styles = sheet(
  {
    card: {
      bd: `1px solid ${borderColor}`,
      bdrad: '3px',
      pad: padding + 'px',
      '&>hr': {
        h: '1px',
        mar: `${padding}px -${padding}px`,
        bg: borderColor,
        bd: 0,
      },
    },
    space: {
      h: '12px',
    },
    title: {
      pos: 'relative',
      mar: `-${padding}px -${padding}px ${padding}px`,
      pad: `${padding * 0.75}px ${padding}px`,
      bdb: `1px solid ${borderColor}`,
      h: `${padding * 0.8}px`,
      lh: `${padding * 0.8}px`,
      fz: `${padding * 0.6}px`,
      ff: theme.font.sansLite.ff,
      fw: theme.font.sansLite.fw,
      col: theme.slate,
    },
    close: {
      pos: 'absolute',
      top: 0,
      right: 0,
      lh: `${padding * (1.5 + 0.8) + 6}px`,
      h: `${padding * (1.5 + 0.8)}px`,
      w: `${padding * (1.5 + 0.8)}px`,
      ta: 'center',
      cur: 'pointer',
      op: 0.5,
      '&:hover': {
        op: 1,
      },
    },
  },
  'CardLite',
);

export const CardLiteTitle = ({children, onClose}: any) => {
  let closeElement = null;

  if (onClose) {
    closeElement = h(
      'div',
      {className: styles.close, onClick: onClose},
      h(CloseIcon, {style: {width: 55, height: 55, background: 'transparent'}}),
    );
  }

  return h('div', {className: styles.title}, children, closeElement);
};

export const CardLiteSpace = () => h('div', {className: styles.space});

export const CardLite = (props) => {
  return h('div', {
    ...props,
    className: (props.className || '') + styles.card,
  });
};
