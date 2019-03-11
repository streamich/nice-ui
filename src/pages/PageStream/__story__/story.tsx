import * as React from 'react';
import {storiesOf} from '@storybook/react';
import PageStream from '..';
import {assetStream1, list1} from '../../../__tests__/mocks/assets';

storiesOf('Pages|PageStream', module)
  .add('Basic', () => <PageStream stream={assetStream1} assets={list1.list} value={''} onChange={() => {}} />)
  .add('Many comments', () => {
    return (
      <PageStream
        stream={assetStream1}
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
        value={''}
        onChange={() => {}}
      />
    );
  });
