import {IRoot, TBlockToken, TInlineToken} from 'md-mdast/lib/types';

export * from 'md-mdast/lib/types';

export type MdastNode = IRoot | TBlockToken | TInlineToken;
export type RenderNode = (node: MdastNode, props: MdastProps, state: MdastState) => React.ReactNode;

export interface MdastProps {
  ast: IRoot;
  renderNode?: RenderNode;
}

export interface MdastState {}
