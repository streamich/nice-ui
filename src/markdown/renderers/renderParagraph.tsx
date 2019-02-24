import * as React from 'react';
import {RenderNode} from '../types';

const renderParagraph: RenderNode = (renderers, node, props, state) => {
  return <p>{renderers.children(renderers, node.children, props, state)}</p>;
};

export default renderParagraph;
