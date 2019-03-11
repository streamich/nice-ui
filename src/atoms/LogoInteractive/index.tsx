import * as React from 'react';
import {css} from '../../css';
import {theme} from '../../theme';

const h = React.createElement;
const ms = 150;
const defaultSize = 48;

export interface ILogoInteractiveProps extends React.AllHTMLAttributes<any> {
  inverted?: boolean;
  size?: number;
  theme?: any;
}

export interface ILogoInteractiveState {
  hover?: boolean;
  keyframe?: number;
}

@css(
  {
    bg: 'transparent',
    cur: 'pointer',
    bd: 0,
    pos: 'relative',
    ff: theme.font.sansBlack.ff,
    fw: theme.font.sansBlack.fw,
    ta: 'center',
    h: defaultSize + 'px',
    w: defaultSize + 'px',
    lh: defaultSize + 'px',
    fz: (defaultSize * 2.85) / 3 + 'px',
    out: 'none',
    trs: 'transform .1s',
    userSelect: 'none',
    '&:hover': {
      animation: 'logo-hover .4s linear',
    },
    '&:active': {
      transform: 'scale(.9)',
    },
    '&>span': {
      zIndex: 2,
      pos: 'absolute',
    },
    '&>.a': {
      top: 0,
      trs: `left ${ms}ms`,
    },
    '&>.b': {
      top: 0,
      trs: `left ${ms}ms`,
    },
  },
  'LogoInteractive',
)
export class LogoInteractive extends React.Component<ILogoInteractiveProps, ILogoInteractiveState> {
  static defaultProps = {
    size: 48,
  };

  timeout1;
  timeout2;

  state: ILogoInteractiveState = {
    hover: false,
    keyframe: 0,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout1);
    clearTimeout(this.timeout2);
  }

  onMouseEnter = () => {
    this.setState(
      {
        hover: true,
        keyframe: 1,
      },
      () => {
        this.timeout1 = setTimeout(() => {
          if (this.state.hover) {
            this.setState({
              keyframe: 2,
            });
          }
        }, ms);
      },
    );
  };

  onMouseLeave = () => {
    this.setState(
      {
        hover: false,
        keyframe: 1,
      },
      () => {
        this.timeout2 = setTimeout(() => {
          this.setState({keyframe: 0});
        }, ms);
      },
    );
  };

  render() {
    const {size, theme: currentTheme = theme, inverted, ...rest} = this.props;
    const {keyframe} = this.state;

    let style = null;

    if (size !== defaultSize) {
      style = {
        height: size,
        width: size,
        lineHeight: size + 'px',
        fontSize: (size * 2.85) / 3 + 'px',
      };
    }

    return h(
      'button',
      {
        style,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        ...rest,
      },
      h(
        'span',
        {
          className: 'a',
          style: {
            color: currentTheme.grey[inverted ? 3 : 1],
            left: keyframe === 1 ? size * (-5 / 48) : size * (2 / 48),
          },
        },
        'P',
      ),
      h(
        'span',
        {
          className: 'b',
          style: {
            color: currentTheme.grey[inverted ? 4 : 4],
            left: keyframe === 1 ? size * (27 / 48) : size * (20 / 48),
            zIndex: keyframe === 2 ? 1 : 3,
          },
        },
        '4',
      ),
    ) as JSX.Element;
  }
}
