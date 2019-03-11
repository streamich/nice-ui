import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Sidebar} from '..';
import {SidebarToggle} from './SidebarToggle';
import SidebarTabs, {SidebarTab} from '../../../molecules/SidebarTabs';

storiesOf('Organisms|Sidebar', module)
  .add('Basic', () => <Sidebar open>Content...</Sidebar>)
  .add('Toggle sidebar', () => <SidebarToggle />)
  .add('With tabs', () => (
    <Sidebar open>
      <SidebarTabs>
        <SidebarTab active>Public</SidebarTab>
        <SidebarTab>Private</SidebarTab>
      </SidebarTabs>
    </Sidebar>
  ))
  .add('Scrollable content', () => (
    <Sidebar open>
      hello
      <div style={{width: 100, height: 2000, border: '1px solid red'}} />
      world
    </Sidebar>
  ));
