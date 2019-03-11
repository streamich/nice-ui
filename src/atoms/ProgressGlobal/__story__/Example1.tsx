import * as React from 'react';
import ProgressGlobal from '..';

export class Example1 extends React.Component<any, any> {
  state = {
    value: 0.5,
  };

  render() {
    return (
      <div>
        <ProgressGlobal value={this.state.value} />

        <br />

        <button onClick={() => this.setState({value: this.state.value - 0.1})}>Decrease</button>
        <button onClick={() => this.setState({value: this.state.value + 0.1})}>Increase</button>
      </div>
    );
  }
}
