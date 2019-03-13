import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from '../Markdown';
import {withKnobs, text} from '@storybook/addon-knobs';

const mdInlineElements = `
- *alpha* --- italic
- __bravo__ --- bold
- ~~hello~~ --- strikethrough
- ==important== --- highlighted
- \`console.log(123)\` --- code
- \`\`js console.log(123)\`\` --- custom language code
- $$2+2$$ --- math
- Superscript^text^
- Subscript~text~
`;

const mdInlineCombinations = `
- *hello __world__* --- bold inside italic
- __hello *world*__ --- italic inside bold
- ==hello __world__== --- bold inside highlighted
- ==hello _world_== --- italic inside highlighted
- ==hello _wo**rld**_== --- bold inside italic inside highlighted
`;

const mdInlineLinks = `
Inline [link](http://google.com).

Reference [link][google] to [google][]---and shorthand---[google].

[google]: http://google.com
`;

const mdImage = `
Simple standalone image:

![](https://user-images.githubusercontent.com/9773803/53509104-6fc53000-3abb-11e9-8ad3-71882cb9f8d3.png)

Image with \`alt\` text:

![alt text](https://user-images.githubusercontent.com/9773803/53509104-6fc53000-3abb-11e9-8ad3-71882cb9f8d3.png)

Image with \`title\` text:

![](https://user-images.githubusercontent.com/9773803/53509104-6fc53000-3abb-11e9-8ad3-71882cb9f8d3.png "this is title")

Inline ![](https://user-images.githubusercontent.com/9773803/53509104-6fc53000-3abb-11e9-8ad3-71882cb9f8d3.png) image
`;

const mdChecklist = `
- [ ] Todo
- [x] Done
`;

const mdTitleWithText = `
# Hello

This is text.
`;

const mdTitleScale = `
# Title 1

## Title 2

### Title 3

#### Title 4

##### Title 5

###### Title 6
`;

const mdMostElements = `
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
`;

const mdFootnotes = `
Sandwiches are the most healthy food[^healty-food]. It has been documented by NASA.[^NASA]
Burger[^1] is a type of sandwich.

[^1]: Burger footnote.
[^healty-food]: Yes, very healthy.
[^NASA]: Even Marsians eat sandwiches.
`;

const sources = [
  ['Inline elements', mdInlineElements],
  ['Inline combinations', mdInlineCombinations],
  ['Inline links', mdInlineLinks],
  ['Images', mdImage],
  ['Checklist', mdChecklist],
  ['Title with text', mdTitleWithText],
  ['Title scale', mdTitleScale],
  ['Most elements', mdMostElements],
  ['Footnotes', mdFootnotes],
];

const fontSizes = ['19.8px', '16px'];

let stories = storiesOf('Markdown|Markdown', module).addDecorator(withKnobs);

function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

for (const fontSize of fontSizes) {
  for (const [name, source] of sources) {
    stories = stories.add(`${fontSize}: ${name}`, () => {
      const src = decodeHtml(text('src', source));
      return (
        <div style={{fontSize, maxWidth: '700px', margin: '50px auto'}}>
          <Markdown src={src} />
        </div>
      );
    });
  }
}
