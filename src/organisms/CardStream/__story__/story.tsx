import * as React from 'react';
import {storiesOf} from '@storybook/react';
import CardStream from '..';
import {action} from '@storybook/addon-actions';
import {assetStream1, assetStream2, assetStream3} from '../../../__tests__/mocks/assets';

storiesOf('Organisms|CardStream', module).add('Default', () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '100px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CardStream asset={assetStream1} onClick={action('onClick')} />
      <CardStream asset={assetStream2} onClick={action('onClick')} />
      <CardStream asset={assetStream3} onClick={action('onClick')} />
    </div>
  );
});
