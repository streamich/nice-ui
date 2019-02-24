import * as React from 'react';
import {RenderNode, ISup} from '../types';

const renderSup: RenderNode = (renderers, node: ISup, props, state) =>
  <sup>{renderers.children(renderers, node.children, props, state)}</sup>;

export default renderSup;
