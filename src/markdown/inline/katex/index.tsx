import * as React from 'react';
import {InlineMath} from 'react-katex';
import loadKatexCss from '../../util/loadKatexCss';

loadKatexCss();

export interface IKatexInlineProps {
  source: string;
}

const KatexInline: React.SFC<IKatexInlineProps> = ({source}) => <InlineMath math={source} />;

export default KatexInline;
