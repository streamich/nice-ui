import * as React from 'react';
import {IMarkdownBlockCodeProps, blockDefaultProps} from '../shared';
import loadCharchem from '../../util/loadCharchem';

export interface State {
  loading: boolean;
  error: any;
  Comp: React.ComponentType<any> | null;
}
class ChemAsync extends React.Component<IMarkdownBlockCodeProps, State> {
  static defaultProps = blockDefaultProps;

  state: State = {
    loading: true,
    error: null,
    Comp: null,
  };
  mounted = false;

  async componentDidMount() {
    this.mounted = true;
    try {
      const [Comp] = await Promise.all([import('./Chem'), loadCharchem()]);

      if (!this.mounted) return;

      this.setState({
        loading: false,
        Comp: Comp.default,
      });
    } catch (error) {
      // tslint:disable-next-line
      console.error(error);
      if (!this.mounted) return;
      this.setState({
        loading: false,
        error,
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {props, state} = this;
    const {loading, error, Comp} = state;

    if (loading) {
      return props.renderLoading(props);
    } else if (error) {
      return props.renderError(props, error);
    }

    return React.createElement(Comp, props);
  }
}

export default ChemAsync;
