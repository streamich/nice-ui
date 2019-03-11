import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ModalFullScreenStreams from '..';
import {action} from '@storybook/addon-actions';
import {streams1} from '../../../__tests__/mocks/assets';

storiesOf('Organisms|ModalFullScreenStreams', module)
  .add('Default', () => {
    return <ModalFullScreenStreams assets={streams1} />;
  })
  .add('Long list', () => {
    return (
      <ModalFullScreenStreams
        assets={[...streams1, ...streams1, ...streams1, ...streams1, ...streams1, ...streams1, ...streams1]}
      />
    );
  });
