import * as React from 'react';
import {Button} from './Button';
import FacebookIcon from '../atoms/icons/svg/Facebook';
import {TSize} from '../types';

export interface IButtonFacebookProps {
  disabled?: boolean;
  onClick?: () => void;
  onlyIcon?: boolean;
  size?: TSize;
}

const icon = <FacebookIcon size={20} />;

const ButtonFacebook: React.SFC<IButtonFacebookProps> = ({disabled, onClick, onlyIcon, size}) => (
  <Button ghost disabled={disabled} color="#47639E" size={size} icon={icon} style={{width: '100%'}} onClick={onClick}>
    {!onlyIcon && 'Facebook'}
  </Button>
);

export default ButtonFacebook;
