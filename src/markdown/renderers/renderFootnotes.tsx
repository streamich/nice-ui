import * as React from 'react';
import {RenderNode} from '../types';

const renderFootnotes: RenderNode = (renderers, flat, idx, props, state) => {
  if (!flat.footnoteOrder.length) return null;

  return (
    <table>
      <tbody>{flat.footnoteOrder.map((idx) => renderers.footnoteDefinition(renderers, flat, idx, props, state))}</tbody>
    </table>
  );
};

export default renderFootnotes;
