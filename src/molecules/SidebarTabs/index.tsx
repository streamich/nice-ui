import * as React from 'react';
import SidebarTab from './Tab';
import {rule} from 'p4-css';

export {SidebarTab};

const blockClass = rule({
  d: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignContent: 'stretch',
  h: '48px',
  lh: '48px',
});

export interface Props {}

const SidebarTabs: React.SFC<Props> = ({children}) => {
  return <div className={blockClass}>{children}</div>;
};

export default SidebarTabs;
