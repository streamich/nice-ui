import * as React from 'react';
import {RenderNode, IInlineCode} from '../types';

const renderInlineCode: RenderNode = (renderers, flat, idx) => {
  return <code className={'md-inlineCode'}>{flat.nodes[idx].value}</code>;
};

export default renderInlineCode;
