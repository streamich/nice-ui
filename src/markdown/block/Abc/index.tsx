require('./abcjs.min.js');

// NOTE: This components uses ABCJS.js library, which expects a global
// `Raphael` to be presetn on `window`.

import * as React from 'react';
import dataUri from '../../../util/dataUri';
import {IMarkdownBlockCodeProps, blockDefaultProps} from '../shared';

const h = React.createElement;

declare const ABCJS: {
  renderAbc(div: HTMLDivElement, source: string);
};

const abcToImg = (source: string): string => {
  const div = document.createElement('div');
  const {style} = div;

  style.width = '1px';
  style.height = '1px';
  style.visibility = 'hidden';
  document.body.appendChild(div);

  ABCJS.renderAbc(div, source);

  const svg = div.innerHTML;

  document.body.removeChild(div);

  return dataUri(svg, 'image/svg+xml');
};

export interface IAbcProps extends IMarkdownBlockCodeProps {}

export interface IAbcState {
  error?: Error;
  url?: string;
}

class Abc extends React.PureComponent<IAbcProps, IAbcState> {
  static defaultProps = blockDefaultProps;

  state: IAbcState = {};

  componentDidMount() {
    this.compute();
  }

  componentDidUpdate() {
    this.compute();
  }

  compute() {
    try {
      const url = abcToImg(this.props.source);

      this.setState({url});
    } catch (error) {
      this.props.onError(error);
      this.setState({error});
    }
  }

  render() {
    const {props, state} = this;
    const {error, url} = this.state;

    if (error) {
      return props.renderError(props, state.error);
    }

    if (!url) {
      return null;
    }

    return <img src={url} />;
  }
}

export default Abc;
