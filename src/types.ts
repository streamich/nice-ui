export type TSize = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;

// P4 asset: post, stream, user, etc.
export interface P4Asset {
  id: string;
  src?: string;
  name?: string;
  creator?: P4Asset;
  pic?: string;
}
