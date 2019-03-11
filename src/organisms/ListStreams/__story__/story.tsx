import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ListStreams from '..';
import {streams1} from '../../../__tests__/mocks/assets';

storiesOf('Organisms|ListStreams', module).add('Default', () => {
  return (
    <div
      style={{
        maxWidth: 300,
        background: '#eee',
      }}
    >
      <ListStreams assets={streams1} />
    </div>
  );
});
