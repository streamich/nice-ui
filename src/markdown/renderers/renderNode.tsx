import * as React from 'react';
import {RenderNode} from '../types';

const renderNode: RenderNode = (renderers, node, props, state) => {
  const renderer = renderers[node.type] as RenderNode | undefined;

  if (renderer) {
    return renderer(renderers, node, props, state);
  } else {
    return <span data-node={node.type}>{node.value || '😃'}</span>;
  }
};

export default renderNode;
