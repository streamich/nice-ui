import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Ripple} from '..';
import Button from './Button';

storiesOf('Atoms|Ripple', module)
  .add('Plain example', () => (
    <div>
      <Ripple>
        <div>foobar</div>
      </Ripple>
    </div>
  ))
  .add('Example', () => (
    <div>
      <Ripple>
        <div
          style={{
            width: 300,
            height: 200,
            lineHeight: '200px',
            textAlign: 'center',
            background: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, .1)',
          }}
        >
          foobar
        </div>
      </Ripple>
    </div>
  ))
  .add('Button', () => <Button primary>Click me!</Button>);
