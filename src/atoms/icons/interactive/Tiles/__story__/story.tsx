import * as React from 'react';
import {storiesOf} from '@storybook/react';
import IconTiles from '..';

storiesOf('Atoms|Icons/Interactive/Tiles', module)
  .add('Default', () => <IconTiles />)
  .add('Size scale', () => (
    <div>
      <IconTiles size={32} />
      <IconTiles size={48} />
      <IconTiles size={64} />
    </div>
  ));
