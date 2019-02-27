import * as React from 'react';
import {RenderNode} from '../types';

const {createElement, Fragment} = React;

const renderChildren: RenderNode = (renderers, flat, idx, props, state) => {
  const node = flat.nodes[idx];
  if (!node || !node.children) return null;
  else if (node.children instanceof Array) {
    return createElement(
      Fragment,
      null,
      ...node.children.map((index) => {
        return renderers.node(renderers, flat, index, props, state);
      }),
    );
  } else return null; // Should never happen.
};

export default renderChildren;
