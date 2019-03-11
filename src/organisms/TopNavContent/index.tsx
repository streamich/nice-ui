import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';
import {LogoInteractive} from '../../atoms/LogoInteractive';
import {Split} from '../../atoms/Split';
import {height} from '../TopNav';
import {m1} from '../../css';

const leftClass = rule({
  d: 'flex',
  pad: `0 ${theme.space[4]}px 0 ${theme.space[4] - 5}px`,
  alignItems: 'center',
  h: height + 'px',
  [m1]: {
    padl: `${theme.space[3] - 5}px`,
    padr: `${theme.space[3]}px`,
  },
});

const rightClass = rule({
  d: 'flex',
  pad: `0 ${theme.space[4]}px`,
  alignItems: 'center',
  justifyContent: 'center',
  h: height + 'px',
  [m1]: {
    padl: `${theme.space[3]}px`,
    padr: `${theme.space[3]}px`,
  },
});

export interface Props {
  onLogoClick?: React.MouseEventHandler<any>;
  renderLeft: () => React.ReactNode;
  renderRight: () => React.ReactNode;
}

const TopNavContent: React.SFC<Props> = ({onLogoClick, renderLeft, renderRight}) => {
  return (
    <Split>
      <div className={leftClass}>
        <LogoInteractive size={42} onClick={onLogoClick} />
        {renderLeft()}
      </div>
      <div className={rightClass}>{renderRight()}</div>
    </Split>
  );
};

export default TopNavContent;
