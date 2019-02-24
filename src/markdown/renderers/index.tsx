import {Renderers} from '../types';
import renderBlockquote from './renderBlockquote';
import renderBreak from './renderBreak';
import renderChildren from './renderChildren';
import renderCode from './renderCode';
import renderDelete from './renderDelete';
import renderEmphasis from './renderEmphasis';
import renderHeading from './renderHeading';
import renderInlineCode from './renderInlineCode';
import renderMark from './renderMark';
import renderNode from './renderNode';
import renderParagraph from './renderParagraph';
import renderRoot from './renderRoot';
import renderStrong from './renderStrong';
import renderSub from './renderSub';
import renderSup from './renderSup';
import renderText from './renderText';

export const renderers: Renderers = {
  blockquote: renderBlockquote,
  break: renderBreak,
  children: renderChildren,
  code: renderCode,
  delete: renderDelete,
  emphasis: renderEmphasis,
  heading: renderHeading,
  inlineCode: renderInlineCode,
  mark: renderMark,
  node: renderNode,
  paragraph: renderParagraph,
  root: renderRoot,
  strong: renderStrong,
  sub: renderSub,
  sup: renderSup,
  text: renderText,
};
