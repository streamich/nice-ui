import * as React from 'react';
import {MdastProps, MdastState} from './types';
import {renderers} from './renderers';
import {rule} from 'p4-css';
import {css} from './css';

const className = rule(css());

class MdastFlat extends React.Component<MdastProps, MdastState> {
  static defaultProps = {
    renderers,
  };

  state: MdastState = {};

  render() {
    const {props, state} = this;
    const {renderers} = props;

    return (
      <div className={className}>
        {renderers.node(renderers, props.ast, 0, props, state)}
        {renderers.footnotes(renderers, props.ast, 0, props, state)}
      </div>
    );
  }
}

export default MdastFlat;
