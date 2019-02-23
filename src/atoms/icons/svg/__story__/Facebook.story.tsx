import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Facebook from '../Facebook';
import iconSizesStory from './iconSizesStory';

storiesOf('Atoms|Icons/SVG/Facebook', module)
  .add('Default', () => <Facebook />)
  .add('Size scale', () => iconSizesStory(Facebook));
