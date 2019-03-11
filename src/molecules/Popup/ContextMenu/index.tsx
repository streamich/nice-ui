import * as React from 'react';
import {sheet} from '../../../css';
import {theme} from '../../../theme';

export {ContextPane} from './ContextPane';

const h = React.createElement;

const styles = sheet(
  {
    item: {
      cur: 'pointer',
      bdb: '1px solid transparent',
      ff: theme.font.sans.ff,
      fw: theme.font.sans.fw,
      fz: '13px',
      pad: '7px 20px',
      col: theme.grey[3],
      '&:hover': {
        col: '#07F',
        bg: theme.grey[10],
      },
    },
    big: {
      cur: 'pointer',
      bdb: '1px solid rgba(0,0,0,.07)',
      ff: theme.font.ui.ff,
      fw: theme.font.ui.fw,
      fz: '15px',
      pad: '12px 20px',
      col: theme.slate,
      bg: 'transparent',
      whiteSpace: 'nowrap',
      '&:hover': {
        bdb: '1px solid transparent',
        col: '#fff',
        bg: '#07F',
      },
    },
    sep: {
      h: '1px',
      mar: '5px 0',
      w: '100%',
    },
  },
  'ContextMenu',
);

export interface ContextItemProps extends React.HTMLAttributes<any> {
  big?: boolean;
}
export const ContextItem: React.SFC<ContextItemProps> = ({big, className, ...rest}) => {
  return <div {...rest} className={(className || '') + (big ? styles.big : styles.item)} />;
};

export function ContextSep({line}: any) {
  const props: any = {
    className: styles.sep,
  };

  if (line) {
    props.style = {
      background: 'rgba(0,0,0,.07)',
    };
  }

  return h('div', props);
}
