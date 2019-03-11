import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs/react';
import Modal from '..';
import CreateStream from './CreateStream';

const pageFiller = [];
for (let i = 0; i < 100; i++) {
  pageFiller.push('This is some content that should be blurred out.');
  pageFiller.push(<br key={'br-' + i} />);
}

storiesOf('Organisms|Modal', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const visible = boolean('Visible', true);

    return (
      <div>
        {pageFiller}
        {visible && (
          <Modal
            title="Secret Launcher Settings"
            onEsc={action('onEsc')}
            onOutsideClick={action('onOutsideClick')}
            onCloseClick={action('onCloseClick')}
          >
            This is some content, hello world.
          </Modal>
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
          <Modal
            title="Secret Launcher Settings"
            noPadding
            onEsc={action('onEsc')}
            onOutsideClick={action('onOutsideClick')}
            onCloseClick={action('onCloseClick')}
          >
            This is some content, hello world.
          </Modal>
        )}
      </div>
    );
  })
  .add('[noBorders]', () => {
    const visible = boolean('Visible', true);

    return (
      <div>
        {pageFiller}
        {visible && (
          <Modal
            title="Secret Launcher Settings"
            noBorders
            onEsc={action('onEsc')}
            onOutsideClick={action('onOutsideClick')}
            onCloseClick={action('onCloseClick')}
          >
            This is some content, hello world.
          </Modal>
        )}
      </div>
    );
  })
  .add('Big content', () => {
    const visible = boolean('Visible', true);

    return (
      <div>
        {pageFiller}
        {visible && (
          <Modal title="Secret Launcher Settings" onEsc={action('onEsc')} onOutsideClick={action('onOutsideClick')}>
            <div style={{width: 700, height: 500, border: '1px solid red'}}>some content...</div>
          </Modal>
        )}
      </div>
    );
  })
  .add('100% width', () => {
    const visible = boolean('Visible', true);

    return (
      <div>
        {pageFiller}
        {visible && (
          <Modal title="Secret Launcher Settings" onEsc={action('onEsc')} onOutsideClick={action('onOutsideClick')}>
            <div style={{width: '100%', height: 500, border: '1px solid red'}}>some content...</div>
          </Modal>
        )}
      </div>
    );
  })
  .add('Create stream', () => <CreateStream />);
