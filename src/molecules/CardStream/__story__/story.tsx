import * as React from 'react';
import {storiesOf} from '@storybook/react';
import CardStream from '..';
import {action} from '@storybook/addon-actions';
import {ContextItem} from '../../Popup/ContextMenu';
import {assetStream1, assetStream2, assetStream3} from '../../../__tests__/mocks/assets';

storiesOf('Molecules|CardStream', module)
  .add('Default', () => {
    return (
      <div style={{margin: '100px'}}>
        <CardStream
          asset={assetStream1}
          onClick={action('onClick')}
          renderContext={() => (
            <>
              <ContextItem big>Like</ContextItem>
              <ContextItem big>Delete</ContextItem>
            </>
          )}
        />
      </div>
    );
  })
  .add('Long texts', () => {
    return (
      <div style={{margin: '100px'}}>
        <CardStream
          asset={assetStream3}
          onClick={action('onClick')}
          renderContext={() => (
            <>
              <ContextItem big>Like</ContextItem>
              <ContextItem big>Delete</ContextItem>
            </>
          )}
        />
      </div>
    );
  });
