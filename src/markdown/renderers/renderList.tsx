import * as React from 'react';
import {RenderNode} from '../types';

const renderList: RenderNode = (renderers, flat, idx, props, state) => {
  const node = flat.nodes[idx] as any;
  const tag = node.ordered ? 'ol' : 'ul';
  return React.createElement(tag, null, renderers.children(renderers, flat, idx, props, state));
};

export default renderList;
