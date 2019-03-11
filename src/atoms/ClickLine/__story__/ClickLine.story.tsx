import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ClickLine from '..';
import {withKnobs, boolean} from '@storybook/addon-knobs';

storiesOf('Atoms|ClickLine', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const active = boolean('active', false);
    const border = boolean('border', false);

    return (
      <div
        className="ClickLine_hover"
        style={{
          width: 200,
          height: 200,
          margin: 50,
          outline: border ? '1px solid rgba(0,0,0,.1)' : 'none',
          display: 'flex',
        }}
      >
        <ClickLine active={active} />
      </div>
    );
  });
