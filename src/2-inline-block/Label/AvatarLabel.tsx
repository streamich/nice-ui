import * as React from 'react';
import {LabelLayout, Props as LabelLayoutProps} from './LabelLayout';
import {LabelRight, Props as LabelRightProps} from './LabelRight';
import {Avatar, AvatarProps} from '../../1-inline/Avatar';

export interface Props extends LabelLayoutProps, LabelRightProps {
  avatar: AvatarProps;
}

export const AvatarLabel: React.FC<Props> = (props) => {
  return (
    <LabelLayout {...props} icon={<Avatar {...props.avatar} />}>
      <LabelRight {...props} />
    </LabelLayout>
  );
};
