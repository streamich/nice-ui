import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Space} from '..';

storiesOf('Atoms|Space', module)
  .add('Defaults', () => (
    <div>
      <div style={{border: '1px solid red'}}>
        <Space>Lorep lipsum dolorem...</Space>
      </div>
      <div style={{border: '1px solid red'}}>No space...</div>
    </div>
  ))
  .add('Scale', () => (
    <div>
      {[0, 1, 2, 3, 4, 5, 6].map((size) => (
        <div style={{border: '1px solid red'}}>
          <Space padt={size as any} padr={size as any} padb={size as any} padl={size as any}>
            {`<Space padt={${size}} padr={${size}} padb={${size}} padl={${size}}>`}
          </Space>
        </div>
      ))}
    </div>
  ));
