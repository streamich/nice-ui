import * as React from 'react';

export interface IThrottleProps {
  ms?: number;
}

export interface IThrottleState {
  children: any;
}

export class Throttle extends React.Component<IThrottleProps, IThrottleState> {
  static defaultProps = {
    ms: 200,
  };

  timeout;
  nextChildren;

  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,
    };
  }

  componentDidUpdate() {
    this.reset();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  reset() {
    const {children} = this.props;

    if (!this.timeout) {
      this.setState({children});
      this.timeout = setTimeout(() => {
        this.timeout = null;
        if (this.nextChildren) {
          this.setState({children});
        }
      }, this.props.ms);
    } else {
      this.nextChildren = children;
    }
  }

  render() {
    return this.state.children;
  }
}
