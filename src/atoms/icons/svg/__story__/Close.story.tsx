import * as React from 'react';
import {storiesOf} from '@storybook/react';
import IconSvgClose from '../Close';
import iconSizesStory from './iconSizesStory';

storiesOf('Atoms|Icons/SVG/Close', module)
  .add('Default', () => <IconSvgClose />)
  .add('Size scale', () => iconSizesStory(IconSvgClose));
