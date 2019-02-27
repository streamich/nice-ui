import * as React from 'react';
import {RenderNode} from '../types';

const renderBlockquote: RenderNode = (renderers, flat, idx, props, state) => {
  return <blockquote>{renderers.children(renderers, flat, idx, props, state)}</blockquote>;
};

export default renderBlockquote;
