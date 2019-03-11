import {createElement as h} from 'react';
import {theme} from '../../theme';
import {TSize} from '../../types';

export interface ISpaceProps extends React.HTMLAttributes<any> {
  tag?: any;
  padt?: TSize;
  padr?: TSize;
  padb?: TSize;
  padl?: TSize;
  theme?: any;
}

export const Space: React.SFC<ISpaceProps> = (props) => {
  const {tag, className, padt, padr, padb, padl, style = {}, theme: th = theme, ...rest} = props;
  const newStyle: any = {
    paddingTop: `${th.space[Math.max(0, padt)]}px`,
    paddingBottom: `${th.space[Math.max(0, padb)]}px`,
    paddingLeft: `${th.space[Math.max(0, padl)]}px`,
    paddingRight: `${th.space[Math.max(0, padr)]}px`,
    ...style,
  };

  return h(tag, {
    ...props,
    style: newStyle,
  });
};

Space.defaultProps = {
  tag: 'div',
  padt: 3,
  padr: 0,
  padb: 0,
  padl: 0,
};
