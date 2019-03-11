import * as React from 'react';
import {rule} from 'p4-css';
import {SizeSensor} from 'libreact/lib/SizeSensor';
import {theme} from '../../theme';
import {mapLineBound} from '../../util/map';
import {b1, b2} from '../../css';

const {space} = theme;
const className = rule({
  mar: '0 auto',
  pad: `${space[3]}px ${space[7]}px`,
  bxz: 'border-box',
  maxW: '1550px',
});
const classNameNoVertical = rule({
  padt: 0,
  padb: 0,
});

const createInterpolator = mapLineBound(300, 900);
const getVerticalPadding = createInterpolator(space[0], space[3]);

export interface Props extends React.HTMLAttributes<any> {
  width: number;
  height: number;
  onlyHorizontal?: boolean;
  children:
    | React.ReactElement<any>
    | React.ReactNodeArray
    | ((props: {width: number; height: number}) => React.ReactElement<any>);
}

export const SizerStreamPure: React.SFC<Props> = ({width, height, onlyHorizontal, children, ...rest}) => {
  const style: React.CSSProperties = {};

  if (width < b1) {
    const paddingHorizontal = space[3];
    const paddingVetical = onlyHorizontal ? 0 : getVerticalPadding(width);
    style.padding = `${paddingVetical}px ${paddingHorizontal}px`;
  } else if (width < b2) {
    const paddingHorizontal = space[4];
    const paddingVetical = onlyHorizontal ? 0 : getVerticalPadding(width);
    style.padding = `${paddingVetical}px ${paddingHorizontal}px`;
  }

  return (
    <div
      {...rest}
      style={style}
      className={(rest.className || '') + className + (onlyHorizontal ? classNameNoVertical : '')}
    >
      {typeof children === 'function' ? children({width, height}) : children}
    </div>
  );
};

const SizerStream: React.SFC<Pick<Props, 'children'>> = ({children}) => (
  <SizeSensor>{(state) => SizerStreamPure({...state, children})}</SizeSensor>
);

export default SizerStream;
