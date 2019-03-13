import * as React from 'react';
import {RenderNode} from '../types';

const renderLink: RenderNode = (renderers, flat, idx, props, state) => {
  const node = flat.nodes[idx] as any;
  let {url, title} = node;

  if (node.type === 'linkReference') {
    const definition = flat.nodes[flat.definitions[node.identifier]] as any;
    if (definition) {
      url = definition.url;
      title = definition.title;
    }
  }

  return (
    <a href={url} title={title}>
      {renderers.children(renderers, flat, idx, props, state)}
    </a>
  );
};

export default renderLink;
