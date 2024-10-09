import * as React from 'react';
import {rule, theme} from 'nano-theme';
import {SpinnerBars} from '../SpinnerBars';
import {NotchedOutline} from '../NotchedOutline';
import {Split} from '../../3-list-item/Split';

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
  size?: number;
  isInForm?: boolean;
  style?: any;
  waiting?: boolean;
  inp?: (input: HTMLInputElement | null) => void;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onPaste?: () => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const {disabled, value = '', onPaste, label, readOnly, type = 'text', waiting} = props;
  const [focus, setFocus] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);

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

  let rightIcon = null;

  if (waiting) {
    rightIcon = <SpinnerBars />;
  }

  const inputAttr: any = {
    ref: (input: HTMLInputElement | null) => {
      ref.current = input;
      props.inp?.(input);
    },
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

  let element: React.ReactNode = <input {...inputAttr} onChange={(e) => (props.onChange || noop)(e.target.value)} />;

  if (rightIcon) {
    element = (
      <Split style={{alignItems: 'center'}}>
        {element}
        {rightIcon}
      </Split>
    );
  }

  return (
    <NotchedOutline label={label} active={focus} disabled={disabled || readOnly}>
      {element}
    </NotchedOutline>
  );
};
