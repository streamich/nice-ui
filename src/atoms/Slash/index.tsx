import {Component, Children, cloneElement, createElement as h} from 'react';
import {sheet} from '../../css';
import {noop} from '../../util';

const styles = sheet(
  {
    ripple: {
      h: '100px',
      w: '100px',
      pos: 'absolute',
      transform: 'rotate(45deg) scaleX(0) scaleY(12)',
      op: 1,
      pointerEvents: 'none',
      '@keyframes decor-slash': {
        '100%': {
          transform: 'rotate(45deg) scaleX(12) scaleY(12)',
          op: 0,
        },
      },
    },
  },
  'util_Slash',
);

export interface ISlashProps {
  color?: string;
  disabled?: boolean;
  ms?: number;
}

export interface ISlashState {}

export class Slash extends Component<ISlashProps, ISlashState> {
  static defaultProps = {
    color: 'rgba(0,0,0,.2)',
    ms: 400,
  };

  el: HTMLElement = null;
  elRipple: HTMLDivElement = null;

  ref = (originalRef) => (el) => {
    this.el = el;
    (originalRef || noop)(el);
  };

  refRipple = (el) => {
    this.elRipple = el;
  };

  onMouseDown = (originalMouseDown) => (event) => {
    if (!this.elRipple) {
      return;
    }

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
      style.setProperty('animation', `decor-slash ${this.props.ms}ms linear`);
    }, 35);

    (originalMouseDown || noop)(event);
  };

  render() {
    const {children, color} = this.props;
    const element = Children.only(children) as React.ReactElement;
    const ripple = h('div', {
      className: styles.ripple,
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

    innerChildren.push(ripple);

    return cloneElement(
      element,
      {
        ...element.props,
        style,
        ref: this.ref(element.props.ref),
        onMouseDown: this.onMouseDown(element.props.onMouseDown),
      },
      ...innerChildren,
    ) as JSX.Element;
  }
}
