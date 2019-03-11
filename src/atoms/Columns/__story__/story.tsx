import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Columns} from '..';
import {Frame} from '../../Frame';

storiesOf('Atoms|Columns', module)
  .add('Two columns', () => (
    <Columns>
      <Frame>
        Column 1
        <hr />
        more...
        <br />
        and more...
      </Frame>
      <Frame>Column 2</Frame>
    </Columns>
  ))
  .add('Three columns', () => (
    <Columns>
      <Frame pad={2}>
        Column 1
        <br />
        more...
        <br />
        and more...
      </Frame>
      <Frame pad={2}>Column 2</Frame>
      <Frame pad={2}>Column 3</Frame>
    </Columns>
  ))
  .add('Uneven contents', () => (
    <Columns>
      <Frame pad={2}>
        Column 1
        <hr />
        more...
        <br />
        and more...
      </Frame>
      <Frame pad={2}>
        <div style={{width: 300, height: 200, background: 'tomato'}}>wide</div>
      </Frame>
      <Frame pad={2}>Column 3</Frame>
    </Columns>
  ))
  .add('Force equal', () => (
    <Columns equal>
      <Frame pad={2}>
        Column 1
        <br />
        more...
        <br />
        and more...
      </Frame>
      <Frame pad={2}>
        <div style={{width: 300, height: 200, background: 'tomato'}}>wide</div>
      </Frame>
      <Frame pad={2}>Column 3</Frame>
    </Columns>
  ));
