import * as React from 'react';
import {RenderNode} from '../types';

const renderImage: RenderNode = (renderers, flat, idx) => {
  const node = flat.nodes[idx] as any;

  return <img src={node.url} title={node.title} alt={node.alt || node.title} />;
};

export default renderImage;
