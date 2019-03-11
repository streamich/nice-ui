import * as React from 'react';
import {css} from '../../../css';
import IconSvgClose from '../../../atoms/icons/svg/Close';
import {theme} from '../../../theme';
import {noop} from '../../../util';
import SpinnerBars from '../../../atoms/SpinnerBars';

const h = React.createElement;
let id = 0;

export interface IInputLineProps {
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

export interface IInputLineState {
  focus?: boolean;
  hover?: boolean;
}

@css({
  pos: 'relative',
  ov: 'hidden',
  '&.disabled': {
    op: 0.7,
  },
  '&>input': {
    col: theme.steel,
    w: '100%',
    mar: 0,
    bd: 0,
    out: 0,
    ff: theme.font.alt.ff,
    fw: theme.font.alt.fw,
  },
  '&>label': {
    pos: 'absolute',
    left: 0,
    top: '20px',
    col: theme.silver,
    fz: '20px',
    ff: theme.font.sansLite.ff,
    fw: theme.font.sansLite.fw,
    trs: 'top 0.2s, font-size 0.2s',
    transitionDelay: '0.2s',
    pointerEvents: 'none',
  },
  '&>label.small': {
    top: '7px',
    fz: '14px',
  },
  '&>label.focus': {
    top: 0,
    fz: '12px',
    col: theme.slate,
  },
  '&>label.small.focus': {
    top: '-2px',
    fz: '9px',
  },
  '&>.rightIcon': {
    pos: 'absolute',
    d: 'block',
    w: '16px',
    h: '16px',
    pad: '20px',
    top: 0,
    right: 0,
    cur: 'pointer',
  },
  '&>svg': {
    pos: 'absolute',
    top: 0,
    left: 0,
    w: '300%',
    h: '100%',
    fill: 'transparent',
    pointerEvents: 'none',
    stroke: theme.smoke[0],
    trs: 'transform 0.8s, stroke-width 0.8s, stroke 0.8s',
  },
})
export class InputLine extends React.Component<IInputLineProps, IInputLineState> {
  static defaultProps = {
    type: 'text',
    placeholder: '',
  };

  id = 'InputLine-' + id++;
  input: HTMLInputElement = null;
  state: IInputLineState = {};

  ref = (input) => (this.input = input);

  componentDidMount() {
    const {props, input} = this;
    const {focus, select, value} = props;

    if (focus) input.focus();
    if (select && value) input.select();
  }

  onMouseEnter = () => this.setState({hover: true});
  onMouseLeave = () => this.setState({hover: false});

  onChange = (e) => {
    (this.props.onChange || noop)(e.target.value);
  };

  onFocus = () => {
    this.setState({focus: true});
    (this.props.onFocus || noop)();
  };

  onBlur = () => {
    this.setState({focus: false});
    (this.props.onBlur || noop)();
  };

  onKeyDown = (e) => {
    if (this.props.isInForm && e.key === 'Enter') {
      this.input.blur();
    }
  };

  onCancelClick = (e) => {
    e.preventDefault();
    this.props.onCancelClick();
  };

  render() {
    const {props, state} = this;
    const {disabled, value = '', onCancelClick, onPaste, small, label, readOnly, type, waiting} = props;
    const {focus} = state;
    const showClose = value && onCancelClick;

    let style: any = {
      padding: small ? '10px 0 8px' : '19px 0 17px',
      fontSize: 18 * (small ? 0.9 : 1.3) + 'px',
    };

    if (showClose) {
      style.paddingRight = 50;
    }

    if (props.style) {
      style = {...style, ...props.style};
    }

    let rightIcon = null;

    if (waiting) {
      rightIcon = h('a', {className: 'rightIcon'}, h(SpinnerBars));
    } else if (showClose) {
      rightIcon = h('a', {className: 'rightIcon', onClick: this.onCancelClick}, h(IconSvgClose));
    }

    const svgAttr: any = {
      viewBox: '0 0 1200 60',
      preserveAspectRatio: 'none',
    };

    if (focus) {
      svgAttr.style = {
        transform: 'translate3d(-66%, 0, 0)',
        stroke: theme.color1[1],
        strokeWidth: small ? '2px' : '3px',
      };
    }

    const inputAttr: any = {
      ref: this.ref,
      disabled,
      value,
      type,
      readOnly,
      style,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onPaste,
    };
    let labelElement = null;

    if (label) {
      inputAttr.id = this.id;

      const labelAttr: any = {
        className: '' + (small ? ' small' : '') + (value || focus ? ' focus' : ''),
        htmlFor: this.id,
      };

      labelElement = h('label', labelAttr, label);
    }

    return h(
      'div',
      {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
      },
      h('input', inputAttr),
      labelElement,
      rightIcon,
      h(
        'svg',
        svgAttr,
        h('path', {
          d:
            'M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0',
        }),
      ),
    );
  }
}
