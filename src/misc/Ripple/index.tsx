import {Component, Children, cloneElement, createElement as h, ReactNode, MouseEvent} from 'react';
import {rule} from 'nano-theme';

const noop = () => {};

const rippleClass = rule({
  bdrad: '50%',
  h: '100px',
  w: '100px',
  pos: 'absolute',
  transform: 'scale(0)',
  op: 1,
  pointerEvents: 'none',
  '@keyframes decor-ripple': {
    '100%': {
      transform: 'scale(12)',
      op: 0,
    },
  },
});

export interface RippleProps {
  color?: string;
  disabled?: boolean;
  ms?: number;
  children: ReactNode;
}

// eslint-disable-next-line
export interface IRippleState {}

export class Ripple extends Component<RippleProps, IRippleState> {
  static defaultProps = {
    color: 'rgba(0,0,0,.2)',
    ms: 400,
  };

  el: HTMLElement | null = null;
  elRipple: HTMLDivElement | null = null;

  ref = (originalRef: (el: HTMLDivElement) => void) => (el: HTMLDivElement) => {
    this.el = el;
    (originalRef || noop)(el);
  };

  refRipple = (el: HTMLDivElement) => {
    this.elRipple = el;
  };

  onMouseDown = (originalMouseDown: (ev: MouseEvent) => void) => (event: MouseEvent) => {
    if (!this.elRipple || !this.el) return;
    const {left, top} = this.el.getBoundingClientRect();
    const posX = left + window.scrollX;
    const posY = top + window.scrollY;
    const elX = event.pageX - posX;
    const elY = event.pageY - posY;
    const style = this.elRipple.style;
    style.removeProperty('animation');
    style.top = elY - 50 + 'px';
    style.left = elX - 50 + 'px';
    setTimeout(() => {
      style.setProperty('animation', `decor-ripple ${this.props.ms}ms linear`);
    }, 35);
    (originalMouseDown || noop)(event);
  };

  render() {
    const {children, color} = this.props;
    const element = Children.only(children) as React.ReactElement;
    const ripple = h('div', {
      className: rippleClass,
      style: {
        background: color,
      },
      ref: this.refRipple,
    });

    let style = element.props.style || {};

    style = Object.assign({}, style, {
      overflow: 'hidden',
      position: 'relative',
    });

    const innerChildren = Children.toArray(element.props.children);

    return cloneElement(
      element,
      {
        ...element.props,
        style,
        ref: this.ref(element.props.ref),
        onMouseDown: this.onMouseDown(element.props.onMouseDown),
      },
      ...[ripple, ...innerChildren],
    ) as JSX.Element;
  }
}
