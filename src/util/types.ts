export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface P4Asset {
  id: string;
  cid: string;
  type: string;
  pid?: string;
  name?: string;
  prn?: string;
  src?: string;
  slug?: string;
  pic?: string;
  creator?: Pick<P4Asset, 'id' | 'type' | 'name' | 'src' | 'slug' | 'pic'>;
}
