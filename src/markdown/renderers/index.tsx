import {Renderers} from '../types';
import renderNode from './renderNode';
import renderRoot from './renderRoot';
import renderChildren from './renderChildren';

export const renderers: Renderers = {
  renderNode,
  renderChildren,
  renderRoot,
};
