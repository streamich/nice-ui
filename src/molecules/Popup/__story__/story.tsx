import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Popup from '..';
import {Avatar} from '../../../atoms/Avatar';
import {ContextItem, ContextSep, ContextPane} from '../ContextMenu';

storiesOf('Molecules|Popup', module)
  .add('Default', () => (
    <Popup
      renderContext={() => (
        <ContextPane>
          <ContextItem big>Edit</ContextItem>
          <ContextItem big>Open</ContextItem>
        </ContextPane>
      )}
    >
      <Avatar name="Hello world" />
    </Popup>
  ))
  .add('Avatar', () => {
    const renderContext = () => (
      <ContextPane triangle right>
        <ContextItem big onClick={action('on create stream click')}>
          My streams
        </ContextItem>
        <ContextItem big onClick={action('my streams click')}>
          Create stream
        </ContextItem>
        <ContextSep />
        <ContextItem onClick={action('on sign out click')}>Sign out</ContextItem>
        <ContextSep />
      </ContextPane>
    );
    return (
      <div style={{padding: '50px 50px 50px 300px'}}>
        <Popup right round renderContext={renderContext} dx={-4} dy={14}>
          <Avatar size={2} name="Hello world" />
        </Popup>
      </div>
    );
  })
  .add('[right]', () => (
    <Popup
      right
      renderContext={() => (
        <ContextPane>
          <ContextItem big>Edit</ContextItem>
          <ContextItem big>Open</ContextItem>
        </ContextPane>
      )}
    >
      <Avatar name="Hello world" />
    </Popup>
  ))
  .add('[dx=10,dy=10]', () => (
    <Popup
      dx={10}
      dy={10}
      renderContext={() => (
        <ContextPane triangle>
          <ContextItem big>Edit</ContextItem>
          <ContextItem big>Open</ContextItem>
        </ContextPane>
      )}
    >
      <Avatar name="Hello world" />
    </Popup>
  ))
  .add('[open=true]', () => (
    <Popup
      open
      renderContext={({open}) =>
        open && (
          <ContextPane triangle>
            <ContextItem big>Edit</ContextItem>
            <ContextItem big>Open</ContextItem>
          </ContextPane>
        )
      }
    >
      <Avatar name="Hello world" />
    </Popup>
  ))
  .add('[open=false]', () => (
    <Popup
      renderContext={({open}) =>
        open && (
          <ContextPane>
            <ContextItem big>Edit</ContextItem>
            <ContextItem big>Open</ContextItem>
          </ContextPane>
        )
      }
    >
      <Avatar name="Hello world" />
    </Popup>
  ))
  .add('[auto]', () => (
    <Popup
      auto
      dx={-3}
      dy={5}
      renderContext={({open}) =>
        open && (
          <ContextPane triangle>
            <ContextItem big onClick={action('onClick', 'Edit')}>
              Edit
            </ContextItem>
            <ContextItem big onClick={action('onClick', 'Open')}>
              Open
            </ContextItem>
          </ContextPane>
        )
      }
    >
      <Avatar name="Hello world" />
    </Popup>
  ));
