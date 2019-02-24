import {IRoot, TBlockToken, TInlineToken} from 'md-mdast/lib/types';

export * from 'md-mdast/lib/types';

export type MdastNode = IRoot | TBlockToken | TInlineToken;
export interface Renderers {
  renderNode: RenderNode;
  renderChildren: RenderChildren;
  renderRoot: RenderNode;
}

export type RenderChildren = (
  renderers: Renderers,
  children: MdastNode[],
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
