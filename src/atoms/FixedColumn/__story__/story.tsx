import * as React from 'react';
import {storiesOf} from '@storybook/react';
import FixedColumn from '..';

storiesOf('Atoms|FixedColumn', module)
  .add('Left 200px', () => (
    <FixedColumn left={200}>
      <div>left</div>
      <div>right</div>
    </FixedColumn>
  ))
  .add('Left 200px, left overflow', () => (
    <FixedColumn left={200}>
      <div>left - very long column very long column very long column very long column</div>
      <div>right</div>
    </FixedColumn>
  ))
  .add('Left 200px, right overflow', () => (
    <FixedColumn left={200}>
      <div>left</div>
      <div>
        right - very long column very long column very long column very long column very long column very long column
        very long column very long column very long column very long column very long column very long column very long
        column very long column very long column very long column very long column very long column very long column
        very long column very long column very long column very long column very long column
      </div>
    </FixedColumn>
  ))
  .add('Left 200px, both overflow', () => (
    <FixedColumn left={200}>
      <div>left - very long column very long column very long column very long column</div>
      <div>
        right - very long column very long column very long column very long column very long column very long column
        very long column very long column very long column very long column very long column very long column very long
        column very long column very long column very long column very long column very long column very long column
        very long column very long column very long column very long column very long column
      </div>
    </FixedColumn>
  ))
  .add('Right 200px', () => (
    <FixedColumn right={200}>
      <div>left</div>
      <div>right</div>
    </FixedColumn>
  ))
  .add('Right 200px, left overflow', () => (
    <FixedColumn right={200}>
      <div>
        left - very long column very long column very long column very long column very long column very long column
        very long column very long column very long column very long column very long column very long column very long
        column very long column very long column very long column very long column very long column very long column
        very long column very long column very long column very long column very long column
      </div>
      <div>right</div>
    </FixedColumn>
  ))
  .add('Right 200px, right overflow', () => (
    <FixedColumn right={200}>
      <div>left</div>
      <div>right - very long column very long column very long column very long column</div>
    </FixedColumn>
  ))
  .add('Right 200px, both overflow', () => (
    <FixedColumn right={200}>
      <div>
        left - very long column very long column very long column very long column very long column very long column
        very long column very long column very long column very long column very long column very long column very long
        column very long column very long column very long column very long column very long column very long column
        very long column very long column very long column very long column very long column
      </div>
      <div>right - very long column very long column very long column very long column</div>
    </FixedColumn>
  ))
  .add('Left 200px, with 100% width elements', () => (
    <FixedColumn left={200}>
      <div>
        left
        <div style={{border: '1px solid green'}}>no width</div>
        <div style={{width: '100%', border: '1px solid green'}}>100%</div>
      </div>
      <div>
        right
        <div style={{border: '1px solid green'}}>no width</div>
        <div style={{width: '100%', border: '1px solid green'}}>100%</div>
      </div>
    </FixedColumn>
  ))
  .add('Right 200px, with 100% width elements', () => (
    <FixedColumn right={200}>
      <div>
        left
        <div style={{border: '1px solid green'}}>no width</div>
        <div style={{width: '100%', border: '1px solid green'}}>100%</div>
      </div>
      <div>
        right
        <div style={{border: '1px solid green'}}>no width</div>
        <div style={{width: '100%', border: '1px solid green'}}>100%</div>
      </div>
    </FixedColumn>
  ));
