import * as React from 'react';
import {RenderNode} from '../types';

const renderNode: RenderNode = (renderers, flat, idx, props, state) => {
  const node = flat.nodes[idx];
  const renderer = renderers[node.type] as RenderNode | undefined;

  if (renderer) {
    return renderer(renderers, flat, idx, props, state);
  } else {
    // tslint:disable-next-line
    console.log('no renderer for node:', node.type);
    return <span data-node={node.type}>{node.value || '😃'}</span>;
  }
};

export default renderNode;
