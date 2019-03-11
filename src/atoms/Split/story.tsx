import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Split} from '.';

storiesOf('Atoms|Split', module).add('Example', () => (
  <Split>
    <div>left</div>
    <div>right</div>
  </Split>
));
