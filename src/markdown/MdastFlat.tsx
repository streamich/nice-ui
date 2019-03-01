import * as React from 'react';
import {MdastProps, MdastState} from './types';
import {renderers} from './renderers';

class MdastFlat extends React.Component<MdastProps, MdastState> {
  static defaultProps = {
    renderers,
  };

  state: MdastState = {};

  render() {
    const {props, state} = this;
    const {renderers} = props;

    return (
      <>
        {renderers.node(renderers, props.ast, 0, props, state)}
        {renderers.footnotes(renderers, props.ast, 0, props, state)}
      </>
    );
  }
}

export default MdastFlat;
