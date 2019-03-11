import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {SocialButtons} from '..';
import {WindowSizeSensor} from 'libreact/lib/WindowSizeSensor';

const width = [600, 500, 400, 300, 200, 100];

let stories = storiesOf('Organisms|FormSignin/SocialButtons', module)
  .add('Default', () => (
    <SocialButtons
      onGoogle={action('onGoogle')}
      onFacebook={action('onFacebook')}
      onTwitter={action('onTwitter')}
      onGithub={action('onGithub')}
    />
  ))
  .add('disabled=', () => (
    <SocialButtons
      disabled
      onGoogle={action('onGoogle')}
      onFacebook={action('onFacebook')}
      onTwitter={action('onTwitter')}
      onGithub={action('onGithub')}
    />
  ));

width.forEach((w) => {
  stories = stories.add(`${w}px`, () => (
    <div style={{width: w, border: '1px solid red'}}>
      <SocialButtons
        width={w}
        onGoogle={action('onGoogle')}
        onFacebook={action('onFacebook')}
        onTwitter={action('onTwitter')}
        onGithub={action('onGithub')}
      />
    </div>
  ));
});

stories = stories.add('Responsive', () => (
  <WindowSizeSensor>
    {({width}) => (
      <div>
        <SocialButtons
          width={width}
          onGoogle={action('onGoogle')}
          onFacebook={action('onFacebook')}
          onTwitter={action('onTwitter')}
          onGithub={action('onGithub')}
        />
      </div>
    )}
  </WindowSizeSensor>
));
