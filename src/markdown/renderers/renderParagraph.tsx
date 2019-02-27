import * as React from 'react';
import {RenderNode} from '../types';

const renderParagraph: RenderNode = (renderers, flat, idx, props, state) => {
  // const node = flat.nodes[idx];
  // const isSingleInlineLinkParagraph = (node.children.length === 1) && (flat.nodes[node.children[0]].type === 'inlineLink');

  return <p>{renderers.children(renderers, flat, idx, props, state)}</p>;
};

export default renderParagraph;
