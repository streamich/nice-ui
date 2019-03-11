import * as React from 'react';
import Box from '../Box';
import Comments from '../Comments';
import {P4Asset} from '../../util/types';
import {rule} from 'p4-css';
import {theme} from '../../theme';

const classNameBox = rule({
  pad: `${theme.space[3]}px ${theme.space[4]}px`,
});

const classNameComments = rule({
  mar: '10px 0 0',
});

export interface Props {
  value: string;
  onChange: React.ChangeEventHandler<any>;
  stream: P4Asset;
  assets: P4Asset[];
  onSubmit?: () => void;
  onPostClick?: (asset: P4Asset) => void;
  renderBody: (asset: P4Asset) => React.ReactElement<void>;
}

const Stream: React.SFC<Props> = ({assets, value, onChange, onSubmit, onPostClick, renderBody}) => {
  return (
    <>
      <div className={classNameBox}>
        <Box value={value} onChange={onChange} onSubmit={onSubmit} />
      </div>
      <Comments className={classNameComments} assets={assets} onPostClick={onPostClick} renderBody={renderBody} />
    </>
  );
};

export default Stream;
