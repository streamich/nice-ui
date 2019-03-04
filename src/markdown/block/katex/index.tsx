import * as React from 'react';
import {BlockMath} from 'react-katex';
import {IMarkdownBlockCodeProps, blockDefaultProps} from '../shared';

// Load KaTeX CSS bundle.
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://unpkg.com/katex@latest/dist/katex.min.css';
link.media = 'all';
document.getElementsByTagName('head')[0].appendChild(link);

const Katex: React.SFC<IMarkdownBlockCodeProps> = (props) => <BlockMath math={props.source} />;

Katex.defaultProps = blockDefaultProps;

export default Katex;
