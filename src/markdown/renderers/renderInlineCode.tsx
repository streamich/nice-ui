import * as React from 'react';
import {RenderNode, IInlineCode} from '../types';

const renderInlineCode: RenderNode = (renderers, node: IInlineCode, props, state) => {
  return <code>{node.value}</code>;
};

export default renderInlineCode;
