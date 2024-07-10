import * as React from 'react';
import {rule} from 'nano-theme';

const h = React.createElement;

const className = rule({
  d: 'flex',
  justifyContent: 'space-between',
  w: '100%',
});

export interface SplitProps extends React.AllHTMLAttributes<any> {
  className?: string;
  as?: string;
  children: [React.ReactElement<any>, React.ReactElement<any>];
}

export const Split: React.FC<SplitProps> = ({as = 'div', children, ...rest}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!Array.isArray(children) || children.length !== 2) {
      throw new TypeError('<Split> children must be two <div> elements.');
    }
  }

  rest.className = (rest.className || '') + className;

  return h(as, rest, children[0], children[1]) as JSX.Element;
};
