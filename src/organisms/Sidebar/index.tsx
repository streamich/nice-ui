import * as React from 'react';
import {rule} from '../../css';
import {sidebar as zIndex} from '../../zindex';
import {theme} from '../../theme';
import {Modal} from 'libreact/lib/Modal';
import {keyframes} from 'p4-css';

const slideFromLeft = keyframes({
  from: {
    left: '-300px',
  },
  to: {
    left: '0px',
  },
});

const className = rule(
  {
    zIndex,
    pos: 'fixed',
    h: '100%',
    bg: theme.grey[10],
    top: 0,
    left: 0,
    bdRad: 0,
    ov: 'hidden',
    willChange: 'left',
    animation: `${slideFromLeft} .3s`,
    maxW: '100vh',
    boxSizing: 'border-box',
    overflowY: 'scroll',
  },
  'Sidebar',
);

export interface ISidebarProps {
  width?: number;
  open?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.SFC<ISidebarProps> = ({children, open, width, onClose}) => {
  return (
    <>
      {open && (
        <Modal color="rgba(251,252,255,.5)" onClick={onClose} onEsc={onClose}>
          <div
            className={className}
            style={{
              left: open ? 0 : -width,
              width,
            }}
          >
            {children}
          </div>
        </Modal>
      )}
    </>
  );
};

Sidebar.defaultProps = {
  width: 300,
};
