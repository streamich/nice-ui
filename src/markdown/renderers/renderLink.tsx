import * as React from 'react';
import {RenderNode} from '../types';

const renderLink: RenderNode = (renderers, flat, idx, props, state) => {
  const node = flat.nodes[idx] as any;

  return (
    <a href={node.url} title={node.title}>
      {renderers.children(renderers, flat, idx, props, state)}
    </a>
  );
};

export default renderLink;
