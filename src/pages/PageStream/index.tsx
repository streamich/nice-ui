import * as React from 'react';
import {P4Asset} from '../../util/types';

export interface Props {
  stream: P4Asset;
  renderStream: () => React.ReactElement<any>;
}

const PageStream: React.SFC<Props> = ({stream, renderStream}) => {
  if (!stream) {
    return null;
  }
  return <>{renderStream()}</>;
};

export default PageStream;
