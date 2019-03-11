import * as React from 'react';
import {storiesOf} from '@storybook/react';
import SpinnerBars from '..';

storiesOf('Atoms|SpinnerBars', module)
  .add('Default', () => <SpinnerBars />)
  .add('Default color', () => <SpinnerBars color />)
  .add('Custom color', () => <SpinnerBars color="red" />);
