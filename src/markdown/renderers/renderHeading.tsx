import * as React from 'react';
import {RenderNode, IHeading} from '../types';

const {createElement} = React;

const renderHeading: RenderNode = (renderers, node: IHeading, props, state) => {
  const tag = `h${node.depth}`;
  return createElement(tag, null, renderers.children(renderers, node.children, props, state));
};

export default renderHeading;
