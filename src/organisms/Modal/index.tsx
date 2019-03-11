import * as React from 'react';
import {Modal as BaseModal} from 'libreact/lib/Modal';
import {rule, keyframes, put} from 'p4-css';
import {theme} from '../../theme';
import CloseCircle from '../../atoms/icons/interactive/CloseCircle';
import {Lifecycles} from 'libreact/lib/Lifecycles';

const animation = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(.8)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
});

const className = rule({
  pos: 'relative',
  bgc: theme.grey[theme.grey.length - 1],
  minW: '280px',
  minH: '80px',
  bxz: 'border-box',
  fz: '14px',
  ov: 'hidden',
  animation: `${animation} .3s`,
});

const classNameBorders = rule({
  boxShadow: '0 0 3px rgba(0,0,0,.1), 0 2px 6px rgba(0,0,0,.05), 0 5px 20px rgba(0,0,0,.02)',
  bdrad: '4px',
});

const classNameNoBg = rule({
  bg: 'transparent',
});

const classNameTitle = rule({
  ...theme.font.altLite,
  pos: 'absolute',
  fz: theme.fontSize[1] + 'px',
  top: theme.space[5] + 'px',
  left: theme.space[4] + 'px',
  col: theme.silver,
  userSelect: 'none',
});

const classNameClose = rule({
  pos: 'absolute',
  z: 2,
  top: theme.space[2] + 'px',
  right: theme.space[2] + 'px',
});

const classNameContent = rule({
  pos: 'relative',
  z: 2,
  pad: `${theme.space[6] + theme.space[4]}px ${theme.space[4]}px  ${theme.space[5]}px`,
});

export interface ModalProps {
  title?: React.ReactNode;
  onEsc?: React.KeyboardEventHandler<any>;
  onOutsideClick?: React.MouseEventHandler<any>;
  onCloseClick?: React.MouseEventHandler<any>;
  footer?: React.ReactElement<any>;
  noBorders?: boolean;
  noBackground?: boolean;
  noPadding?: boolean;
}

const modalGlobalClassName = '__p4_modal';
const addBodyClass = () => document.body.classList.add(modalGlobalClassName);
const removeBodyClass = () => document.body.classList.remove(modalGlobalClassName);

const Modal: React.SFC<ModalProps> = ({
  title,
  noBorders,
  noBackground,
  noPadding,
  onEsc,
  onOutsideClick,
  onCloseClick,
  children,
}) => {
  let titleElement: React.ReactElement<any> | null = null;

  if (title) {
    titleElement = <div className={classNameTitle}>{title}</div>;
  }

  return (
    <Lifecycles didMount={addBodyClass} willUnmount={removeBodyClass}>
      <BaseModal onClick={onOutsideClick as any} onEsc={onEsc as any} color="rgba(255,255,255,.8)">
        <div
          className={
            'fadeInScale' + className + (noBorders ? '' : classNameBorders) + (noBackground ? classNameNoBg : '')
          }
        >
          {titleElement}
          {onCloseClick && (
            <div className={classNameClose}>
              <CloseCircle onClick={onCloseClick} />
            </div>
          )}
          {noPadding ? children : <div className={classNameContent}>{children}</div>}
        </div>
      </BaseModal>
    </Lifecycles>
  );
};

export default Modal;
