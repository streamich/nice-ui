/* tslint:disable */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs/react';
import ModelConfirm, {confirm} from '..';

const pageFiller = [];
for (let i = 0; i < 100; i++) {
  pageFiller.push('This is some content that should be blurred out.');
  pageFiller.push(<br key={'br-' + i} />);
}

storiesOf('Organisms|ModelConfirm', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const visible = boolean('Visible', true);

    return (
      <div>
        {pageFiller}
        {visible && (
          <ModelConfirm onEsc={action('onEsc')} onOutsideClick={action('onOutsideClick')} onOk={action('onOk')}>
            Thank you for submitting your report.
          </ModelConfirm>
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
          <ModelConfirm onEsc={action('onEsc')} onOutsideClick={action('onOutsideClick')} onOk={action('onOk')}>
            The David Rubenstein Show: Peer-to-Peer Conversations" explores successful leadership through the personal
            and professional choices of the most influential people in business. Renowned financier and philanthropist
            David Rubenstein travels the country talking to leaders to uncover their stories and their path to success.
            The first episode features Microsoft co-founder Bill Gates.
          </ModelConfirm>
        )}
      </div>
    );
  })
  .add('confirm()', () => {
    return (
      <div>
        <button onClick={() => confirm('Hello world!').then(console.log)}>Open confirm()</button>
        <br />
        <button
          onClick={() => {
            confirm('The very first confirm modal!').then(console.log);
            confirm('One more.').then(console.log);
          }}
        >
          Open double alert
        </button>
      </div>
    );
  });
