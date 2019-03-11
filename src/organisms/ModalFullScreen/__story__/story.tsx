import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs/react';
import ModalFullScreen from '..';

const pageFiller = [];
for (let i = 0; i < 100; i++) {
  pageFiller.push('This is some content that should be blurred out.');
  pageFiller.push(<br key={'br-' + i} />);
}

storiesOf('Organisms|ModalFullScreen', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const visible = boolean('Visible', true);

    return (
      <div>
        {pageFiller}
        {visible && (
          <ModalFullScreen
            title="Secret Launcher Settings"
            onEsc={action('onEsc')}
            onOutsideClick={action('onOutsideClick')}
            onCloseClick={action('onCloseClick')}
          >
            This is some content, hello world.
          </ModalFullScreen>
        )}
      </div>
    );
  })
  .add('[noPadding]', () => {
    const visible = boolean('Visible', true);

    return (
      <div>
        {pageFiller}
        {visible && (
          <ModalFullScreen
            title="Secret Launcher Settings"
            noPadding
            onEsc={action('onEsc')}
            onOutsideClick={action('onOutsideClick')}
            onCloseClick={action('onCloseClick')}
          >
            This is some content, hello world.
          </ModalFullScreen>
        )}
      </div>
    );
  });
