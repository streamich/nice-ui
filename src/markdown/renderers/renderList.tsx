import * as React from 'react';
import {RenderNode} from '../types';

const renderList: RenderNode = (renderers, flat, idx, props, state) => {
  return <ul>{renderers.children(renderers, flat, idx, props, state)}</ul>;
};

export default renderList;
