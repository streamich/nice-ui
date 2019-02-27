import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {doc} from 'storybook-readme';
import {withKnobs, text} from '@storybook/addon-knobs';
import Chem from '..';
const README = require('../README.md');

storiesOf('Markdown|Block/Chem', module)
  .addDecorator(withKnobs)
  .add('Documentation', doc(README))
  .add('Example', () => {
    const source = text('source', '/H20');

    return <Chem source={source} />;
  })
  .add('Formula - 1', () => {
    const source = text('source', '||`/`\\\\`|//\\/OH');

    return <Chem source={source} />;
  })
  .add('Formula - 2', () => {
    const source = text('source', 'OH|\\\\|`//`\\`||/');

    return <Chem source={source} />;
  })
  .add('Formula - 3', () => {
    const source = text('source', 'OH|\\|`/`\\`|/_o');

    return <Chem source={source} />;
  });
