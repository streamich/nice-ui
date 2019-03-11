import * as React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {rule} from 'p4-css';
import Modal, {ModalProps} from '../Modal';
import {theme} from '../../theme';
import {withT} from 'use-t';

const className = rule({
  ...theme.font.sans,
  fz: '1.4em',
  lh: '1.5em',
  minW: '300px',
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
  w: '50%',
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

const buttonClassCancel = rule({
  ...theme.font.sans,
  bgc: theme.snow[1],
  col: theme.steel,
  '&:hover': {
    col: '#fff',
  },
  '&:active': {
    col: '#fff',
  },
});

export interface ModelConfirmProps extends ModalProps {
  onOk?: React.MouseEventHandler<any>;
  onCancel?: React.MouseEventHandler<any>;
}

const ModelConfirm: React.SFC<ModelConfirmProps> = withT(({onOk, onCancel, children, t, ...rest}) => {
  return (
    <Modal {...rest}>
      <div className={className}>
        {children}
        <div className={footerClass}>
          <button onClick={onCancel} className={buttonClass + buttonClassCancel}>
            {t('Cancel')}
          </button>
          <button onClick={onOk} className={buttonClass}>
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
});

export const confirm = (msg, props: ModelConfirmProps = {}): Promise<boolean> =>
  new Promise((resolve) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const close = () => {
      unmountComponentAtNode(div);
      document.body.removeChild(div);
    };

    const onClose = () => {
      close();
      resolve(false);
    };

    const onOk = () => {
      close();
      resolve(true);
    };

    render(
      <ModelConfirm {...props} onOk={onOk} onCancel={onClose} onEsc={onClose} onOutsideClick={onClose}>
        {msg}
      </ModelConfirm>,
      div,
    );
  });

export default ModelConfirm;
