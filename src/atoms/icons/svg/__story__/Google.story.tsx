import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Google from '../Google';
import iconSizesStory from './iconSizesStory';

storiesOf('Atoms|Icons/SVG/Google', module)
  .add('Default', () => <Google />)
  .add('Size scale', () => iconSizesStory(Google));
