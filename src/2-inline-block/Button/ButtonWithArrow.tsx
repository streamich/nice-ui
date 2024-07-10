import * as React from 'react';
import Svg from 'iconista';
import {Button} from './Button';

const icon = <Svg set="atlaskit" icon="arrow-right" width={18} height={18} style={{padding: '0 16px 0 4px'}} />;

export interface Props {
  primary?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export const ButtonWithArrow: React.FC<Props> = ({primary, onClick, children}) => {
  return (
    <Button positive ghost={primary ? undefined : true} size={1} noOutline onClick={onClick} icon={icon} iconRight>
      <span style={{padding: '0 0 0 16px'}}>{children}</span>
    </Button>
  );
};
