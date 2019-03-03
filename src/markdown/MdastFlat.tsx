import * as React from 'react';
import {MdastProps, MdastState} from './types';
import {renderers} from './renderers';
import {rule} from 'p4-css';
import {css} from './css/v1';
import {css as cssComment} from './css/v1-comment';

const classNameReset = rule({
  'h1,h2,h3,h4,h5,h6,p,blockquote,code,pre,table': {
    mar: 0,
    pad: 0,
  },
});
const classNameMarkdown = rule(css());
const classNameMarkdownComment = rule(cssComment);

class MdastFlat extends React.Component<MdastProps, MdastState> {
  static defaultProps = {
    renderers,
  };

  state: MdastState = {};

  render() {
    const {props, state} = this;
    const {renderers, isCompact} = props;

    return (
      <div className={classNameReset + classNameMarkdown + (isCompact ? classNameMarkdownComment : '')}>
        {renderers.node(renderers, props.ast, 0, props, state)}
        {renderers.footnotes(renderers, props.ast, 0, props, state)}
      </div>
    );
  }
}

export default MdastFlat;
