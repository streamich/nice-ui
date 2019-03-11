import * as React from 'react';
import {P4Asset} from '../../util/types';
import ModalFullScreen from '../ModalFullScreen';
import GridStream from '../GridStreams';

export interface Props {
  assets: P4Asset[];
  onClose?: () => void;
  onStreamClick?: (asset: P4Asset) => void;
}

const ModalFullScreenStreams: React.SFC<Props> = ({assets, onClose, onStreamClick}) => {
  return (
    <ModalFullScreen noBorders noPadding noBackground onCloseClick={onClose} onEsc={onClose} onOutsideClick={onClose}>
      <GridStream assets={assets} onStreamClick={onStreamClick} />
    </ModalFullScreen>
  );
};

export default ModalFullScreenStreams;
