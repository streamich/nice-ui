import * as React from 'react';
import Close from '../Close';
import {rule} from 'p4-css';
import {Ripple} from '../../../Ripple';

const className = rule(
  {
    w: '64px',
    h: '64px',
    bdrad: '50%',
    boxSizing: 'border-box',
  },
  'CloseCircle',
);

export interface Props {
  onClick?: React.MouseEventHandler<any>;
}

const CloseCircle: React.SFC<Props> = ({onClick}) => {
  return (
    <Ripple color={'rgba(0,0,0,.06)'} ms={2_000}>
      <div className={className} onClick={onClick}>
        <Close style={{width: 64, height: 64}} />
      </div>
    </Ripple>
  );
};

export default CloseCircle;
