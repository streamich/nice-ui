import * as React from 'react';
import loadRaphael from '../../util/loadRaphael';
import {IAbcProps} from '.';
import {blockDefaultProps} from '../shared';

const h = React.createElement;

let Comp;

export interface IAbcAsyncProps extends IAbcProps {}

export interface IAbcAsyncState {
  Comp?: React.ComponentClass;
  error?: Error;
}

class AbcAsync extends React.Component<IAbcAsyncProps, IAbcAsyncState> {
  static defaultProps = blockDefaultProps;

  mounted = true;
  state: IAbcAsyncState;

  constructor(props) {
    super(props);

    this.state = {Comp};
  }

  async componentDidMount() {
    if (!this.state.Comp) {
      try {
        const [, component] = await Promise.all([loadRaphael(), await import('.')]);

        if (this.mounted) {
          Comp = component.default;
          this.setState({Comp});
        }
      } catch (error) {
        this.props.onError(error);
        this.setState({error});
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {props, state} = this;
    const {Comp, error} = state;

    if (error) {
      return props.renderError(props, error);
    }

    if (!Comp) {
      return props.renderLoading(props);
    }

    return h(Comp, props as any);
  }
}

export default AbcAsync;
