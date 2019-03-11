import * as React from 'react';
import {classes, small} from './classes';
import ClickLine from '../../../../atoms/ClickLine';
import {SizerStreamPure} from '../../../../atoms/SizerStream';
import SettingsDropdown from '../../../../molecules/SettingsDropdown';
import {b1} from '../../../../css';

export interface Props extends React.HTMLAttributes<any> {
  width?: number;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onLineClick?: () => void;
  renderContext?: () => React.ReactElement<any>;
}

const Layout: React.SFC<Props> = ({width, left, right, onLineClick, renderContext, ...rest}) => {
  const isSmall = width < b1;
  const more = (
    <div className={classes.iconMore + (isSmall ? classes.iconMoreSmall : '')}>
      <SettingsDropdown renderContext={renderContext} />
    </div>
  );

  return (
    <div className={classes.wrap}>
      <SizerStreamPure
        onlyHorizontal
        width={width}
        height={0}
        className={'fadeIn ClickLine_hover' + classes.block + (isSmall ? small.block : '')}
      >
        <div className={classes.left + (isSmall ? small.left : '')}>
          {left}
          {isSmall && more}
        </div>
        {!isSmall && <ClickLine onClick={onLineClick} />}
        <div className={classes.right + (isSmall ? small.right : '')}>
          {right}
          {!isSmall && more}
        </div>
      </SizerStreamPure>
    </div>
  );
};

Layout.defaultProps = {
  width: Infinity,
  left: null,
  right: null,
};

export default Layout;
