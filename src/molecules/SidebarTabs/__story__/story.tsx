import * as React from 'react';
import {storiesOf} from '@storybook/react';
import SidebarTabs, {SidebarTab} from '..';

storiesOf('Molecules|SidebarTabs', module).add('Default', () => (
  <div
    style={{
      background: '#eee',
    }}
  >
    <SidebarTabs>
      <SidebarTab active>Public</SidebarTab>
      <SidebarTab>Private</SidebarTab>
    </SidebarTabs>
  </div>
));
