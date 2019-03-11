import * as React from 'react';
import {rule} from 'p4-css';

const className = rule({
  d: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  '&> *': {
    flexGrow: 1,
  },
});

export interface Props extends React.HTMLAttributes<any> {
  as?: string;
  left?: number; // Left width.
  right?: number; // Right width.
}

const FixedColumn: React.SFC<Props> = (props) => {
  const {as = 'div', left, right, children, ...rest} = props;
  const childrenArray = React.Children.toArray(children) as [React.ReactElement<any>, React.ReactElement<any>];
  const As = as as any;

  if (process.env.NODE_ENV !== 'production') {
    if (!Array.isArray(childrenArray) || childrenArray.length !== 2) {
      throw new TypeError('Children of <FixedColumn> must be exactly two React.ReactElement.');
    }
  }

  let [leftElement, rightElement] = childrenArray;

  if (left) {
    leftElement = React.cloneElement(leftElement, {
      ...leftElement.props,
      style: {
        ...(leftElement.props.style || {}),
        width: left,
        flex: `0 0 ${left}px`,
      },
    });
  } else if (right) {
    rightElement = React.cloneElement(rightElement, {
      ...rightElement.props,
      style: {
        ...(rightElement.props.style || {}),
        width: right,
        flex: `0 0 ${right}px`,
      },
    });
  } else {
    throw new TypeError('Either left or right prop of <FixedColumn> has to be specified.');
  }

  return (
    <As {...rest} className={(rest.className || '') + className}>
      {leftElement}
      {rightElement}
    </As>
  );
};

export default FixedColumn;
