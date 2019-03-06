import * as React from 'react';
import {RenderNode} from '../types';

const renderListItem: RenderNode = (renderers, flat, idx, props, state) => {
  return <li>{renderers.children(renderers, flat, idx, props, state)}</li>;
};

export default renderListItem;
