import * as React from 'react';
import {RenderNode, IRoot} from '../types';

const renderRoot: RenderNode = (renderers, flat, idx, props, state) => {
  return <div>{renderers.children(renderers, flat, idx, props, state)}</div>;
};

export default renderRoot;
