import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from '../Markdown';

storiesOf('Markdown|Markdown', module)
  .add('Italic and bold', () => <Markdown src="*alpha* __bravo__" />)
  .add('Blocks', () => (
    <div style={{maxWidth: 700, margin: '0 auto'}}>
      <Markdown
        src={`
# Title

## This is ==Subtitle==

Hello :smile: this is a $$2+2$$ paragraph.${'  '}
This ++should++ be on new line. This is [Google](http://www.google.com "This is Google").
But this is [Bing][bing][^1].

[^1]: First footnote...

[bing]: http://bing.com "Das ist Bing"

----------------

Here are \\ \# **\\\`\\\`** escaped characters.

> ... some quote ...

This is \`code\`:

    git status

This is some JavaScript^1^~2~ ~~code~~:

\`\`\`js
console.log(123);
\`\`\`

![image](https://user-images.githubusercontent.com/9773803/53509104-6fc53000-3abb-11e9-8ad3-71882cb9f8d3.png "Image haha")

\`\`\`
cd
\`\`\`

Image reference:

![image][img]

[img]: https://user-images.githubusercontent.com/9773803/53509104-6fc53000-3abb-11e9-8ad3-71882cb9f8d3.png "Image haha"

https://github.com/streamich


    `}
      />
    </div>
  ))
  .add('Footnotes', () => (
    <Markdown
      src={`
Sandwiches are the most healthy food[^healty-food]. It has been documented by NASA.[^NASA]
Burger[^1] is a type of sandwich.

[^1]: Burger footnote.
[^healty-food]: Yes, very healthy.
[^NASA]: Even Marsians eat sandwiches.
`}
    />
  ));
