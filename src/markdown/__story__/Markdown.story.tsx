import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from '../Markdown';

storiesOf('Markdown|Markdown', module)
  .add('Italic and bold', () => <Markdown src="*alpha* __bravo__" />)
  .add('Blocks', () => (
    <Markdown
      src={`
# Title

## This is Subtitle

Hello this is a paragraph.${'  '}
This should be on new line.

Here are \\ \# **\\\`\\\`** escaped characters.

> ... some quote ...

This is \`code\`:

    git status

This is some JavaScript^1^~2~ ~~code~~:

\`\`\`js
console.log(123);
\`\`\`
    `}
    />
  ));
