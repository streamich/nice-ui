import * as React from 'react';
import {RenderNode} from '../types';

const renderEmphasis: RenderNode = (renderers, flat, idx, props, state) => (
  <em>{renderers.children(renderers, flat, idx, props, state)}</em>
);

export default renderEmphasis;
