import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import Katex from '..';

storiesOf('Markdown|Inline/Katex', module)
  .addDecorator(withKnobs)
  // .add('Documentation', doc(README))
  .add('2 + 2', () => {
    const source = text('source', '2 + 2');

    return (
      <p>
        Here is inline <Katex source={source} /> formula!
      </p>
    );
  });
