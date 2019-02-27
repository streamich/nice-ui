import * as React from 'react';
import {extend} from 'fast-af/extend';
import {HoverSensor} from 'libreact/lib/HoverSensor';
import {Ripple} from '../../atoms/Ripple';
import {sheet} from '../../css';
import {theme} from '../../theme';
import {TSize} from '../../types';
import Spinner from '../../atoms/SpinnerCircle';

const h = React.createElement;

const styles = sheet(
  {
    button: {
      d: 'inline-flex',
      w: 'auto',
      h: '40px',
      td: 'none',
      boxSizing: 'border-box',
      justifyContent: 'center',
      alignItems: 'center',
      fz: '14px',
      ff: theme.font.altLite.ff,
      fw: theme.font.altLite.fw,
      letterSpacing: '0.14px',
      lh: '24px',
      trs: 'background .2s, box-shadow .2s, color .2s',
      mar: 0,
      bdrad: '3px',
      bd: 0,
      pad: '0px 15px',
      minWidth: '50px',
      cur: 'pointer',
      '&:hover': {
        boxShadow: `0 0 0 3px ${theme.color6[0]}`,
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
        boxShadow: `0 0 0 3px ${theme.blue}`,
      },
    },
    icon: {
      alignItems: 'center',
      d: 'flex',
    },
  },
  'Button',
);

export interface IButtonProps {
  [key: string]: any;
  block?: boolean;
  attr?: any;
  color?: string;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  icon?: React.ReactElement<any>;
  lite?: boolean;
  loading?: boolean;
  positive?: boolean;
  primary?: boolean;
  size?: TSize;
  small?: boolean;
  simple?: boolean;
  outline?: boolean;
  submit?: boolean;
  upper?: boolean;
  noRad?: boolean; // No border radius.
  onClick?: React.MouseEventHandler<any>;
}

export const Button: React.SFC<IButtonProps> = (props) => {
  /* tslint:disable */
  let {
    block,
    children,
    color,
    disabled,
    icon,
    ghost,
    href,
    lite,
    loading,
    outline,
    positive,
    primary,
    simple,
    size,
    style = {},
    upper,
    onClick,
    submit,
    noRad,
  } = props;
  /* tslint:enable */

  return h(HoverSensor, {bond: true}, ({bond, isHover}) => {
    let tag = 'button';

    if (loading) {
      disabled = true;
      icon = <Spinner />;
    }

    if (ghost) {
      outline = true;
      lite = true;
    }

    const buttonStyle: any = {
      background: positive
        ? theme.color1[1]
        : primary
        ? theme.color2[1]
        : lite
        ? 'transparent'
        : 'rgba(127,127,127,.2)',
      color: primary || positive ? '#fff' : theme.slate,
    };

    if (size) {
      buttonStyle.height = `${size * 8 + 40}px`;
    }

    if (upper) {
      buttonStyle.textTransform = 'uppercase';
    }

    if (noRad) {
      buttonStyle.borderRadius = 1;
    }

    const buttonProps: any = {
      className: (props.className || '') + styles.button,
      onClick,
      style: buttonStyle,
    };

    if (disabled) {
      buttonProps.disabled = true;
      buttonStyle.opacity = 0.7;
      buttonStyle.cursor = 'default';
    } else {
      if (color) {
        buttonProps.className += ' color';
      }
    }

    if (outline) {
      buttonStyle.border = '1px solid rgba(0,0,0,.1)'; // TODO: Should use outline instead.
    }

    if (href) {
      tag = 'a';
      buttonProps.href = href;
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
      buttonStyle.border = `1px solid ${theme.color1[3]}`;
      buttonStyle.background = '#fff';
      buttonStyle.color = theme.color1[3];
    }

    if (isHover && !disabled) {
      buttonStyle.color = primary || positive || color ? '#fff' : theme.slate;
      buttonStyle.background = color
        ? color
        : positive
        ? theme.color1[0]
        : primary
        ? theme.color2[2]
        : 'rgba(180,180,180,.2)';
    }

    if (icon) {
      const iconProps = {
        className: styles.icon,
        style: {} as any,
      };

      if (children) {
        iconProps.style.paddingRight = '8px';
      }

      buttonElement = h(tag, (extend as any)(buttonProps, bond), h('span', iconProps, icon), children);
    } else {
      buttonElement = h(tag, (extend as any)(buttonProps, bond), children);
    }

    extend(buttonStyle, style);

    return h(
      Ripple,
      {
        ms: block ? 400 : 1000,
        color: disabled ? 'transparent' : primary || positive || color ? 'rgba(255,255,255,.85)' : 'rgba(0,0,0,.1)',
      },
      buttonElement,
    );
  });
};

Button.defaultProps = {
  size: 0,
};
