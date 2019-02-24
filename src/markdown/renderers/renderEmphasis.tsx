import * as React from 'react';
import {RenderNode, IEmphasis} from '../types';

const renderEmphasis: RenderNode = (renderers, node: IEmphasis, props, state) => (
  <em>{renderers.children(renderers, node.children, props, state)}</em>
);

export default renderEmphasis;
