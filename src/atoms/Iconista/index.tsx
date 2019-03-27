import Svg from 'iconista';
import {Icon} from 'iconista/lib/types';
import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';

const whiteClass = rule({
  w: '16px',
  h: '16px',
  fill: theme.grey[4],
});

export type IconistaProps = Icon & {};

const Iconista: React.FC<IconistaProps> = (props) => {
  return <Svg className={whiteClass} {...props} />;
};

export default Iconista;
