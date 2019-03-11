import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';
import Modal, {ModalProps} from '../Modal';

const className = rule({
  w: '100vw',
  h: '100vh',
  bxz: 'border-box',
  overflowY: 'scroll',
});

const classNamePadding = rule({
  pad: `${theme.space[6]}px ${theme.space[4]}px  ${theme.space[5]}px`,
});

const ModalFullScreen: React.SFC<ModalProps> = ({children, noPadding, ...rest}) => {
  return (
    <Modal {...rest} noBorders noPadding>
      <div className={className + (noPadding ? '' : classNamePadding)}>{children}</div>
    </Modal>
  );
};

export default ModalFullScreen;
