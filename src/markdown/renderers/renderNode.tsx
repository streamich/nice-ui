import * as React from 'react';
import {RenderNode} from '../types';

const renderNode: RenderNode = (renderers, flat, idx, props, state) => {
  const node = flat.nodes[idx];
  const renderer = renderers[node.type] as RenderNode | undefined;

  if (renderer) {
    return renderer(renderers, flat, idx, props, state);
  } else {
    return <span data-node={node.type}>{node.value || '😃'}</span>;
  }
};

export default renderNode;
