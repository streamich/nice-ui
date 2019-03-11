import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Circle from '..';
import {withKnobs, boolean} from '@storybook/addon-knobs';

storiesOf('Atoms|Circle', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const active = boolean('active', true);
    return <Circle size={100} active={active} />;
  })
  .add('Size scale', () => {
    return (
      <>
        <Circle size={16} active />
        <Circle size={32} active />
        <Circle size={64} active />
        <Circle size={100} active />
      </>
    );
  })
  .add('Color scale', () => {
    return (
      <>
        <Circle size={16} color={'red'} active />
        <Circle size={32} color={'green'} active />
        <Circle size={64} color={'blue'} active />
      </>
    );
  })
  .add('Wide scale', () => {
    return (
      <>
        <Circle size={16} wide active />
        <Circle size={32} wide active />
        <Circle size={64} wide active />
      </>
    );
  })
  .add('[hoverable]', () => {
    return <Circle size={100} hoverable />;
  });
