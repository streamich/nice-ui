import * as React from 'react';
import {RenderNode} from '../types';
import renderRoot from './renderRoot';

const nodeToRenderer = {
  root: renderRoot,
};

const renderNode: RenderNode = (node, props, state) => {
  const renderer = nodeToRenderer[node.type];

  if (renderer) {
    return renderer(node, props, state);
  } else {
    return <div>unknown node</div>;
  }
};

export default renderNode;
