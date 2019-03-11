import * as React from 'react';
import AvatarBlock from '../../molecules/AvatarBlock';
import {P4Asset} from '../../util/types';
import {getStreamSlugPretty, getSlug} from '../../util/slugs';
import {classes} from './css';
import {withT} from 'use-t';

export interface Props {
  stream: P4Asset;
  width?: number;
  onStreamAvatarClick?: React.MouseEventHandler<any>;
}

const StreamMetadata: React.SFC<Props> = withT(({stream, t, width = Infinity, onStreamAvatarClick}) => {
  return (
    <div className={'fadeInDown' + classes.block}>
      <AvatarBlock
        id={stream.id}
        className={classes.streamAvatar}
        width={36}
        square
        name={stream.name}
        subtext={getStreamSlugPretty(stream)}
        onAvatarClick={onStreamAvatarClick}
      />
      {width > 600 && (
        <>
          <div className={classes.by}>{t('by')}</div>
          <AvatarBlock
            id={stream.creator.id}
            className={classes.creatorAvatar}
            width={36}
            name={stream.creator.name}
            src={stream.creator.pic}
            subtext={getSlug(stream.creator)}
          />
        </>
      )}
    </div>
  );
});

export default StreamMetadata;
