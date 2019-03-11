import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {LogoStatic} from '..';

storiesOf('Atoms|LogoStatic', module)
  .add('Basic', () => <LogoStatic />)
  .add('Multiple sizes', () => (
    <div>
      <div style={{border: '1px solid red', width: 128, height: 128}}>
        <LogoStatic size={128} />
      </div>

      <br />

      <div style={{border: '1px solid red', width: 64, height: 64}}>
        <LogoStatic size={64} />
      </div>

      <br />

      <div style={{border: '1px solid red', width: 32, height: 32}}>
        <LogoStatic size={32} />
      </div>

      <br />

      <div style={{border: '1px solid red', width: 16, height: 16}}>
        <LogoStatic size={16} />
      </div>
    </div>
  ))
  .add('Inverted', () => (
    <div style={{padding: 40, background: '#000'}}>
      <LogoStatic inverted />
    </div>
  ));
