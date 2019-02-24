import * as React from 'react';
import {RenderNode, IRoot} from '../types';

const renderRoot: RenderNode = (renderers, node: IRoot, props, state) => {
  return <div>{renderers.renderChildren(renderers, node.children as any[], props, state)}</div>;
};

export default renderRoot;
