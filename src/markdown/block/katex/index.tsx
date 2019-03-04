import * as React from 'react';
import {BlockMath} from 'react-katex';
import {IMarkdownBlockCodeProps, blockDefaultProps} from '../shared';
import loadKatexCss from '../../util/loadKatexCss';

loadKatexCss();

const Katex: React.SFC<IMarkdownBlockCodeProps> = (props) => <BlockMath math={props.source} />;

Katex.defaultProps = blockDefaultProps;

export default Katex;
