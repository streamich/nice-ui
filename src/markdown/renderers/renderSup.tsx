import * as React from 'react';
import {RenderNode} from '../types';

const renderSup: RenderNode = (renderers, flat, idx, props, state) => (
  <sup>{renderers.children(renderers, flat, idx, props, state)}</sup>
);

export default renderSup;
