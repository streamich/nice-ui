import * as React from 'react';
import {rule} from '../../css';
import {CardLite} from '../CardLite';

const h = React.createElement;

const className =
  'fiAll' +
  rule({
    maxWidth: '400px',
  });

export const CardForm = ({children}) => {
  // children = Children.toArray(children).map((child, i) => i ? h(CardFormInput, null, child) : child);

  return h(CardLite, {className}, children);
};
