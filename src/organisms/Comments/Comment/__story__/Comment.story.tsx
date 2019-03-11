import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Comments from '..';
import {action} from '@storybook/addon-actions';
import {asset1} from '../../../../__tests__/mocks/assets';

storiesOf('Organisms|Comments/Comment', module).add('Default', () => {
  return (
    <Comments
      asset={asset1}
      onUserClick={action('onUserClick')}
      renderBody={({src}) => <pre>{src}</pre>}
      onPostClick={action('onPostClick')}
    />
  );
});
