import * as React from 'react';
import {parser} from './parser';
import Mdast from './Mdast';

export interface Props {
  src: string;
}

export interface State {}

class Markdown extends React.Component<Props, State> {
  state: State = {};

  render() {
    const mdast = parser.tokenizeBlock(this.props.src);

    return <Mdast ast={mdast} />;
  }
}

export default Markdown;
