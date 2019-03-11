import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';
import CardStream from '../../molecules/CardStream';
import {P4Asset} from '../../util/types';
import {ListTable} from 'libreact/lib/ListTable';
import {SizeSensor} from 'libreact/lib/SizeSensor';
import {InfiniteScroll} from 'libreact/lib/InfiniteScroll';

const className = rule({
  maxW: '1000px',
  mar: `${theme.space[6]}px auto`,
});

const streamClass = rule({
  pad: theme.space[4] + 'px',
});

export interface Props {
  assets: P4Asset[];
  loadMore?: () => void;
  hasMore?: boolean;
  cursor?: number | string;
  onBgClick?: React.MouseEventHandler;
  onStreamClick?: (asset: P4Asset) => void;
  renderContext?: (asset: P4Asset) => React.ReactElement<any>;
}

const GridStreams: React.SFC<Props> = ({
  assets,
  loadMore,
  cursor,
  hasMore,
  onBgClick,
  onStreamClick,
  renderContext,
}) => {
  return (
    <SizeSensor>
      {({width}) => (
        <div onClick={onBgClick}>
          <InfiniteScroll poll={500} loadMore={loadMore} cursor={cursor} hasMore={hasMore}>
            <ListTable className={className} cols={width > 930 ? 3 : width > 620 ? 2 : 1}>
              {assets.map((asset) => (
                <div key={asset.id} className={streamClass}>
                  <CardStream
                    asset={asset}
                    onClick={() => onStreamClick(asset)}
                    renderContext={() => renderContext(asset)}
                  />
                </div>
              ))}
            </ListTable>
          </InfiniteScroll>
        </div>
      )}
    </SizeSensor>
  );
};

export default GridStreams;
