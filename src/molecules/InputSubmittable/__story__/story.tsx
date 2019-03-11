import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import InputSubmittable from '..';

storiesOf('Molecules|InputSubmittable', module).add('Default', () => (
  <InputSubmittable value="value..." onSubmit={action('onSubmit')} />
));
