import * as React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {rule} from 'p4-css';
import Modal, {ModalProps} from '../Modal';
import {theme} from '../../theme';

const className = rule({
  ...theme.font.sans,
  fz: '1.4em',
  lh: '1.5em',
  minW: '200px',
  maxW: '600px',
  ta: 'center',
  pad: `0 ${theme.space[2]}px`,
});

const footerClass = rule({
  d: 'flex',
  mar: `${theme.space[6]}px -${theme.space[5]}px -${theme.space[5]}px`,
  h: '50px',
});

const buttonClass = rule({
  ...theme.font.sans,
  w: '100%',
  bg: 'none',
  bd: 'none',
  out: 'none',
  h: '100%',
  cur: 'pointer',
  bgc: theme.positive,
  col: '#fff',
  trs: 'background-color .3s',
  '&:hover': {
    bgc: theme.silver,
  },
  '&:active': {
    bgc: theme.steel,
  },
});

export interface ModalAlertProps extends ModalProps {
  onOk?: React.MouseEventHandler<any>;
}

const ModalAlert: React.SFC<ModalAlertProps> = ({onOk, children, ...rest}) => {
  return (
    <Modal {...rest}>
      <div className={className}>
        {children}
        <div className={footerClass}>
          <button onClick={onOk} className={buttonClass}>
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const alert = (msg, props: ModalAlertProps = {}) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const onClose = () => {
    unmountComponentAtNode(div);
    document.body.removeChild(div);
  };

  render(
    <ModalAlert {...props} onOk={onClose} onEsc={onClose} onOutsideClick={onClose}>
      {msg}
    </ModalAlert>,
    div,
  );
};

export default ModalAlert;
