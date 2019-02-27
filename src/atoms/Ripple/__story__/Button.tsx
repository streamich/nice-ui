import * as React from 'react';
import {Ripple} from '..';
import {jsx} from '../../../css';

const h = React.createElement;

export const theme = {
  color1: ['#29EB7F', '#13CE66', '#0F9F4F'],
  color2: ['#85D7FF', '#1FB6FF', '#009EEB'],
  color3: ['#A389F4', '#7E5BEF', '#592DEA'],
  color4: ['#FF7CE5', '#FF49DB', '#FF16D1'],
  color5: ['#FF9E7C', '#FF7849', '#FF5216'],
  color6: ['#FFD55F', '#FFC82C', '#F8B700'],
  black: '#1F2D3D',
  steel: '#273444',
  slate: '#3C4858',
  silver: '#8492A6',
  smoke: ['#E0E6ED', '#D3DCE6', '#C0CCDA'],
  snow: ['#F9FAFC', '#EFF2F7', '#E5E9F2'],
  blue: '#1FB6FF',
  positive: '#13CE66',
  negative: '#FF4949',
  warning: '#FFC82C',
};

export interface IButtonProps extends React.ButtonHTMLAttributes<any> {
  disabled?: boolean;
  primary?: boolean;
  lite?: boolean;
  small?: boolean;
  simple?: boolean;
  outline?: boolean;
}

const staticTemplate = {
  fz: '14px',
  textTransform: 'uppercase',
  letterSpacing: '0.14px',
  lh: '24px',
  trs: 'background 0.2s',
  mar: '10px 0 0',
  bdrad: '3px',
  bd: 0,
  background: 'red',
};

const ButtonWithRipple = (props) => {
  return h(Ripple, {ms: 1000, color: 'white'}, h('button', props));
};

const Button: React.SFC<IButtonProps> = jsx(ButtonWithRipple, staticTemplate);

export default Button;
