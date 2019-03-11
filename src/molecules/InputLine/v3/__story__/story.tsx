/* tslint:disable no-unnecessary-callback-wrapper */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {InputLine} from '..';
import {Value} from 'libreact/lib/Value';

storiesOf('Molecules|InputLine/v3', module)
  .add('Default', () => (
    <InputLine
      onChange={action('onChange')}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
      onPaste={action('onPaste')}
    />
  ))
  .add('Controlled', () => (
    <Value render={({value, set}) => <InputLine value={value} onChange={(newValue) => set(newValue)} />} />
  ))
  .add('[label=]', () => (
    <Value
      render={({value, set}) => <InputLine label="E-mail" value={value} onChange={(newValue) => set(newValue)} />}
    />
  ))
  .add('Cancel icon', () => (
    <Value
      render={({value, set}) => (
        <InputLine
          label="E-mail"
          value={value}
          onChange={(newValue) => set(newValue)}
          onCancelClick={action('onCancelClick')}
        />
      )}
    />
  ))
  .add('[disabled]', () => (
    <Value
      init="Hello..."
      render={({value, set}) => (
        <InputLine disabled label="E-mail" value={value} onChange={(newValue) => set(newValue)} />
      )}
    />
  ))
  .add('[type=password]', () => (
    <Value
      render={({value, set}) => (
        <InputLine type="password" label="Password" value={value} onChange={(newValue) => set(newValue)} />
      )}
    />
  ))
  .add('[focus]', () => (
    <Value
      render={({value, set}) => <InputLine focus label="Name" value={value} onChange={(newValue) => set(newValue)} />}
    />
  ))
  .add('[select]', () => (
    <Value
      init="Initial value"
      render={({value, set}) => <InputLine select label="Name" value={value} onChange={(newValue) => set(newValue)} />}
    />
  ))
  .add('[readOnly]', () => (
    <Value
      init="Initial value"
      render={({value, set}) => (
        <InputLine readOnly label="Name" value={value} onChange={(newValue) => set(newValue)} />
      )}
    />
  ))
  .add('[small], controlled', () => (
    <Value render={({value, set}) => <InputLine small value={value} onChange={(newValue) => set(newValue)} />} />
  ))
  .add('[small], [label=]', () => (
    <Value
      render={({value, set}) => (
        <InputLine small label="Username" value={value} onChange={(newValue) => set(newValue)} />
      )}
    />
  ))
  .add('[waiting, disabled]', () => (
    <div style={{padding: 20}}>
      <InputLine label="Username" value="Hello world" waiting disabled />
      <br />
      <br />
      <InputLine small label="Username" value="Hello world" waiting disabled />
    </div>
  ));
