import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Checkbox} from '..';
import {Toggle} from 'libreact/lib/Toggle';

storiesOf('Molecules|Checkbox', module)
  .add('On', () => <Checkbox on />)
  .add('Off', () => <Checkbox on={false} />)
  .add('Small on', () => <Checkbox on small />)
  .add('Small off', () => <Checkbox on={false} small />)
  .add('Toggle', () => <Toggle>{({on, toggle}) => <Checkbox on={on} onChange={toggle} />}</Toggle>);
