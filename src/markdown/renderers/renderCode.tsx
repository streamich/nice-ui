import * as React from 'react';
import {RenderNode} from '../types';
import {ICode} from 'md-mdast/lib/types';

const renderCode: RenderNode = (renderers, flat, idx) => {
  const node = flat.nodes[idx] as ICode;
  return (
    <pre
      className={
        'md-code' + (node.lang ? ` md-code-${node.lang}` : '') + (node.lang !== undefined ? ' md-code-lang' : '')
      }
    >
      {node.value}
    </pre>
  );
};

export default renderCode;
