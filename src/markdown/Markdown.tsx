import * as React from 'react';
import {Flat} from 'mdast-flat/lib/types';
import MdastFlat from './MdastFlat';
import {toMDASTF} from './parser';

export interface Props {
  src: string;
  toMDASTF?: (markdown: string) => Flat;
  isCompact?: boolean;
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
    const {props} = this;
    const {isCompact, src} = props;
    const mdast = toMDASTF(src);

    return <MdastFlat ast={mdast} isCompact={isCompact} />;
  }
}

export default Markdown;
