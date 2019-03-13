import * as React from 'react';
const emojiJs = require('emoji-js');

const emoji = new emojiJs();
emoji.replace_mode = 'unified';

export interface EmojiInlineProps {
  source: string;
  renderVoid?: (source: string) => React.ReactElement | null;
}

const renderVoidDefault = (source) => <span>{source}</span>;

const EmojiInline: React.SFC<EmojiInlineProps> = React.memo(({source, renderVoid = renderVoidDefault}) => {
  const icon = emoji.replace_colons(source);

  if (icon === source) {
    return renderVoid(source) || null;
  }

  return <span>{icon}</span>;
});

export default EmojiInline;
