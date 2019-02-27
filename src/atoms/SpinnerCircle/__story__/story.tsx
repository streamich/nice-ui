import * as React from 'react';
import {storiesOf} from '@storybook/react';
import SpinnerCircle from '..';

storiesOf('Atoms|SpinnerCircle', module)
  .add('Default', () => <SpinnerCircle />)
  .add('Size scale', () => (
    <div>
      <SpinnerCircle size={0} />
      <SpinnerCircle size={1} />
      <SpinnerCircle size={2} />
      <SpinnerCircle size={3} />
      <SpinnerCircle size={4} />
      <SpinnerCircle size={5} />
      <SpinnerCircle size={6} />
    </div>
  ))
  .add('Custom color', () => <SpinnerCircle color="pink" />);
