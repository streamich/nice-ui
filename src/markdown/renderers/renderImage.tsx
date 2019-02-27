import * as React from 'react';
import {RenderNode} from '../types';

const renderImage: RenderNode = (renderers, flat, idx) => {
  const node = flat.nodes[idx] as any;
  let {url, title} = node;

  if (node.type === 'imageReference') {
    const definition = flat.nodes[flat.definitions[node.identifier]] as any;
    url = definition.url;
    title = definition.title;
  }

  return <img src={url} title={title} alt={node.alt || title} />;
};

export default renderImage;
