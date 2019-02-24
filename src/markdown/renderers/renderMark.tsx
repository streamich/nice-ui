import * as React from 'react';
import {RenderNode, IMark} from '../types';

const renderMark: RenderNode = (renderers, node: IMark, props, state) => (
  <mark>{renderers.children(renderers, node.children, props, state)}</mark>
);

export default renderMark;
