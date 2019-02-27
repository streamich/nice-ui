import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Box from '..';
import {Value} from 'libreact/lib/Value';
import {withKnobs, text} from '@storybook/addon-knobs';

storiesOf('Organisms|Box', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const value = text('Value...');
    return (
      <div>
        <Box value={value} placeholder="Placeholder..." />
      </div>
    );
  })
  .add('With margin', () => (
    <div style={{padding: 50}}>
      <Value>
        {({value, set}) => (
          <div>
            <Box value={value} placeholder="Type here..." onChange={(e) => set(e.target.value)} />
            More content...
          </div>
        )}
      </Value>
    </div>
  ));
