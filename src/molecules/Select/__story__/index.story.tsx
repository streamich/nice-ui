import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Select} from '..';

storiesOf('Molecules|Select', module)
  .add('Default', () => <Select renderList={() => ['Option 1', 'Option 2', 'Option 3']}>Select..</Select>)
  .add('Long list', () => (
    <Select
      renderList={() => [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
        'Option 6',
        'Option 7',
        'Option 8',
        'Option 9',
        'Option 10',
      ]}
    >
      Select..
    </Select>
  ))
  .add('Long label', () => (
    <Select renderList={() => ['Option 1', 'Option 2', 'Option 3']}>Some very very long label title line...</Select>
  ))
  .add('[block]', () => (
    <Select block renderList={() => ['Option 1', 'Option 2', 'Option 3']}>
      Select
    </Select>
  ));
