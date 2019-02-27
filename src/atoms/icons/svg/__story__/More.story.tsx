import * as React from 'react';
import {storiesOf} from '@storybook/react';
import More from '../More';
import iconSizesStory from './iconSizesStory';

storiesOf('Atoms|Icons/SVG/More', module)
  .add('Default', () => <More />)
  .add('Size scale', () => iconSizesStory(More));
