import * as React from 'react';
import {RenderNode} from '../types';

const renderFootnoteReference: RenderNode = (renderers, flat, idx, props, state) => {
  const node = flat.nodes[idx] as any;
  const definition = flat.nodes[flat.footnotes[node.value]] as any;

  return <sup className={'md-footnote'}>[{definition.cnt}]</sup>;
};

export default renderFootnoteReference;
