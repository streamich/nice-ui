import * as React from 'react';
import {sheet} from '../../css';
import {theme} from '../../theme';
import patchElementStyle from '../../util/patchElementStyle';
import {TSize} from '../../types';

const h = React.createElement;
const styles = sheet({
  frame: {
    boxSizing: 'border-box',
    flex: 1,
  },
});

export interface IFrameProps extends React.HTMLAttributes<any> {
  tag?: any;
  bg?: TSize;
  bd?: TSize;
  pad?: TSize;
  mar?: TSize;
  shadow?: TSize;
  theme?: any;
}

export const Frame: React.SFC<IFrameProps> = (props) => {
  const {tag, className, bg, bd, pad, mar, shadow, style = {}, theme: th = theme, ...rest} = props;
  const padding = th.space[Math.max(0, pad + 3)];
  const borderColor = th.grey[th.grey.length - 3 - bd];
  const newStyle: any = {
    borderRadius: `${pad + 2}px`,
    padding: `${padding}px`,
    margin: `${th.space[Math.max(0, mar)]}px`,
    border: `1px solid ${borderColor}`,
    ...style,
  };

  if (shadow > 0) {
    let boxShadow = '';

    for (let i = 1; i <= shadow; i++) {
      boxShadow += `0 ${i + 1}px ${3 * (i + 1)}px rgba(0,0,0,${0.03 * (i + 1)})${i < shadow ? ',' : ''}`;
    }

    newStyle.boxShadow = boxShadow;
  }

  if (bg > 0) {
    newStyle.background = th.grey[th.grey.length - bg];
  }

  // Style separator <hr> lines appropriately.
  const ch = React.Children.toArray(props.children);

  for (let i = 0; i < ch.length; i++) {
    const child = ch[i];

    if ((child as any).type === 'hr') {
      ch[i] = patchElementStyle(ch[i], {
        border: 0,
        borderTop: `1px solid ${borderColor}`,
        margin: `${Math.max(theme.space[2], padding)}px -${padding}px`,
      });
    }
  }

  return h(
    tag,
    {
      ...props,
      className: (className || '') + styles.frame,
      style: newStyle,
    },
    ...ch,
  );
};

Frame.defaultProps = {
  tag: 'div',
  bg: 0,
  bd: 0,
  pad: 0,
  mar: 0,
  shadow: 0,
};
