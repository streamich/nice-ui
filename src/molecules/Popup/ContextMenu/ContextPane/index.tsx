import * as React from 'react';
import {sheet} from '../../../../css';
import {context as zIndex} from '../../../../zindex';

const styles = sheet(
  {
    pane: {
      zIndex,
      d: 'inline-block',
      pos: 'relative',
      bg: '#fff',
      lh: '1.2em',
      left: 'auto',
      right: 0,
      bdrad: '4px',
      boxShadow: '0 4px 8px -2px rgba(9,30,66,.25),0 0 13px rgba(9,30,66,.13),0 0 1px rgba(9,30,66,.2)',
      minWidth: '150px',
    },
    body: {
      pos: 'relative',
      zIndex: 2,
      bdrad: '4px',
      ov: 'hidden',
    },
    triangle: {
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
    },
  },
  'ContextPane',
);

export interface IContextPaneProps {
  right?: boolean;

  // Whether to not close the drop down on click event.
  dontClose?: boolean;
  triangle?: boolean;
}

export interface IContextPaneState {}

export const ContextPane: React.SFC<IContextPaneProps> = ({children, right, triangle}) => {
  const style: any = {};

  if (!right) {
    style.left = 0;
    style.right = 'auto';
  }

  return (
    <div className={'fiInflate' + styles.pane} style={style}>
      <div className={styles.body}>{children}</div>
      {triangle && (
        <div
          className={styles.triangle}
          style={{
            left: right ? 'auto' : 15,
            right: right ? 15 : 'auto',
          }}
        />
      )}
    </div>
  );
};
