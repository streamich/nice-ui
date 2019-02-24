import {IRoot, TBlockToken, TInlineToken} from 'md-mdast/lib/types';

export * from 'md-mdast/lib/types';

export type MdastNode = IRoot | TBlockToken | TInlineToken;
export interface Renderers {
  blockquote: RenderNode;
  break: RenderNode;
  children: RenderChildren;
  code: RenderNode;
  delete: RenderNode;
  emphasis: RenderNode;
  heading: RenderNode;
  inlineCode: RenderNode;
  mark: RenderNode;
  node: RenderNode;
  paragraph: RenderNode;
  root: RenderNode;
  strong: RenderNode;
  sup: RenderNode;
  sub: RenderNode;
  text: RenderNode;
}

export type RenderChildren = (
  renderers: Renderers,
  children: MdastNode | MdastNode[],
  props: MdastProps,
  state: MdastState,
) => React.ReactNode;
export type RenderNode = (
  renderers: Renderers,
  node: MdastNode,
  props: MdastProps,
  state: MdastState,
) => React.ReactNode;

export interface MdastProps {
  ast: IRoot;
  renderers?: Renderers;
}

export interface MdastState {}
