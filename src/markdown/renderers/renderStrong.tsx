import * as React from 'react';
import {RenderNode, IStrong} from '../types';

const renderStrong: RenderNode = (renderers, node: IStrong, props, state) => (
  <strong>{renderers.children(renderers, node.children, props, state)}</strong>
);

export default renderStrong;
