import * as React from 'react';
import {Button} from './Button';
import {Iconista} from '../../icons/Iconista';
import {Scale} from 'nano-theme';

export interface Props {
  primary?: boolean;
  fill?: boolean;
  icon?: React.ReactElement;
  loading?: boolean;
  size?: Scale;
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonAdd: React.FC<Props> = ({
  primary,
  fill,
  icon = <Iconista set="auth0" icon="plus" width={16} height={16} />,
  onClick,
  children,
  ...rest
}) => {
  if (primary) {
    return (
      <Button primary={fill} blue noOutline dontColorIcon icon={icon!} onClick={onClick}>
        {children}
      </Button>
    );
  }

  return (
    <Button {...rest} icon={icon} ghost noOutline onClick={onClick}>
      {children}
    </Button>
  );
};
