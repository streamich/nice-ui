import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {CardLite, CardLiteSpace, CardLiteTitle} from '..';

storiesOf('Molecules|CardLite', module)
  .add('Defaults', () => <CardLite>CardLite</CardLite>)
  .add('With separator', () => (
    <CardLite>
      CardLite
      <hr />
      more...
    </CardLite>
  ))
  .add('With line break', () => (
    <CardLite>
      CardLite
      <CardLiteSpace />
      more...
    </CardLite>
  ))
  .add('With title', () => (
    <CardLite>
      <CardLiteTitle>This is title</CardLiteTitle>
      CardLite
      <CardLiteSpace />
      more...
    </CardLite>
  ))
  .add('With close button', () => (
    <CardLite>
      <CardLiteTitle onClose={action('onClose')}>This is title</CardLiteTitle>
      CardLite
      <CardLiteSpace />
      more...
    </CardLite>
  ));
