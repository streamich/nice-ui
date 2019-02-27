import * as React from 'react';
import {RenderNode} from '../types';

const renderParagraph: RenderNode = (renderers, flat, idx, props, state) => {
  return <p>{renderers.children(renderers, flat, idx, props, state)}</p>;
};

export default renderParagraph;
