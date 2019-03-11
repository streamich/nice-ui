import * as React from 'react';
import {Space} from '../../atoms/Space';
import {LogoLoop} from '../LogoLoop';
import SpinnerBars from '../SpinnerBars';
import {theme} from '../../theme';
import {AfterTimeout} from 'libreact/lib/AfterTimeout';

export interface Props {
  ms?: number;
}

const SpinnerLogo: React.SFC<Props> = ({ms}) => {
  return (
    <AfterTimeout ms={ms}>
      <div className="fadeIn" style={{textAlign: 'center', margin: theme.space[3]}}>
        <LogoLoop />
        <Space padt={2}>
          <SpinnerBars />
        </Space>
      </div>
    </AfterTimeout>
  );
};

SpinnerLogo.defaultProps = {
  ms: 300,
};

export default SpinnerLogo;
