import * as React from 'react';
import {RenderNode} from '../types';

const renderIcon: RenderNode = (renderers, flat, idx) => {
  const node = flat.nodes[idx] as any;
  return <code>:{node.emoji}:</code>;
};

export default renderIcon;
