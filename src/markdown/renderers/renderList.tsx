import * as React from 'react';
import {RenderNode} from '../types';
import MarkdownFullWidthBlock from '../util/MarkdownFullWidthBlock';
import isFirstLevelBlockElement from '../util/isFirstLevelBlockElement';
import MarkdownBlock from '../util/MarkdownBlock';
import {IList} from 'md-mdast/lib/types';
import {TNode} from 'mdast-flat/lib/types';

const renderList: RenderNode = (renderers, ast, idx, props, state) => {
  const node = ast.nodes[idx] as IList;
  const {loose} = node;
  const tag = node.ordered ? 'ol' : 'ul';
  const children = renderers.children(renderers, ast, idx, props, state);
  const element = (
    <MarkdownBlock idx={idx} as={tag} notLoose={!loose}>
      {children}
    </MarkdownBlock>
  );

  const doCenterAsTopLevelBlock = props.isFullWidth && isFirstLevelBlockElement(node as TNode, ast);
  return doCenterAsTopLevelBlock ? <MarkdownFullWidthBlock>{element}</MarkdownFullWidthBlock> : element;
};

export default renderList;
