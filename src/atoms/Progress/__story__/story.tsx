import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Progress from '..';
import {Example1} from './Example1';

storiesOf('Atoms|Progress', module)
  .add('Empty', () => <Progress />)
  .add('10%', () => <Progress value={0.1} />)
  .add('50%', () => <Progress value={0.5} />)
  .add('100%', () => <Progress value={1} />)
  .add('Interactive', () => <Example1 />);
