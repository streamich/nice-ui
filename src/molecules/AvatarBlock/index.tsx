import * as React from 'react';
import {Avatar} from '../../atoms/Avatar';
import {rule} from 'p4-css';
import FixedColumn from '../../atoms/FixedColumn';
import renderRight from './renderRight';

const classNameBlock = rule({
  d: 'flex',
  cur: 'pointer',
});

const classNameAvatar = rule({
  flexShrink: 0,
});

export interface AvatarBlockProps {
  id?: string; // Used for hashing.
  width?: number;
  src?: string;
  name?: string;
  subtext?: string;
  square?: boolean;
  className?: string;
  onClick?: () => void;
  onAvatarClick?: () => void;
  onNameClick?: () => void;
  onSubtextClick?: () => void;
  renderRight?: (props: AvatarBlockProps) => React.ReactElement<any>;
}

/**
 * Similar to <Avatar> but also allows to specify username
 * and other info.
 */
const AvatarBlock: React.SFC<AvatarBlockProps> = (props) => {
  const {id, src, width, name, square, onClick, onAvatarClick, renderRight, className = ''} = props;

  return (
    <FixedColumn left={width} className={className + classNameBlock} onClick={onClick}>
      <Avatar
        id={id}
        className={classNameAvatar}
        src={src}
        width={width}
        name={name}
        square={square}
        onClick={onAvatarClick}
      />
      {renderRight(props)}
    </FixedColumn>
  );
};

AvatarBlock.defaultProps = {
  width: 40,
  renderRight,
};

export default AvatarBlock;
