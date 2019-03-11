import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {LogoInteractive} from '..';

storiesOf('Atoms|LogoInteractive', module)
  .add('Basic', () => <LogoInteractive />)
  .add('Multiple sizes', () => (
    <div>
      <div style={{border: '1px solid red', width: 128, height: 128}}>
        <LogoInteractive size={128} />
      </div>

      <br />

      <div style={{border: '1px solid red', width: 64, height: 64}}>
        <LogoInteractive size={64} />
      </div>

      <br />

      <div style={{border: '1px solid red', width: 48, height: 48}}>
        <LogoInteractive size={48} />
      </div>

      <br />

      <div style={{border: '1px solid red', width: 32, height: 32}}>
        <LogoInteractive size={32} />
      </div>

      <br />

      <div style={{border: '1px solid red', width: 16, height: 16}}>
        <LogoInteractive size={16} />
      </div>
    </div>
  ))
  .add('[inverted]', () => (
    <div style={{padding: 40, background: '#000'}}>
      <LogoInteractive inverted />
    </div>
  ));
