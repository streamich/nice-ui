import * as React from 'react';
import {rule, theme, Scale, useTheme, useRule} from 'nano-theme';
import {Link} from '../../1-inline/Link';
import {Ripple} from '../../misc/Ripple';
import {useHoverBond} from '../../hooks/useHoverBond';
import {SpinnerCircle} from '../SpinnerCircle';

const h = React.createElement;

const buttonClass = rule({
  ...theme.font.ui3.mid,
  fz: '15px',
  d: 'inline-flex',
  w: 'auto',
  h: '40px',
  td: 'none',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  letterSpacing: '0.6px',
  lh: '24px',
  trs: 'background .2s, box-shadow .2s, color .2s',
  mar: 0,
  bdrad: '4px',
  bd: 0,
  pad: '0px 15px',
  minWidth: '50px',
  cur: 'pointer',
  whiteSpace: 'nowrap',
  '&:hover': {
    // boxShadow: `0 0 0 3px ${theme.color6[0]}`,
  },
  '&.color:hover': {
    boxShadow: 'none',
    'svg,svg path': {
      fill: '#fff',
    },
  },
  '&:disabled': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: `0 0 0 3px ${theme.color.sem.blue[0]}`,
  },
});

const buttonGreyClass = rule({
  '&.color': {
    'svg,svg path': {
      fill: theme.g(0.3),
    },
  },
});

const buttonGrayscaleIconClass = rule({
  'svg path': {
    fill: '#fff',
  },
  '&:hover svg path': {
    fill: '#fff',
  },
});

const buttonColorfulIconClass = rule({
  '&:hover svg path': {
    fill: '#fff',
  },
});

const buttonColoredHoverSvg = rule({
  '&:hover svg path': {
    fill: '#fff',
  },
});

const iconClass = rule({
  alignItems: 'center',
  d: 'flex',
});

const noOutlineClass = rule({
  boxShadow: 'none',
  out: 'none',
  '&:hover': {
    boxShadow: 'none',
    out: 'none',
  },
  '&:focus': {
    boxShadow: 'none',
    out: 'none',
  },
});

const displayClass = rule({
  ...theme.font.ui1.mid,
  textTransform: 'uppercase',
  letterSpacing: '.4px',
});

const blueClass = rule({
  svg: {
    stroke: theme.color.sem.blue[0],
    fill: theme.color.sem.blue[0],
  },
  '&:hover': {
    svg: {
      stroke: '#fff',
      fill: '#fff',
    },
  },
});

const bluePrimaryClass = rule({
  svg: {
    stroke: '#fff',
    fill: '#fff',
  },
});

export interface IButtonProps {
  [key: string]: any;
  block?: boolean;
  attr?: any;
  color?: string;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  icon?: React.ReactElement<any>;
  iconRight?: boolean;
  iconColorful?: boolean;
  dontColorIcon?: boolean;
  lite?: boolean;
  loading?: boolean;
  positive?: boolean;
  primary?: boolean;
  primaryColor?: string;
  size?: Scale;
  small?: boolean;
  simple?: boolean;
  outline?: boolean;
  submit?: boolean;
  display?: boolean;
  upper?: boolean;
  noRad?: boolean; // No border radius.
  noOutline?: boolean;
  blue?: boolean;
  round?: boolean;
  onClick?: React.MouseEventHandler<any>;
}

export const Button: React.FC<IButtonProps> = (props) => {
  /* eslint-disable */
  let {
    block,
    children,
    color,
    disabled,
    icon,
    iconRight,
    iconColorful,
    dontColorIcon,
    ghost,
    href,
    lite,
    loading,
    outline,
    positive,
    primary,
    primaryColor,
    simple,
    size = 0,
    style = {},
    upper,
    display,
    onClick,
    submit,
    noRad,
    noOutline,
    blue,
    round,
  } = props;
  /* eslint-enable */

  const theme = useTheme();
  const [isHover, hoverBond] = useHoverBond();

  const buttonGrayscaleIconLiteClass = useRule((theme) => ({
    'svg path': {
      fill: positive ? theme.color.sem.positive[0] : theme.g(0.3),
    },
    '&:hover svg path': {
      fill: positive ? theme.color.sem.positive[0] : theme.g(0.3),
    },
  }));

  let tag = 'button';

  if (loading) {
    disabled = true;
    icon = <SpinnerCircle />;
  }

  if (ghost) {
    outline = true;
    lite = true;
  }

  const buttonStyle: any = {
    background: lite
      ? 'transparent'
      : positive
        ? theme.color.sem.positive[0]
        : primary
          ? primaryColor || theme.color.sem.blue[0]
          : 'rgba(127,127,127,.2)',
    color: !lite && (primary || positive) ? '#fff' : theme.g(0.08),
  };

  if (size) {
    buttonStyle.height = `${size * 8 + 40}px`;
    if (size) {
      buttonStyle.fontSize = 15 + size * 2 + 'px';
    }
  }

  if (upper) {
    buttonStyle.textTransform = 'uppercase';
  }

  if (noRad) {
    buttonStyle.borderRadius = 1;
  } else if (round) {
    buttonStyle.borderRadius = 8;
  }

  const buttonProps: any = {
    ...hoverBond,
    className:
      (props.className || '') +
      buttonClass +
      (display ? displayClass : '') +
      (noOutline ? noOutlineClass : '') +
      (isHover && (positive || primary) ? (dontColorIcon ? '' : buttonColoredHoverSvg) : '') +
      (blue ? blueClass : '') +
      (blue && primary ? bluePrimaryClass : '') +
      (!primary && !positive && !blue && !iconColorful ? buttonGreyClass : '') +
      (dontColorIcon
        ? ''
        : iconColorful
          ? buttonColorfulIconClass
          : lite
            ? buttonGrayscaleIconLiteClass
            : buttonGrayscaleIconClass),
    onClick,
    style: buttonStyle,
  };

  if (disabled) {
    buttonProps.disabled = true;
    buttonStyle.opacity = 0.7;
    buttonStyle.cursor = 'not-allowed';
  } else {
    if (color) {
      buttonProps.className += ' color';
    }
  }

  if (outline) {
    buttonStyle.border = `1px solid ${positive ? theme.color.sem.positive[0] : theme.g(0.8)}`;
    if (positive) buttonStyle.color = theme.color.sem.positive[0];
  }

  if (href) {
    tag = Link as any;
    buttonProps.to = href;
    buttonProps.a = true;
  } else {
    if (submit) {
      buttonProps.type = 'submit';
    }
  }

  if (block) {
    buttonStyle.width = '100%';
  }

  let buttonElement = null;

  if (simple) {
    buttonStyle.border = `1px solid ${theme.color.sem.positive[1]}`;
    buttonStyle.background = '#fff';
    buttonStyle.color = theme.color.sem.positive[1];
  }

  if (isHover && !disabled) {
    buttonStyle.color = outline
      ? positive
        ? theme.color.sem.positive[1]
        : primary || positive || color
          ? '#fff'
          : theme.g(0.3)
      : primary || positive || color
        ? '#fff'
        : theme.g(0.3);
    buttonStyle.background = color
      ? color
      : outline
        ? 'transparent'
        : positive
          ? theme.color.sem.positive[1]
          : primary
            ? primaryColor
              ? theme.g(0.3)
              : theme.color.sem.blue[0]
            : 'rgba(180,180,180,.2)';
    if (outline) {
      buttonStyle.border = `1px solid ${positive ? theme.color.sem.positive[1] : theme.g(0.8)}`;
      if (positive) buttonStyle.color = theme.color.sem.positive[1];
    }
  }

  if (blue) {
    const col = primary ? '#fff' : theme.color.sem.blue[0];
    buttonStyle.color = col;
    if (!primary) buttonStyle.border = `1px solid ${theme.color.sem.blue[0]}`;
    buttonStyle.background = primary ? theme.color.sem.blue[0] : 'transparent';
    buttonStyle.stroke = col;
    buttonStyle.fill = col;
    if (isHover) {
      buttonStyle.color = '#fff';
      buttonStyle.background = primary ? '#06e' : theme.color.sem.blue[0];
      buttonStyle.stroke = '#fff';
      buttonStyle.fill = '#fff';
    }
  }

  if (icon) {
    const iconProps = {
      className: iconClass,
      style: {} as any,
    };

    if (children) {
      if (iconRight) {
        iconProps.style.paddingLeft = '8px';
      } else {
        iconProps.style.paddingRight = '8px';
      }
    }

    if (iconRight) {
      buttonElement = h(tag, {...buttonProps, ...hoverBond}, children, h('span', iconProps, icon));
    } else {
      buttonElement = h(tag, buttonProps, h('span', iconProps, icon), children);
    }
  } else {
    buttonElement = h(tag, buttonProps, children);
  }

  Object.assign(buttonStyle, style);

  if (typeof tag !== 'string') {
    buttonElement = h('div', {}, buttonElement);
  }

  return h(Ripple, {
    ms: block ? 400 : 1000,
    color: disabled ? 'transparent' : primary || positive || color || blue ? 'rgba(255,255,255,.85)' : 'rgba(0,0,0,.1)',
    children: buttonElement,
  });
};
