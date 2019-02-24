import * as React from 'react';
import {MdastProps, MdastState} from './types';
import renderNode from './renderers/renderNode';

class Mdast extends React.Component<MdastProps, MdastState> {
  static defaultProps = {
    renderNode,
  };

  state: MdastState = {};

  render() {
    const {props, state} = this;
    return props.renderNode!(props.ast, props, state);
  }
}

export default Mdast;
