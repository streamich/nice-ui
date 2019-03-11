import * as React from 'react';
import {storiesOf} from '@storybook/react';
import TextareaAutosizable from '..';

storiesOf('Molecules|TextareaAutosizable', module).add('Default', () => (
  <TextareaAutosizable placeholder="Type here..." style={{border: '1px solid rgba(0,0,0, .05)'}} />
));
