import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Twitter from '../Twitter';
import iconSizesStory from './iconSizesStory';

storiesOf('Atoms|Icons/SVG/Twitter', module)
  .add('Default', () => <Twitter />)
  .add('Size scale', () => iconSizesStory(Twitter));
