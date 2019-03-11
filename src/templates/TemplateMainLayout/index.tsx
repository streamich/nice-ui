import * as React from 'react';
import {Sidebar} from '../../organisms/Sidebar';
import {TopNav} from '../../organisms/TopNav';
import {render, UniversalProps} from 'react-universal-interface';
import {rule} from '../../css';

const sidebarWidth = 300;
const classNameContent = rule({
  padt: '64px',
});
const classNameSidebarOffset = rule({
  trs: 'margin-left .2s',
});

export type Data = IMainLayoutProps;
export interface IMainLayoutProps extends UniversalProps<Data> {
  sidebarOpen?: boolean;
  onSidebarClose?: () => void;
  renderTopNav?: (data: Data) => React.ReactNode;
  renderSidebar?: (data: Data) => React.ReactNode;
}

const TemplateMainLayout: React.SFC<IMainLayoutProps> = (props) => {
  const {sidebarOpen, onSidebarClose, renderTopNav, renderSidebar} = props;
  const data = props;
  const element = render(props, data) as React.ReactElement<any>;
  const sidebarOffsetClassNames = classNameSidebarOffset;

  return (
    <>
      {renderTopNav && (
        <TopNav open>
          <div className={sidebarOffsetClassNames}>{renderTopNav(data)}</div>
        </TopNav>
      )}
      {renderSidebar && (
        <Sidebar open={sidebarOpen} width={sidebarWidth} onClose={onSidebarClose}>
          {renderSidebar(data)}
        </Sidebar>
      )}
      <div className={classNameContent + sidebarOffsetClassNames}>{element}</div>
    </>
  );
};

export default TemplateMainLayout;
