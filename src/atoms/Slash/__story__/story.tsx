import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Slash} from '..';

storiesOf('Atoms|Slash', module).add('Example', () => (
  <div>
    <Slash>
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
    </Slash>
  </div>
));
