import * as React from 'react';
import {RenderNode, ICode} from '../types';

const renderCode: RenderNode = (renderers, node: ICode, props, state) => {
  return <pre>{node.value}</pre>;
};

export default renderCode;
