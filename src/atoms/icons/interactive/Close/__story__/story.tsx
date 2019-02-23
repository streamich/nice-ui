import * as React from 'react';
import {storiesOf} from '@storybook/react';
import IconInteractiveCLose from '..';

storiesOf('Atoms|Icons/Interactive/Close', module)
  .add('Defaults', () => <IconInteractiveCLose />)
  .add('Custom styles', () => <IconInteractiveCLose style={{border: '1px solid #aaa'}} />)
  .add('Custom size', () => <IconInteractiveCLose style={{border: '1px solid #aaa', width: 64, height: 64}} />);
