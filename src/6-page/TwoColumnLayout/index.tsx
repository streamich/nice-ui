import * as React from 'react';
import StickyBox from 'react-sticky-box';
import {rule} from 'nano-theme';
import Drawer from '@material-ui/core/Drawer';
import {NiceUiSizes} from '../../constants';
import useWindowSize from 'react-use/lib/useWindowSize';
import BasicButton from '../../2-inline-block/BasicButton';
import {Iconista} from '../../icons/Iconista';

const padding = 32;

const blockClass = rule({
  d: 'flex',
  alignItems: 'flex-start',
  bxz: 'border-box',
  maxW: '1300px',
  mar: '0 auto',
  '@media only screen and (max-width: 1000px)': {
    padt: '8px',
  },
});

const blockSmallScreenClass = rule({
  d: 'block',
});

const asideClass = rule({
  bxz: 'border-box',
  flex: `0 0 ${NiceUiSizes.SidebarWidth}px`,
  pad: `0 ${padding}px 0 0`,
  '@media only screen and (max-width: 1000px)': {
    w: '100%',
    pad: '4px 16px 16px 0',
  },
});

const sectionClass = rule({
  bxz: 'border-box',
  flex: '1 1',
  maxW: `calc(100% - ${NiceUiSizes.SidebarWidth + padding}px)`,
  pad: `16px 0 16px ${padding}px`,
  [`.${blockSmallScreenClass.trim()} &`]: {
    pad: '16px 24px',
  },
});

export interface Props {
  top?: number;
  left: React.ReactNode;
  right: React.ReactNode;
}

const TwoColumnLayout: React.FC<Props> = ({top = 0, left, right}) => {
  const [sidebar, setSidebar] = React.useState(false);
  const {width} = useWindowSize();

  if (width < 1000) {
    return (
      <>
        <Drawer anchor={'left'} open={sidebar} onClose={() => setSidebar((x) => !x)}>
          <div style={{padding: '32px 16px'}} onClick={() => setSidebar(false)}>
            {left}
          </div>
        </Drawer>
        <div className={blockClass + blockSmallScreenClass}>
          <div className={asideClass} style={{paddingTop: 16, paddingBottom: 16}}>
            <BasicButton border size={32} onClick={() => setSidebar((x) => !x)}>
              <Iconista set="ant_outline" icon="menu" width={16} height={16} />
            </BasicButton>
          </div>
          <section>{right}</section>
        </div>
      </>
    );
  }

  const S = StickyBox as any;

  return (
    <div className={blockClass}>
      <S offsetTop={top}>
        <div className={asideClass}>{left}</div>
      </S>
      <section className={sectionClass}>{right}</section>
    </div>
  );
};

export default TwoColumnLayout;
