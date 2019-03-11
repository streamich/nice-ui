import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';
import {Avatar} from '../../atoms/Avatar';
import SettingsDropdown, {size as moreSize} from '../SettingsDropdown';
import stopPropagation from '../../util/stopPropagation';
import {Ripple} from '../../atoms/Ripple';
import {P4Asset} from '../../util/types';
import {getStreamSlugPretty} from '../../util/slugs';

const borderRadius = 7;
const width = 300;
const height = 180;
const thumbWidth = 50;
const nameFontSize = 20;
const slugFontSize = nameFontSize * 0.6;
const avatarSize = 20;

const blockClass = rule({
  pos: 'relative',
  bg: '#fff',
  w: width + 'px',
  h: height + 'px',
  bdrad: borderRadius + 'px',
  bd: `1px solid ${theme.grey[8]}`,
  cur: 'pointer',
  trs: 'transform .2s',
  userSelect: 'none',
  '&:hover': {
    bd: `1px solid ${theme.grey[6]}`,
    boxShadow: '0 0 1px 3px rgba(0,0,0,.03)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
});

const blockThumbClass = rule({
  d: 'block',
  pos: 'absolute',
  w: thumbWidth + 'px',
  h: thumbWidth + 'px',
  left: (width - thumbWidth) / 2 + 'px',
  top: 7 + thumbWidth / 2 + 'px',
});

const nameClass = rule({
  ...theme.font.ui,
  d: 'block',
  pos: 'absolute',
  bxz: 'border-box',
  pad: '0 20px',
  w: '100%',
  h: nameFontSize + 2 + 'px',
  fz: nameFontSize + 'px',
  lh: nameFontSize + 'px',
  left: 0,
  ta: 'center',
  whiteSpace: 'nowrap',
  ov: 'hidden',
  textOverflow: 'ellipsis',
  top: 7 + thumbWidth * 1.7 + 'px',
});

const slugClass = rule({
  ...theme.font.mono,
  d: 'block',
  pos: 'absolute',
  bxz: 'border-box',
  pad: '0 20px',
  w: '100%',
  h: slugFontSize + 2 + 'px',
  fz: slugFontSize + 'px',
  lh: slugFontSize + 'px',
  left: 0,
  ta: 'center',
  col: theme.color1[2],
  whiteSpace: 'nowrap',
  ov: 'hidden',
  textOverflow: 'ellipsis',
  top: 7 + (thumbWidth * 1.7 + nameFontSize * 1.2) + 'px',
});

const moreClass = rule({
  d: 'block',
  pos: 'absolute',
  w: moreSize + 'px',
  h: moreSize + 'px',
  top: '5px',
  right: '10px',
  op: 0,
  trs: 'top .2s,opacity .2s',
  [`.${blockClass.trim()}:hover &`]: {
    top: '10px',
    op: 1,
  },
});

const avatarClass = rule({
  d: 'block',
  pos: 'absolute',
  w: avatarSize + 'px',
  h: avatarSize + 'px',
  bottom: '5px',
  left: '10px',
  op: 0,
  trs: 'bottom .2s,opacity .2s',
  [`.${blockClass.trim()}:hover &`]: {
    bottom: '10px',
    op: 1,
  },
});

const usernameClass = rule({
  ...theme.font.sansLite,
  fz: avatarSize * 0.6 + 'px',
  d: 'block',
  pos: 'absolute',
  w: width * 0.7 + 'px',
  h: avatarSize + 'px',
  lh: avatarSize + 'px',
  whiteSpace: 'nowrap',
  ov: 'hidden',
  textOverflow: 'ellipsis',
  bottom: '5px',
  left: avatarSize * 1.3 + 10 + 'px',
  op: 0,
  trs: 'bottom .2s,left .2s,opacity .2s',
  [`.${blockClass.trim()}:hover &`]: {
    bottom: '10px',
    op: 1,
  },
});

export interface Props {
  asset: P4Asset;
  onClick?: React.MouseEventHandler;
  renderContext?: () => React.ReactElement<any>;
}

const CardStream: React.SFC<Props> = ({asset, onClick, renderContext}) => {
  const thumb = (
    <div className={blockThumbClass}>
      <Avatar id={asset.id} width={thumbWidth} src={asset.pic} name={asset.name} square />
    </div>
  );

  const avatar = asset.creator && (
    <div className={avatarClass}>
      <Avatar id={asset.creator.id} width={avatarSize} src={asset.creator.pic} name={asset.creator.name} />
    </div>
  );

  const username = asset.creator && <div className={usernameClass}>{asset.creator.name}</div>;

  return (
    <Ripple color="rgba(31,45,61,.08)">
      <div className={blockClass} onClick={onClick}>
        {thumb}
        <div className={nameClass}>{asset.name}</div>
        <div className={slugClass}>{getStreamSlugPretty(asset)}</div>
        <div className={moreClass} onClick={stopPropagation}>
          <SettingsDropdown renderContext={renderContext} />
        </div>
        {avatar}
        {username}
      </div>
    </Ripple>
  );
};

export default CardStream;
