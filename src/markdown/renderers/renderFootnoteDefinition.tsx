import * as React from 'react';
import {RenderNode} from '../types';

const renderFootnoteDefinition: RenderNode = (renderers, flat, idx, props, state) => {
  const node = flat.nodes[idx] as any;
  if (!node) return null;

  return (
    <tr>
      <td>{node.cnt}</td>
      <td>{renderers.children(renderers, flat, idx, props, state)}</td>
    </tr>
  );
};

export default renderFootnoteDefinition;
