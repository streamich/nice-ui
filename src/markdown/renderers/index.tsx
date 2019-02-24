import {Renderers} from '../types';
import renderNode from './renderNode';
import renderRoot from './renderRoot';
import renderChildren from './renderChildren';
import renderParagraph from './renderParagraph';
import renderText from './renderText';
import renderEmphasis from './renderEmphasis';
import renderStrong from './renderStrong';

export const renderers: Renderers = {
  node: renderNode,
  children: renderChildren,
  root: renderRoot,
  paragraph: renderParagraph,
  text: renderText,
  emphasis: renderEmphasis,
  strong: renderStrong,
};
