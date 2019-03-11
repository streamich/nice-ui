import {P4Asset} from './types';

export type P4AssetSlugFields = Pick<P4Asset, 'type' | 'id' | 'slug' | 'creator'>;

const slugWithId = (id: string, slug?: string) => (slug ? `${slug}-${id}` : id);

const getUserSlug = ({type, slug, id}: P4AssetSlugFields) => (slug ? `@${slug}` : `${type}/${id}`);

const getAssetSlug = ({type, slug, id, creator}: P4AssetSlugFields) =>
  creator ? `${getUserSlug(creator)}/${type}/${slugWithId(id, slug)}` : `${type}/${slugWithId(id, slug)}`;

const getPostSlug = ({type, slug, id, creator}: P4AssetSlugFields) =>
  creator
    ? `${getUserSlug(creator)}/${slug ? slugWithId(id, slug) : `${type}/${id}`}`
    : `${type}/${slug ? slugWithId(id, slug) : id}`;

const getStreamSlug = ({type, slug, id, creator}: P4AssetSlugFields) =>
  creator ? `${getUserSlug(creator)}/${slug ? `~${slug}` : `${type}/${id}`}` : `${type}/${slugWithId(id, slug)}`;

// Below slug is not technically correct but it is used in <StreamMetadata>
// to display pretty text when user does not have a username yet.
export const getStreamSlugPretty = (stream: P4AssetSlugFields) =>
  stream.creator && stream.creator.slug ? getStreamSlug(stream) : stream.slug ? `~${stream.slug}` : '';

export const getSlug = (asset: P4Asset) => {
  switch (asset.type) {
    case 'p':
      return getPostSlug(asset);
    case 'u':
      return getUserSlug(asset);
    case 's':
      return getStreamSlug(asset);
    default:
      return getAssetSlug(asset);
  }
};
