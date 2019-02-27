import * as React from 'react';
import {RenderNode} from '../types';

const renderInlineMath: RenderNode = (renderers, flat, idx) => {
  const node = flat.nodes[idx] as any;
  return <code>{node.value}</code>;
};

export default renderInlineMath;
