import * as React from 'react';
import {RenderNode, ISub} from '../types';

const renderSub: RenderNode = (renderers, node: ISub, props, state) =>
  <sub>{renderers.children(renderers, node.children, props, state)}</sub>;

export default renderSub;
