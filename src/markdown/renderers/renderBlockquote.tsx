import * as React from 'react';
import {RenderNode, IBlockquote} from '../types';

const renderBlockquote: RenderNode = (renderers, node: IBlockquote, props, state) => {
  return <blockquote>{renderers.children(renderers, node.children, props, state)}</blockquote>;
};

export default renderBlockquote;
