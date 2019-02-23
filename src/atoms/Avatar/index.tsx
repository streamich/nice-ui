import * as React from 'react';
import {theme} from '../../theme';
import {TSize} from '../../types';
import hashColor from '../../util/hashColor';
import {rule} from '../../css';

const h = React.createElement as any;
const sizes = [10, 16, 20, 24, 32, 40, 48, 64, 128, 256, 512];
const defaultSize = 4;
const fontSizeFactor = 0.5;

const classes = {
  block: rule(
    {
      // ...theme.font.sansLite,
      ...theme.font.ui,
      d: 'block',
      w: '32px',
      h: '32px',
      lh: '32px',
      bdrad: '50%',
      ov: 'hidden',
      bg: theme.color[0],
      col: '#fff',
      ta: 'center',
      fz: 32 * fontSizeFactor + 'px',
      mar: 0,
      pad: 0,
      bd: 0,
      cur: 'pointer',
      userSelect: 'none',
    },
    'Avatar_block',
  ),
  square: rule(
    {
      bdrad: '8%',
    },
    'Avatar_block-square',
  ),
  img: rule(
    {
      d: 'block',
      objectFit: 'cover',
      w: '32px',
      h: '32px',
    },
    'Avatar_img',
  ),
};

export interface AvatarProps extends React.HtmlHTMLAttributes<any> {
  id?: string; // Used for hashing.
  size?: TSize;
  width?: number;
  src?: string;
  name?: string;
  className?: string;
  square?: boolean;
}

export interface AvatarState {
  error?: boolean;
}

export class Avatar extends React.PureComponent<AvatarProps, AvatarState> {
  state: AvatarState = {};

  onError = () => {
    this.setState({error: true});
  };

  img(width?: number) {
    const props: any = {
      className: classes.img,
      src: this.props.src,
      onError: this.onError,
    };

    if (width) {
      props.style = {
        width,
        height: width,
      };
    }

    return <img {...props} />;
  }

  render() {
    const {id, name, size, src, width, className, square, ...rest} = this.props;
    const showText = this.state.error || !src;

    const props: React.HtmlHTMLAttributes<any> = rest;
    props.className = (this.props.className || '') + classes.block + (square ? classes.square : '');
    props.style = {...this.props.style} || {};

    const computedWidth: number = this.props.width || (size ? sizes[defaultSize + (this.props.size || 0)] : 0);

    if (computedWidth) {
      props.style.width = computedWidth;
      props.style.height = computedWidth;
      props.style.lineHeight = `${computedWidth}px`;
      props.style.fontSize = `${computedWidth * fontSizeFactor}px`;
    }

    if (showText && name) {
      props.style.background = hashColor(id || name);
    }

    return h('span', props, showText ? (name ? name.substr(0, 2) : '') : this.img(computedWidth));
  }
}
