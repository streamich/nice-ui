import * as React from 'react';
import {storiesOf} from '@storybook/react';
import SizerStream from '..';

storiesOf('Atoms|SizerStream', module).add('Example', () => (
  <SizerStream>
    <div style={{background: 'red', width: '100%', height: 200}} />
  </SizerStream>
));
