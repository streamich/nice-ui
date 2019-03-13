import {Renderers} from '../types';
import renderBlockquote from './renderBlockquote';
import renderBreak from './renderBreak';
import renderChildren from './renderChildren';
import renderCode from './renderCode';
import renderDelete from './renderDelete';
import renderEmphasis from './renderEmphasis';
import renderFootnoteDefinition from './renderFootnoteDefinition';
import renderFootnoteReference from './renderFootnoteReference';
import renderFootnotes from './renderFootnotes';
import renderHeading from './renderHeading';
import renderIcon from './renderIcon';
import renderImage from './renderImage';
import renderInlineCode from './renderInlineCode';
import renderInlineMath from './renderInlineMath';
import renderInlineLink from './renderInlineLink';
import renderMark from './renderMark';
import renderNode from './renderNode';
import renderLink from './renderLink';
import renderList from './renderList';
import renderListItem from './renderListItem';
import renderParagraph from './renderParagraph';
import renderRoot from './renderRoot';
import renderStrong from './renderStrong';
import renderSub from './renderSub';
import renderSup from './renderSup';
import renderText from './renderText';
import renderThematicBreak from './renderThematicBreak';
import renderUnderline from './renderUnderline';

export const renderers: Renderers = {
  blockquote: renderBlockquote,
  break: renderBreak,
  children: renderChildren,
  code: renderCode,
  delete: renderDelete,
  emphasis: renderEmphasis,
  footnoteDefinition: renderFootnoteDefinition,
  footnoteReference: renderFootnoteReference,
  footnotes: renderFootnotes,
  heading: renderHeading,
  icon: renderIcon,
  image: renderImage,
  imageReference: renderImage,
  inlineCode: renderInlineCode,
  inlineMath: renderInlineMath,
  inlineLink: renderInlineLink,
  mark: renderMark,
  node: renderNode,
  link: renderLink,
  linkReference: renderLink,
  list: renderList,
  listItem: renderListItem,
  paragraph: renderParagraph,
  root: renderRoot,
  strong: renderStrong,
  sub: renderSub,
  sup: renderSup,
  text: renderText,
  thematicBreak: renderThematicBreak,
  underline: renderUnderline,
};
