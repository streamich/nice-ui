import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Github from '../Github';
import iconSizesStory from './iconSizesStory';

storiesOf('Atoms|Icons/SVG/Github', module)
  .add('Default', () => <Github />)
  .add('Size scale', () => iconSizesStory(Github));
