import * as React from 'react';
import {Portal} from 'libreact/lib/Portal';
import Progress from '../Progress';
import {progress as zIndex} from '../../zindex';

const h = React.createElement;

export interface ISpinnerProps {
  value?: number;
  maxUndone?: number;
  increment?: number;
  delay?: number;
  random?: number;
}

export interface ISpinnerState {
  value?: number;
}

class ProgressGlobal extends React.Component<ISpinnerProps, ISpinnerState> {
  static defaultProps = {
    value: 0.1,
    maxUndone: 0.7,
    increment: 0.01,
    random: 0.03,
    delay: 800,
  };

  state = {
    value: 0,
  };

  timer;
  timer2;

  componentDidMount() {
    this.timer = setInterval(() => {
      const increment = this.props.increment + Math.random() * this.props.random;
      let value = Math.min(this.props.maxUndone, increment + this.state.value);
      value = Math.max(value, this.state.value);

      this.setState({value});
    }, this.props.delay);

    this.timer2 = setTimeout(() => this.setState({value: this.props.value}), 35);
  }

  componentWillReceiveProps({value}) {
    if (value !== this.props.value) {
      this.setState({value});
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.timer2);
  }

  onElement = (el) => {
    const {style} = el;

    style.position = 'fixed';
    style.top = 0;
    style.left = 0;
    style.right = 0;
    style.width = '100%';
    style.height = '2px';
    style.zIndex = zIndex;
  };

  render() {
    if (this.state.value >= 1) {
      return null;
    }

    return h(Portal, {onElement: this.onElement}, h(Progress, {glow: 1, value: this.state.value} as any));
  }
}

export default ProgressGlobal;
