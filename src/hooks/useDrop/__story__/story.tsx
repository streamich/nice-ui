import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import useDrop from '..';

const Demo = () => {
  const state = useDrop({
    onFiles: action('onFiles'),
    onUri: action('onUri'),
    onText: action('onText'),
  });

  const style: React.CSSProperties = {
    width: 200,
    height: 200,
    margin: '50px auto',
    border: '1px solid #000',
    textAlign: 'center',
    lineHeight: '200px',
    ...(state.over
      ? {
          border: '1px solid green',
          background: '#f8f8f8',
        }
      : {}),
  };

  return (
    <div>
      <div style={style}>Drop area</div>

      <br />
      <br />

      <pre>{JSON.stringify(state, null, 4)}</pre>
    </div>
  );
};

storiesOf('Hooks|useDrop', module).add('Default', () => <Demo />);
