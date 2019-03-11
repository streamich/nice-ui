import * as React from 'react';
import {rule} from '../../css';

const h = React.createElement;

const className = rule({
  d: 'flex',
  justifyContent: 'space-between',
});

export interface ISplitProps {
  children: [React.ReactElement<any>, React.ReactElement<any>];
}

export const Split = ({children, ...rest}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!Array.isArray(children) || children.length !== 2) {
      throw new TypeError('<Split> children must be two <div> elements.');
    }
  }

  rest.className = (rest.className || '') + className;

  return h('div', rest, children[0], children[1]) as JSX.Element;
};
