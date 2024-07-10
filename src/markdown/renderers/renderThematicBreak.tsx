import * as React from 'react';
import {RenderNode} from '../types';
import Hr from '../block/Hr';

const renderThematicBreak: RenderNode = (renderers, ast, idx) => {
  return <Hr idx={idx} />;
};

export default renderThematicBreak;
