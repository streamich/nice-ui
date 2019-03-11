import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';
import Popup from '../../molecules/Popup';
import Svg from '../../atoms/icons/svg/More';
import {ContextPane} from '../Popup/ContextMenu';

export const size = 40;

const className = rule({
  pos: 'relative',
  w: size + 'px',
  h: size + 'px',
  bg: '#fff',
});

const classNameToggle = rule({
  pos: 'relative',
  w: size + 'px',
  h: size + 'px',
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cur: 'pointer',
  '&:hover': {
    bg: theme.snow[1],
    bdrad: '3px',
  },
});

const classNameBorder = rule({
  pos: 'relative',
  w: size * 0.7 + 'px',
  h: size * 0.3 + 'px',
  '& svg': {
    mar: `-${size * 0.2}px 0 0`,
    fill: theme.steel,
  },
  [`.${classNameToggle.trim()}:hover & svg`]: {
    fill: '#000',
  },
});

export interface Props {
  left?: boolean;
  renderContext?: () => React.ReactElement<any>;
}

const SettingsDropdown: React.SFC<Props> = ({renderContext, left}) => {
  if (!renderContext) {
    return null;
  }

  return (
    <div className={className}>
      <Popup
        right={!left}
        dx={left ? 1 : 0}
        dy={-3}
        renderContext={() => (
          <ContextPane triangle right={!left}>
            {renderContext()}
          </ContextPane>
        )}
      >
        <div className={classNameToggle}>
          <div className={classNameBorder}>
            <Svg />
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default SettingsDropdown;
