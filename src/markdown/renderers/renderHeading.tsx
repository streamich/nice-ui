import * as React from 'react';
import {RenderNode, IHeading} from '../types';

const {createElement} = React;

const renderHeading: RenderNode = (renderers, flat, idx, props, state) => {
  const node = flat.nodes[idx];
  const tag = `h${(node as any).depth}`;
  return createElement(tag, null, renderers.children(renderers, flat, idx, props, state));
};

export default renderHeading;
