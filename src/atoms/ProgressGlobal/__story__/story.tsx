import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ProgressGlobal from '..';
import {Example1} from './Example1';

storiesOf('Atoms|ProgressGlobal', module)
  .add('Example', () => <ProgressGlobal />)
  .add('Interactive', () => <Example1 />)
  .add('Double', () => (
    <div>
      <ProgressGlobal value={0.5} />
      <ProgressGlobal />
    </div>
  ));
