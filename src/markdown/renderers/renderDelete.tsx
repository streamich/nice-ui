import * as React from 'react';
import {RenderNode, IDelete} from '../types';

const renderDelete: RenderNode = (renderers, node: IDelete, props, state) => (
  <del>{renderers.children(renderers, node.children, props, state)}</del>
);

export default renderDelete;
