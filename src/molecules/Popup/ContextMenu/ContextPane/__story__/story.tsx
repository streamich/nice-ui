import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ContextPane} from '..';

storiesOf('Molecules|Popup/ContextMenu/ContextPane', module)
  .add('Default', () => (
    <div style={{margin: '30px'}}>
      <ContextPane>Hello world!</ContextPane>
    </div>
  ))
  .add('Frame', () => (
    <div style={{margin: '30px', outline: '1px solid red'}}>
      <ContextPane>Hello world!</ContextPane>
    </div>
  ));
