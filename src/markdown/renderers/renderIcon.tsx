import * as React from 'react';
import {RenderNode} from '../types';
import EmojiInlineLazy from '../inline/emoji/lazy';

const renderIcon: RenderNode = (renderers, flat, idx) => {
  const node = flat.nodes[idx] as any;
  const {emoji} = node;
  const fallback = <code>:{emoji}:</code>;

  return <EmojiInlineLazy source={emoji} fallback={fallback} />;
};

export default renderIcon;
