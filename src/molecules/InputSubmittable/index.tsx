import * as React from 'react';
import {InputLine} from '../../molecules/InputLine';

export interface Props {
  className?: string;
  value?: string;
  label?: string;
  waiting?: boolean;
  transform?: (value: string) => string; // Called on every change.
  onSubmit: (value: string) => void;
}

export interface State {
  isFocused: boolean;
  value: string;
}

class InputSubmittable extends React.Component<Props, State> {
  static defaultProps = {
    value: '',
    transform: (value) => value,
  };

  state: State = {
    isFocused: false,
    value: this.props.value || '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({value: this.props.value});
    }
  }

  onChange = (value: string) => {
    this.setState({
      value: this.props.transform(value),
    });
  };

  onFocus = () => this.setState({isFocused: true});
  onBlur = () => this.onSubmit();

  onSubmit = (e?) => {
    if (e) e.preventDefault();
    const {value} = this.state;
    this.setState({
      isFocused: false,
      value: this.props.value,
    });
    this.props.onSubmit(value);
  };

  render() {
    return (
      <form className={this.props.className || ''} onSubmit={this.onSubmit}>
        <InputLine
          isInForm
          value={this.state.isFocused ? this.state.value : this.props.value}
          label={this.props.label}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={this.props.waiting}
          waiting={this.props.waiting}
        />
      </form>
    );
  }
}

export default InputSubmittable;
