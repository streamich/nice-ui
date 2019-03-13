import * as React from 'react';
const emojiJs = require('emoji-js');

const emoji = new emojiJs();
emoji.replace_mode = 'unified';

export interface EmojiInlineProps {
  source: string;
  renderVoid?: (text: string) => React.ReactElement | null;
}

const renderVoidDefault = (source) => <span>{source}</span>;

const EmojiInline: React.SFC<EmojiInlineProps> = React.memo(({source, renderVoid = renderVoidDefault}) => {
  const text = ':' + source + ':';
  const icon = emoji.replace_colons(text);

  if (icon === source) {
    return renderVoid(text) || null;
  }

  return <span>{icon}</span>;
});

export default EmojiInline;
