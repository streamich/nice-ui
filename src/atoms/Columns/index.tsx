import * as React from 'react';
import {sheet} from '../../css';
import patchElementStyle from '../../util/patchElementStyle';

const h = React.createElement;

const styles = sheet({
  row: {
    d: 'flex',
  },
});

export interface IColumnsProps {
  equal?: boolean;
}

export const Columns: React.SFC<IColumnsProps> = ({children, equal}) => {
  const ch = React.Children.toArray(children);
  const last = ch.length - 1;
  const style: any = {
    boxShadow: 0,
  };

  if (equal) {
    style.flex = 1;
    style.width = `${100 / ch.length}%`;
  }

  if (last > 0) {
    ch[0] = patchElementStyle(ch[0], {
      ...style,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    });

    ch[last] = patchElementStyle(ch[last], {
      ...style,
      borderLeft: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    });
  }

  for (let i = 1; i < last; i++) {
    ch[i] = patchElementStyle(ch[i], {
      ...style,
      borderLeft: 0,
      borderRadius: 0,
    });
  }

  return h('div', {className: styles.row}, ch);
};
