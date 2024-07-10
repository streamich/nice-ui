import * as React from 'react';
import {rule} from 'nano-theme';

const className = rule({
  d: 'flex',
  w: '100%',
});

export interface FlexProps extends React.AllHTMLAttributes<any> {
  className?: string;
  as?: string;
  children: React.ReactNode[];
}

export const Flex: React.FC<FlexProps> = ({as = 'div', children, ...rest}) => {
  rest.className = (rest.className || '') + className;

  return React.createElement(as, rest, ...children);
};
