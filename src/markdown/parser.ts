import {create} from 'md-mdast';
import {mdastToFlat} from 'mdast-flat';

const parser = create();

export const toMDASTF = (markdown: string) => {
  const mdast = parser.tokenizeBlock(markdown);
  const flat = mdastToFlat(mdast);

  return flat;
};
