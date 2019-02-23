import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Settings from '../Settings';
import iconSizesStory from './iconSizesStory';

storiesOf('Atoms|Icons/SVG/Settings', module)
  .add('Default', () => <Settings />)
  .add('Size scale', () => iconSizesStory(Settings));
