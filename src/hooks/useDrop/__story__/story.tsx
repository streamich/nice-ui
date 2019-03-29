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
          outline: '3px solid yellow',
          background: '#f8f8f8',
        }
      : {}),
  };

  return (
    <div>
      <div style={style}>Drop area</div>

      <br />
      <br />

      <div style={{maxWidth: 300, margin: '0 auto'}}>
        <p>
          See logs in <code>Actions</code> tab. Below is state returned by the hook:
        </p>
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div>
    </div>
  );
};

storiesOf('Hooks|useDrop', module).add('Default', () => <Demo />);
