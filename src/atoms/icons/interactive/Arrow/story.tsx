import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Arrow from '.';

storiesOf('Atoms|Icons/Interactive/Arrow', module)
  .add('Default', () => <Arrow />)
  .add('[direction=u]', () => <Arrow direction="u" />)
  .add('[direction=r]', () => <Arrow direction="r" />)
  .add('[direction=d]', () => <Arrow direction="d" />)
  .add('[direction=l]', () => <Arrow direction="l" />)
  .add('Bound', () => (
    <div style={{width: 40, height: 40, border: '1px solid red'}}>
      <Arrow />
    </div>
  ));
