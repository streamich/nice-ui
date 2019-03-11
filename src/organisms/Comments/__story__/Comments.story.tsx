import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Comments from '..';
import {list1} from '../../../__tests__/mocks/assets';
import {ContextPane, ContextItem} from '../../../molecules/Popup/ContextMenu';

storiesOf('Organisms|Comments', module)
  .add('Default', () => {
    return (
      <Comments
        assets={list1.list}
        renderBody={({src}) => <pre>{src}</pre>}
        renderContext={() => (
          <>
            <ContextItem big>Delete</ContextItem>
          </>
        )}
      />
    );
  })
  .add('Long list', () => {
    return (
      <Comments
        renderBody={({src}) => <pre>{src}</pre>}
        assets={[
          ...list1.list,
          ...list1.list,
          ...list1.list,
          ...list1.list,
          ...list1.list,
          ...list1.list,
          ...list1.list,
          ...list1.list,
          ...list1.list,
        ]}
      />
    );
  });
