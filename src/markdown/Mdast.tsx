import * as React from 'react';
import {MdastProps, MdastState} from './types';
import {renderers} from './renderers';

class Mdast extends React.Component<MdastProps, MdastState> {
  static defaultProps = {
    renderers,
  };

  state: MdastState = {};

  render() {
    const {props, state} = this;
    const {renderers} = props;
    return renderers.renderNode(renderers, props.ast, props, state);
  }
}

export default Mdast;
