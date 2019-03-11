import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';
import {AvatarBlockProps} from '.';

const className = rule({
  w: '100%',
  ov: 'hidden',
});

const classNameName = rule({
  ...theme.font.sansLite,
  lh: 1.2,
  color: theme.color1[2],
  mar: 0,
  whiteSpace: 'nowrap',
  ov: 'hidden',
  textOverflow: 'ellipsis',
  w: '100%',
  flexBasis: '100%',
  d: 'block',
  '&:hover': {
    color: theme.color1[1],
  },
});

const classNameSubtext = rule({
  ...theme.font.sansLite,
  lh: 1.3,
  color: theme.steel,
  mar: 0,
  whiteSpace: 'nowrap',
  ov: 'hidden',
  textOverflow: 'ellipsis',
  '&:hover': {
    color: theme.black,
  },
});

const renderRight = (props: AvatarBlockProps) => {
  const {width, name, subtext, onAvatarClick, onNameClick = onAvatarClick, onSubtextClick = onAvatarClick} = props;

  return (
    <div
      className={className}
      style={{
        padding: `${width * 0.1}px ${width * 0.2}px 0`,
        fontSize: width * 0.42 + 'px',
      }}
    >
      <div className={classNameName} onClick={onNameClick}>
        {name}
      </div>
      {subtext && (
        <div
          className={classNameSubtext}
          style={{
            fontSize: width * 0.25 + 'px',
          }}
          onClick={onSubtextClick}
        >
          {subtext}
        </div>
      )}
    </div>
  );
};

export default renderRight;
