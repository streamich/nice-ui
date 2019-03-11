import * as React from 'react';
import {P4Asset} from '../../util/types';
import AvatarBlock from '../../molecules/AvatarBlock';
import {rule} from 'p4-css';
import {theme} from '../../theme';
import {getStreamSlugPretty} from '../../util/slugs';
import {InfiniteScroll} from 'libreact/lib/InfiniteScroll';

const noop = () => {};

const classes = {
  block: rule(
    {
      pad: `${theme.space[4]}px 0`,
    },
    'ListStreams_block',
  ),
  item: rule(
    {
      padding: `${theme.space[2]}px ${theme.space[4]}px`,
      '&:hover': {
        bgc: 'rgba(0,0,0,.01)',
      },
    },
    'ListStreams_item',
  ),
};

export interface Props {
  assets: P4Asset[];
  hasMore?: boolean;
  cursor?: number | string | null;
  loadMore?: () => void;
  onStreamClick?: (asset: P4Asset) => void;
}

const ListStreams: React.SFC<Props> = ({assets, onStreamClick, loadMore, cursor = null, hasMore = false}) => {
  return (
    <div className={classes.block}>
      <InfiniteScroll loadMore={loadMore} cursor={cursor} hasMore={hasMore} poll={500}>
        {assets.map((asset) => (
          <AvatarBlock
            key={asset.id}
            id={asset.id}
            className={classes.item}
            width={32}
            square
            name={asset.name}
            subtext={getStreamSlugPretty(asset)}
            onClick={() => onStreamClick(asset)}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

ListStreams.defaultProps = {
  onStreamClick: noop,
};

export default ListStreams;
