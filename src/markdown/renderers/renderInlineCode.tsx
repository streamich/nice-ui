import * as React from 'react';
import {RenderNode} from '../types';

const renderInlineCode: RenderNode = (renderers, flat, idx) => {
  const node = flat.nodes[idx] as any;
  let lang = '';
  let value = node.value;
  const hasLanguageSet = node.wrap === '``';

  if (hasLanguageSet) {
    const matches = node.value.match(/^([^\s]+)\s+(.+)$/);
    if (matches) {
      lang = matches[1];
      value = matches[2];
    }
  }

  const className = 'md-inlineCode';

  return (
    <code className={className} data-lang={lang}>
      {value}
    </code>
  );
};

export default renderInlineCode;
