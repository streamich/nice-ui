import * as React from 'react';
import {storiesOf} from '@storybook/react';
import SpinnerBar from '..';

storiesOf('Atoms|SpinnerBar', module)
  .add('Default', () => <SpinnerBar />)
  .add('Scale', () => (
    <div>
      <SpinnerBar size={0} />
      <SpinnerBar size={1} />
      <SpinnerBar size={2} />
      <SpinnerBar size={3} />
    </div>
  ))
  .add('Custom color', () => <SpinnerBar color="red" />);
