import * as React from 'react';
import {RenderNode, IBreak} from '../types';

const renderBreak: RenderNode = (renderers, node: IBreak, props, state) => {
  return <br />;
};

export default renderBreak;
