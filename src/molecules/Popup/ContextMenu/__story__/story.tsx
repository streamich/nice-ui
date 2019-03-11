import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ContextPane} from '../ContextPane';
import {ContextItem, ContextSep} from '..';

storiesOf('Molecules|Popup/ContextMenu', module)
  .add('Default', () => (
    <div style={{margin: '30px'}}>
      <ContextPane>
        <ContextItem>Hello world!</ContextItem>
      </ContextPane>
    </div>
  ))
  .add('Multiple items', () => (
    <div style={{margin: '30px'}}>
      <ContextPane>
        <ContextItem>Hello world!</ContextItem>
        <ContextItem>Item 2</ContextItem>
        <ContextItem>Item 3</ContextItem>
      </ContextPane>
    </div>
  ))
  .add('big=', () => (
    <div style={{margin: '30px'}}>
      <ContextPane>
        <ContextItem big>Hello world! Wide item.</ContextItem>
      </ContextPane>
    </div>
  ))
  .add('Multiple big=', () => (
    <div style={{margin: '30px'}}>
      <ContextPane>
        <ContextItem big>Item 1</ContextItem>
        <ContextItem big>Item 2</ContextItem>
        <ContextItem big>Item 3</ContextItem>
      </ContextPane>
    </div>
  ))
  .add('Demo', () => (
    <div style={{margin: '30px'}}>
      <ContextPane>
        <ContextItem big>Profile</ContextItem>
        <ContextItem big>Karma</ContextItem>
        <ContextSep />
        <ContextItem>Settings</ContextItem>
        <ContextItem>Logout</ContextItem>
        <ContextSep />
      </ContextPane>
    </div>
  ));
