import * as React from 'react';
import {RenderNode} from '../types';

const renderInlineLink: RenderNode = (renderers, flat, idx) => {
  const node = flat.nodes[idx];
  const url = node.value;

  return <a href={url}>{url}</a>;
};

export default renderInlineLink;
