import * as React from 'react';
import {Button} from './Button';
import GoogleIcon from '../atoms/icons/svg/Google';
import {TSize} from '../types';
import {string} from 'prop-types';

export interface IButtonGoogleProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<any>;
  onlyIcon?: boolean;
  size?: TSize;
  text?: string;
}

const icon = <GoogleIcon size={20} />;

const ButtonGoogle: React.SFC<IButtonGoogleProps> = ({disabled, onClick, onlyIcon, size, text}) => (
  <Button ghost disabled={disabled} color="#DD4B39" size={size} icon={icon} style={{width: '100%'}} onClick={onClick}>
    {!onlyIcon && (text || 'Google')}
  </Button>
);

export default ButtonGoogle;
