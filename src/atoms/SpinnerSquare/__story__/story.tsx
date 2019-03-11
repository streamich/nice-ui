import * as React from 'react';
import {storiesOf} from '@storybook/react';
import SpinnerSquare from '..';

storiesOf('Atoms|SpinnerSquare', module)
  .add('Default', () => <SpinnerSquare />)
  .add('Custom styles', () => <SpinnerSquare style={{width: 20, height: 20, background: 'red'}} />)
  .add('Multiple', () => (
    <div>
      <SpinnerSquare style={{width: 20, height: 20, background: 'red'}} />
      <SpinnerSquare style={{width: 40, height: 40, background: 'blue'}} />
      <SpinnerSquare style={{width: 60, height: 60, background: 'pink'}} />
    </div>
  ));
