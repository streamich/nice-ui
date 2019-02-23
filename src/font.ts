import {isClient} from './util';

const ff =
  'Ubuntu,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Cantarell,"Open Sans","Helvetica Neue",sans-serif';

export interface ICssFont {
  ff: string;
  fw: number;
}

export interface ICssFontMap {
  [key: string]: ICssFont;
}

export const font = {
  sansLite: {fw: 300, ff: '"Open Sans",sans-serif'},
  sans: {fw: 400, ff: '"Open Sans",sans-serif'},
  sansBold: {fw: 700, ff: '"Open Sans",sans-serif'},
  sansBlack: {fw: 800, ff: '"Open Sans",sans-serif'},

  mono: {
    fw: null,
    ff: '"Menlo","DejaVu Sans Mono","Roboto Mono","Fira Mono","Cousine",Consolas,"Liberation Mono",Courier,monospace',
  },
  monoAlt: {
    fw: null,
    ff: '"Fira Mono","Cousine",Consolas,"Liberation Mono",Courier,monospace',
  },

  serifLite: {fw: 300, ff: '"Merriweather","Linux Libertine"'},
  serif: {fw: 400, ff: '"Merriweather","Linux Libertine"'},
  serifBold: {fw: 700, ff: '"Merriweather","Linux Libertine"'},

  slabLite: {fw: 300, ff: '"Roboto Slab"'},
  slab: {fw: 400, ff: '"Roboto Slab"'},
  slabBold: {fw: 700, ff: '"Roboto Slab"'},

  altLite: {fw: 300, ff: 'Roboto,sans-serif'},
  alt: {fw: 500, ff: 'Roboto,sans-serif'},

  // TODO: Very nice font for UI dropdown:
  // "Source Sans Pro",Calibri,Candara,Arial,sans-serif
  ui: {fw: 400, ff},

  baseLine: 16,
};

if (isClient) {
  const loadFont = (name: string) => {
    const href = 'https://fonts.googleapis.com/css?family=' + name;
    const el = document.createElement('link');

    el.href = href;
    el.rel = 'stylesheet';
    el.type = 'text/css';

    document.head.appendChild(el);
  };

  loadFont(
    'Open+Sans:300,400,700,800|Roboto+Mono|Merriweather:300,400,700|Roboto+Slab:300,400,700|Roboto:300,500|Ubuntu:400&subset=cyrillic',
  );
}
