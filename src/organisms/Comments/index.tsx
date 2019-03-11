import * as React from 'react';
import {SizeSensor} from 'libreact/lib/SizeSensor';
import {P4Asset} from '../../util/types';
import Comment from './Comment';
import {InfiniteScroll} from 'libreact/lib/InfiniteScroll';
import {rule} from 'p4-css';
import {theme} from '../../theme';

const classNameBlock = rule({
  pad: `${theme.space[3]}px 0`,
});

export interface Props extends React.HTMLAttributes<any> {
  assets: P4Asset[];
  onPostClick?: (asset: P4Asset) => void;
  loadMore?: () => void;
  hasMore?: boolean;
  cursor?: number | string;
  renderBody: (asset: P4Asset) => React.ReactElement<any>;
  renderContext?: (asset: P4Asset) => React.ReactElement<any>;
}

const Comments: React.SFC<Props> = ({
  assets,
  hasMore,
  cursor,
  loadMore,
  onPostClick,
  className = '',
  renderBody,
  renderContext,
  ...rest
}) => {
  return (
    <SizeSensor>
      {({width}) => (
        <div {...rest} className={className + classNameBlock}>
          <InfiniteScroll loadMore={loadMore} cursor={cursor} hasMore={hasMore}>
            {assets.map((asset) => (
              <Comment
                key={asset.id}
                width={width}
                asset={asset}
                onPostClick={onPostClick}
                renderBody={renderBody}
                renderContext={renderContext ? () => renderContext(asset) : undefined}
              />
            ))}
          </InfiniteScroll>
        </div>
      )}
    </SizeSensor>
  );
};

Comments.defaultProps = {
  hasMore: false,
};

export default Comments;
