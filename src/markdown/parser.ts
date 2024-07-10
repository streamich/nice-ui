import {create} from 'md-mdast';
import {mdastToFlat} from 'mdast-flat';

const parser = create();

export const md = (markdown: string) => {
  const mdast = parser.tokenizeBlock(markdown);
  const flat = mdastToFlat(mdast as any);

  return flat;
};

export const mdi = (markdown: string) => {
  const mdast = {
    type: 'root',
    children: parser.tokenizeInline(markdown),
  };
  const flat = mdastToFlat(mdast as any);

  return flat;
};
