import * as React from 'react';
import {RenderNode} from '../types';

const renderCode: RenderNode = (renderers, flat, idx) => {
  return <pre>{flat.nodes[idx].value}</pre>;
};

export default renderCode;
