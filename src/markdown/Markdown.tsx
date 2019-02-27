import * as React from 'react';
import {Flat} from 'mdast-flat/lib/types';
import MdastFlat from './MdastFlat';
import {toMDASTF} from './parser';

export interface Props {
  src: string;
  toMDASTF?: (markdown: string) => Flat;
}

export interface State {
  flat?: Flat;
}

class Markdown extends React.PureComponent<Props, State> {
  static defaultProps = {
    toMDASTF,
  };

  state: State = {};

  render() {
    const mdast = toMDASTF(this.props.src);

    return <MdastFlat ast={mdast} />;
  }
}

export default Markdown;
