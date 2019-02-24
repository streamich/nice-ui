import {Renderers} from '../types';
import renderNode from './renderNode';
import renderRoot from './renderRoot';
import renderChildren from './renderChildren';
import renderParagraph from './renderParagraph';
import renderText from './renderText';
import renderEmphasis from './renderEmphasis';
import renderStrong from './renderStrong';
import renderHeading from './renderHeading';
import renderBlockquote from './renderBlockquote';

export const renderers: Renderers = {
  blockquote: renderBlockquote,
  children: renderChildren,
  emphasis: renderEmphasis,
  heading: renderHeading,
  node: renderNode,
  paragraph: renderParagraph,
  root: renderRoot,
  strong: renderStrong,
  text: renderText,
};
