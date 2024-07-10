import * as React from 'react';
import {RenderNode} from '../types';
import {ICode} from 'md-mdast/lib/types';
import {blocksByLang} from '../block';
import {IMarkdownBlockCodeProps} from '../block/shared';
import Code from '../block/Code';
import CustomComponent from '../block/CustomComponent/lazy';

const renderCode: RenderNode = (renderers, flat, idx) => {
  const node = flat.nodes[idx] as ICode;
  const {lang, value} = node;
  if (lang && lang[0] === '<' && lang[lang.length - 1] === '>') {
    let data: object = {};
    if (value) {
      try {
        data = JSON.parse(value);
      } catch (e) {
        console.error('Failed to parse JSON in custom block:', e);
      }
    }
    return <CustomComponent idx={idx} name={lang.slice(1, -1)} meta={node.meta ?? ''} data={data} />;
  }
  const Comp: React.FC<IMarkdownBlockCodeProps> | undefined = blocksByLang[lang || ''];
  const renderDefault = () => {
    return <Code idx={idx} source={value} renderError={() => null} />;
  };

  if (Comp) return <Comp idx={idx} source={value} renderError={renderDefault} />;

  return renderDefault();
};

export default renderCode;
