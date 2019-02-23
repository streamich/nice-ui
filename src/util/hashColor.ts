import {theme} from '../theme';
import hash from '../util/hash';

const hashColor = (str) => theme.color[hash(str) % theme.color.length];

export default hashColor;
