import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {ContentEditable} from '..';

storiesOf('Molecules|ContentEditable', module).add('Default', () => (
  <ContentEditable value="value..." onChange={action('onChange')} />
));
