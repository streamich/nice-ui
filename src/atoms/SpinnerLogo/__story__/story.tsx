import * as React from 'react';
import {storiesOf} from '@storybook/react';
import SpinnerLogo from '..';

storiesOf('Atoms|SpinnerLogo', module)
  .add('Defaults', () => (
    <div>
      <SpinnerLogo />
    </div>
  ))
  .add('2sec delay', () => (
    <div>
      <SpinnerLogo ms={2_000} />
    </div>
  ));
