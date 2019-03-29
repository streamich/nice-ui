import * as React from 'react';
import {P4Asset} from '../../../util/types';
import Layout from './Layout';
import AvatarBlock from '../../../molecules/AvatarBlock';

export interface Props {
  width?: number;
  asset: P4Asset;
  onUserClick?: () => void;
  onPostClick?: (asset: P4Asset) => void;
  renderBody?: (asset: P4Asset) => React.ReactElement<any>;
  renderContext?: () => React.ReactElement<any>;
}

const noop = () => {};
const Comment: React.SFC<Props> = ({width, asset, onUserClick, onPostClick = noop, renderBody, renderContext}) => {
  let avatar: React.ReactElement<any> = null;

  if (asset.creator) {
    avatar = (
      <AvatarBlock id={asset.id} src={(asset.creator as any).pic} name={asset.creator.name} onClick={onUserClick} />
    );
  }

  return (
    <Layout
      width={width}
      left={avatar}
      right={renderBody(asset)}
      onLineClick={() => onPostClick(asset)}
      renderContext={renderContext}
    />
  );
};

export default Comment;
