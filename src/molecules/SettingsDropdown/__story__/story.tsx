import * as React from 'react';
import {storiesOf} from '@storybook/react';
import SettingsDropdown from '..';
import {ContextPane, ContextItem} from '../../Popup/ContextMenu';

storiesOf('Molecules|SettingsDropdown', module)
  .add('Default', () => <SettingsDropdown renderContext={() => <div>context...</div>}>Select..</SettingsDropdown>)
  .add('Context menu', () => (
    <div style={{margin: '50px 300px'}}>
      <SettingsDropdown
        renderContext={() => (
          <>
            <ContextItem big>Test</ContextItem>
          </>
        )}
      >
        Select..
      </SettingsDropdown>
    </div>
  ))
  .add('[left]', () => (
    <div style={{margin: '50px 300px'}}>
      <SettingsDropdown
        left
        renderContext={() => (
          <>
            <ContextItem big>Test</ContextItem>
          </>
        )}
      >
        Select..
      </SettingsDropdown>
    </div>
  ));
