import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {PageFrame} from '..';
import {useDrop} from 'react-use';

const Demo = () => {
  const {over} = useDrop();
  return (
    <div>
      <p>Drag a file here.</p>
      <PageFrame disabled={!over} />
    </div>
  );
};

storiesOf('Molecules|PageFrame', module)
  .addDecorator(withKnobs)
  .add('Controlled', () => {
    const disabled = boolean('Disabled', false);
    return (
      <div>
        <p>Use knob switches.</p>
        <PageFrame disabled={disabled} />
      </div>
    );
  })
  .add('Demo', () => <Demo />);
