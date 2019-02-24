import * as React from 'react';
import {RenderNode} from '../types';

const renderNode: RenderNode = (renderers, node, props, state) => {
  const renderer = renderers[node.type] as RenderNode | undefined;

  if (renderer) {
    return renderer(renderers, node, props, state);
  } else {
    console.log('node', node);
    return <div>unknown node</div>;
  }
};

export default renderNode;
