import * as React from 'react';
import {RenderChildren} from '../types';

const {createElement, Fragment} = React;

const renderChildren: RenderChildren = (renderers, children, props, state) => {
  if (!children) return null;
  else if (children instanceof Array) {
    return createElement(
      Fragment,
      null,
      ...children.map((node) => {
        return renderers.node(renderers, node, props, state);
      }),
    );
  } else {
    return renderers.node(renderers, children, props, state);
  }
};

export default renderChildren;
