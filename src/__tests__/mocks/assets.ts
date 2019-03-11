import {P4Asset} from '../../util/types';

export const asset1: P4Asset = {
  id: 'id_1',
  cid: 'id_2',
  type: 'p',
  src: 'Hello guys, how are you?',
  creator: {
    id: 'id_2',
    type: 'u',
    name: 'Alex Petersone',
    pic: 'https://avatars1.githubusercontent.com/u/9773803?s=460&v=4',
  },
};

export const asset2: P4Asset = {
  id: 'id_3',
  cid: 'id_4',
  type: 'p',
  src:
    'Hi! This is a very long post, it should be so long so that it does not fit into a signle line. Adding here one more sentences just to make it even longer.',
  creator: {
    id: 'id_4',
    type: 'u',
    name: 'Va Da',
  },
};

export const assetStream1: P4Asset = {
  id: 'id_5',
  cid: 'id_6',
  type: 'p',
  name: 'About Everything',
  slug: 'about-everything',
  src: 'My new stream.',
  creator: {
    id: 'id_6',
    type: 'u',
    name: 'Alex Petersone',
    pic: 'https://avatars1.githubusercontent.com/u/9773803?s=460&v=4',
  },
};

export const assetStream2: P4Asset = {
  id: 'id_7',
  cid: 'id_8',
  type: 'p',
  name: 'To be or not to be',
  src: 'My new stream.',
  creator: {
    id: 'id_8',
    type: 'u',
    name: 'Alex Petersone',
    pic: 'https://avatars1.githubusercontent.com/u/9773803?s=460&v=4',
  },
};

export const assetStream3: P4Asset = {
  id: 'id_9',
  cid: 'id_10',
  type: 'p',
  name: 'A Stream with a Very Very Long Title, this Title is so Long that it Does Not Fit Even on Three Lines',
  slug: 'a-stream-with-a-very-very-long-title',
  creator: {
    id: 'id_10',
    type: 'u',
    name: 'Alexandra Gustafsone Petersone',
    pic: 'https://avatars1.githubusercontent.com/u/9773803?s=460&v=4',
  },
};

export const assetStream4: P4Asset = {
  id: 'id_11',
  cid: 'id_12',
  type: 'p',
  name: 'Car sales',
  slug: 'car-sales',
  creator: {
    id: 'id_12',
    type: 'u',
    name: 'Alex Petersone',
    slug: 'apetersone',
    pic: 'https://avatars1.githubusercontent.com/u/9773803?s=460&v=4',
  },
};

export const list1 = {
  list: [asset1, asset2],
};

export const streams1 = [assetStream1, assetStream2, assetStream3, assetStream4];
