import * as React from 'react';
import {rule, theme, useTheme} from 'nano-theme';
import IconSvgClose from '../../icons/svg/Close';
import {SpinnerBars} from '../SpinnerBars';
import {NotchedOutline} from '../NotchedOutline';

const inpClass = rule({
  ...theme.font.ui2.bold,
  fz: '15px',
  lh: '1.4em',
  d: 'block',
  w: 'auto',
  bxz: 'border-box',
  bd: 0,
  bdrad: '4px',
  mr: 0,
  pd: '4px 5px',
  out: 0,
  '&:disabled': {
    bg: 'transparent',
  },
});

const {createElement: h, useState, useCallback, useRef, useEffect} = React;
const noop = () => {};

export interface InputProps {
  disabled?: boolean;
  value?: string;
  label?: string;
  type?: 'text' | 'password' | 'email';
  focus?: boolean;
  select?: boolean;
  readOnly?: boolean;
  small?: boolean;
  isInForm?: boolean;
  style?: any;
  waiting?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onPaste?: () => void;
  onCancelClick?: () => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const {disabled, value = '', onPaste, small, label, readOnly, type = 'text', waiting} = props;
  const [focus, setFocus] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    if (!ref.current) return;
    if (!props.focus) return;
    if (props.focus) ref.current.focus();
    if (props.select) ref.current.select();
  }, [ref.current]);

  const onFocus = useCallback(() => {
    setFocus(true);
    (props.onFocus || noop)();
  }, [props.onFocus]);
  const onBlur = useCallback(() => {
    setFocus(false);
    (props.onBlur || noop)();
  }, [props.onBlur]);
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!ref.current) return;
      if (props.isInForm && e.key === 'Enter') {
        ref.current.blur();
      }
    },
    [ref.current],
  );
  const onCancelClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (props.onCancelClick) props.onCancelClick();
    },
    [props.onCancelClick],
  );

  const showClose = value && !!props.onCancelClick;

  let rightIcon = null;

  if (waiting) {
    rightIcon = h('a', {className: 'rightIcon'}, h(SpinnerBars));
  } else if (showClose) {
    rightIcon = h('a', {className: 'rightIcon', onClick: onCancelClick}, h(IconSvgClose));
  }

  const svgAttr: any = {
    viewBox: '0 0 1200 60',
    preserveAspectRatio: 'none',
  };

  if (focus) {
    svgAttr.style = {
      transform: 'translate3d(-66%, 0, 0)',
      stroke: theme.color.sem.positive[1],
      strokeWidth: small ? '2px' : '3px',
    };
  }

  const inputAttr: any = {
    ref,
    className: inpClass,
    disabled,
    value,
    type,
    readOnly,
    onFocus,
    onBlur,
    onKeyDown,
    onPaste,
  };

  return (
    <NotchedOutline label={label} active={focus} disabled={disabled || readOnly}>
      <input {...inputAttr} onChange={(e) => (props.onChange || noop)(e.target.value)} />
      {rightIcon}
    </NotchedOutline>
  );
};
