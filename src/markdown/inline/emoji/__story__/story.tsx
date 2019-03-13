import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import EmojiInline from '..';

storiesOf('Markdown|Inline/Emoji', module)
  .addDecorator(withKnobs)
  .add(':smile:', () => {
    const source = text('source', 'smile');

    return (
      <p>
        Here is inline <EmojiInline source={source} /> formula!
      </p>
    );
  });
