import * as React from 'react';
import {Toggle} from 'libreact/lib/Toggle';
import {Sidebar} from '..';
import {Checkbox} from '../../../molecules/Checkbox';

const T = Toggle as any;

export const SidebarToggle = (props) => {
  return (
    <T
      render={({on, toggle}) => (
        <div>
          <Sidebar open={on}>Hello</Sidebar>
          <div style={{position: 'absolute', left: 400, top: 30}}>
            <Checkbox on={on} onChange={toggle} />
          </div>
        </div>
      )}
    />
  );
};
