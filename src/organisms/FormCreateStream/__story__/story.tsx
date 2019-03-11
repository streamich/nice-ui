import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import FormCreateStream from '..';
import {Value} from 'libreact/lib/Value';
import {Toggle} from 'libreact/lib/Toggle';

storiesOf('Organisms|FormCreateStream', module)
  .add('Basic', () => (
    <Value
      init={''}
      render={({value, set}) => <FormCreateStream name={value} onChangeName={set} onSubmit={action('onSubmit')} />}
    />
  ))
  .add('[disabled]', () => (
    <Value
      init={''}
      render={({value, set}) => (
        <FormCreateStream
          disabled
          name={value}
          onChangeName={set}
          onSubmit={action('onSubmit')}
          isPrivate={true}
          onTogglePrivate={() => {}}
        />
      )}
    />
  ))
  .add('[isPrivate=*]', () => (
    <Value
      init={''}
      render={({value, set}) => (
        <Toggle
          init={false}
          render={({on, toggle}) => (
            <FormCreateStream
              name={value}
              onChangeName={set}
              onSubmit={action('onSubmit')}
              isPrivate={on}
              onTogglePrivate={toggle}
            />
          )}
        />
      )}
    />
  ));
