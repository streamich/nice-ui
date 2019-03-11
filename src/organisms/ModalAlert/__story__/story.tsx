import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs/react';
import ModalAlert, {alert} from '..';

const pageFiller = [];
for (let i = 0; i < 100; i++) {
  pageFiller.push('This is some content that should be blurred out.');
  pageFiller.push(<br key={'br-' + i} />);
}

storiesOf('Organisms|ModalAlert', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const visible = boolean('Visible', true);

    return (
      <div>
        {pageFiller}
        {visible && (
          <ModalAlert onEsc={action('onEsc')} onOutsideClick={action('onOutsideClick')} onOk={action('onOk')}>
            Thank you for submitting your report.
          </ModalAlert>
        )}
      </div>
    );
  })
  .add('Long message', () => {
    const visible = boolean('Visible', true);

    return (
      <div>
        {pageFiller}
        {visible && (
          <ModalAlert onEsc={action('onEsc')} onOutsideClick={action('onOutsideClick')} onOk={action('onOk')}>
            The David Rubenstein Show: Peer-to-Peer Conversations" explores successful leadership through the personal
            and professional choices of the most influential people in business. Renowned financier and philanthropist
            David Rubenstein travels the country talking to leaders to uncover their stories and their path to success.
            The first episode features Microsoft co-founder Bill Gates.
          </ModalAlert>
        )}
      </div>
    );
  })
  .add('alert()', () => {
    return (
      <div>
        <button onClick={() => alert('Hello world!')}>Open alert()</button>
        <br />
        <button
          onClick={() => {
            alert('The very first alert modal!');
            alert('One more.');
          }}
        >
          Open double alert
        </button>
      </div>
    );
  });
