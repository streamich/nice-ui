import {Renderers} from '../types';
import renderBlockquote from './renderBlockquote';
import renderBreak from './renderBreak';
import renderChildren from './renderChildren';
import renderCode from './renderCode';
import renderEmphasis from './renderEmphasis';
import renderHeading from './renderHeading';
import renderInlineCode from './renderInlineCode';
import renderNode from './renderNode';
import renderParagraph from './renderParagraph';
import renderRoot from './renderRoot';
import renderStrong from './renderStrong';
import renderText from './renderText';

export const renderers: Renderers = {
  blockquote: renderBlockquote,
  break: renderBreak,
  children: renderChildren,
  code: renderCode,
  emphasis: renderEmphasis,
  heading: renderHeading,
  inlineCode: renderInlineCode,
  node: renderNode,
  paragraph: renderParagraph,
  root: renderRoot,
  strong: renderStrong,
  text: renderText,
};
