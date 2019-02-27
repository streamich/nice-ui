import {IRoot, TBlockToken, TInlineToken} from 'md-mdast/lib/types';
import {Flat} from 'mdast-flat/lib/types';

export * from 'md-mdast/lib/types';

export type MdastNode = IRoot | TBlockToken | TInlineToken;
export interface Renderers {
  blockquote: RenderNode;
  break: RenderNode;
  children: RenderNode;
  code: RenderNode;
  delete: RenderNode;
  emphasis: RenderNode;
  footnoteReference: RenderNode;
  heading: RenderNode;
  icon: RenderNode;
  image: RenderNode;
  imageReference: RenderNode;
  inlineCode: RenderNode;
  inlineMath: RenderNode;
  mark: RenderNode;
  node: RenderNode;
  link: RenderNode;
  linkReference: RenderNode;
  paragraph: RenderNode;
  root: RenderNode;
  strong: RenderNode;
  sup: RenderNode;
  sub: RenderNode;
  text: RenderNode;
  thematicBreak: RenderNode;
  underline: RenderNode;
}

export type RenderNode = (
  renderers: Renderers,
  flat: Flat,
  idx: number, // Node ID.
  props: MdastProps,
  state: MdastState,
) => React.ReactNode;

export interface MdastProps {
  ast: Flat;
  renderers?: Renderers;
}

export interface MdastState {}
