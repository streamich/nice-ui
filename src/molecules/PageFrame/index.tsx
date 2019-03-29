import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';
import {frame as z} from '../../zindex';

const blockClass = rule({
  pos: 'fixed',
  z,
  top: 0,
  left: 0,
  w: '100vw',
  h: '100vh',
  bxz: 'border-box',
  bdrad: '3px',
  bd: '5px solid ' + theme.color1[1],
  bdw: '5px',
  boxShadow: 'inset 0 0 10px ' + theme.color1[1],
  trs: 'border .2s,box-shadow .2s',
});

const disabledStyles: React.CSSProperties = {
  borderWidth: '0px',
  boxShadow: 'inset 0 0 10px transparent',
};

export interface Props {
  disabled?: boolean;
}

export const PageFrame: React.FC<Props> = ({disabled}) => {
  return <div className={blockClass} style={disabled ? disabledStyles : {}} />;
};
