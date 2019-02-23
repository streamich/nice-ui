import {font} from './font';

const grey = [
  '#000', // 0
  '#1F2D3D',
  '#273444',
  '#3C4858',
  '#8492A6',
  '#C0CCDA', // 5
  '#D3DCE6',
  '#E0E6ED',
  '#E5E9F2',
  '#EFF2F7',
  '#F9FAFC', // 10
  '#FFF',
];

// https://flatuicolors.com/palette/nl
const color = [
  '#FFC312',
  '#F79F1F',
  '#EE5A24',
  '#EA2027',
  '#C4E538',
  '#A3CB38',
  '#009432',
  '#006266',
  '#12CBC4',
  '#1289A7',
  '#0652DD',
  '#1B1464',
  '#FDA7DF',
  '#D980FA',
  '#9980FA',
  '#ED4C67',
  '#ED4C67',
  '#B53471',
  '#833471',
  '#6F1E51',
];

const color1 = ['#29EB7F', '#13CE66', '#0F9F4F'];
const color2 = ['#85D7FF', '#1FB6FF', '#009EEB'];
const color3 = ['#A389F4', '#7E5BEF', '#592DEA'];
const color4 = ['#FF7CE5', '#FF49DB', '#FF16D1'];
const color5 = ['#FF9E7C', '#FF7849', '#FF5216'];
const color6 = ['#FFD55F', '#FFC82C', '#F8B700'];

/*
const gradient = {
  btn: `linear-gradient(to right,${color1[0]} 0%,${color1[1]} 100%)`,
  btnHover: `linear-gradient(to right,${color1[1]} 0%,${color1[2]} 100%)`,
  btnActive: `linear-gradient(to right,${grey[4]} 0%,${grey[5]} 100%)`,
};
*/

const createTheme = (grey) => {
  return {
    color,

    // Main colors.
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,

    // gradient,

    // Shades of grey.
    grey,
    black: grey[1],
    steel: grey[2],
    slate: grey[3],
    silver: grey[4],
    smoke: [grey[7], grey[6], grey[5]],
    snow: [grey[10], grey[9], grey[8]],

    // Semantic colors.
    blue: '#1FB6FF',
    positive: '#13CE66',
    negative: '#FF4949',
    warning: '#FFC82C',

    // Spaces is used for margin and padding scales.
    space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],

    font,

    // Typographic scale.
    fontSize: [12, 14, 16, 20, 24, 32, 48, 64, 96, 128],
  };
};

export const theme = createTheme(grey);
export const inverted = createTheme([...grey].reverse());
