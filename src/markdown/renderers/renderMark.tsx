import * as React from 'react';
import {RenderNode} from '../types';

const renderMark: RenderNode = (renderers, flat, idx, props, state) => (
  <mark>{renderers.children(renderers, flat, idx, props, state)}</mark>
);

export default renderMark;
