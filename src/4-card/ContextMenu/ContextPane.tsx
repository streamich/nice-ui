import * as React from 'react';
import {rule, useTheme, ZINDEX} from 'nano-theme';

const paneClass = rule({
  z: ZINDEX.CONTEXT,
  d: 'inline-block',
  pos: 'relative',
  lh: '1.2em',
  left: 'auto',
  right: 0,
  bdrad: '3px',
  minWidth: '150px',
  trs: 'transform .45s cubic-bezier(.2,2,0,1), opacity .3s',
});

const bodyClass = rule({
  pos: 'relative',
  zIndex: 2,
  bdrad: '4px',
});

const triangleClass = rule({
  pos: 'absolute',
  zIndex: 1,
  w: '7px',
  h: '7px',
  top: '2px',
  transform: 'rotate(45deg) translate(-5px,-5px)',
  bdl: '1px solid rgba(0,0,0,.15)',
  bdt: '1px solid rgba(0,0,0,.15)',
  bdr: '1px solid #fff',
  bdb: '1px solid #fff',
  bg: '#fff',
  borderTopLeftRadius: '2px',
  boxShadow: '0 -1px 1px rgba(0,0,0,.035)',
});

export interface ContextPaneProps {
  right?: boolean;

  // Whether to not close the drop down on click event.
  dontClose?: boolean;
  triangle?: boolean;
  hide?: boolean;

  canOverflow?: boolean;

  minWidth?: number;

  onClick?: React.MouseEventHandler;

  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface IContextPaneState {}

export const ContextPane: React.FC<ContextPaneProps> = ({
  children,
  right,
  triangle,
  canOverflow,
  minWidth,
  hide,
  style,
  onClick,
}) => {
  const theme = useTheme();

  const blockStyle: React.CSSProperties = {
    ...(style || {}),
    background: theme.isLight ? theme.bg : theme.g(0.98),
    boxShadow: theme.isLight
      ? '0 4px 8px -2px rgba(9,30,66,.25),0 0 13px rgba(9,30,66,.13),0 0 1px rgba(9,30,66,.2)'
      : `0 0 0 1px ${theme.g(0.1, 0.16)}`,
  };

  if (minWidth) {
    blockStyle.minWidth = minWidth;
  }

  if (!right) {
    blockStyle.left = 0;
    blockStyle.right = 'auto';
  }

  if (hide !== undefined) {
    blockStyle.transform = hide ? 'scale(.85)' : 'scale(1)';
    blockStyle.opacity = hide ? 0 : 1;
  }

  return (
    <div className={'fiInflate' + paneClass} style={blockStyle} onClick={onClick}>
      <div className={bodyClass} style={{overflow: canOverflow ? 'visible' : undefined}}>
        {children}
      </div>
      {triangle && (
        <div
          className={triangleClass}
          style={{
            left: right ? 'auto' : 15,
            right: right ? 15 : 'auto',
          }}
        />
      )}
    </div>
  );
};
