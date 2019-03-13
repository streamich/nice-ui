import * as React from 'react';
import {IKatexInlineProps} from '.';

const KatexInline = React.lazy(() => import('.'));

export interface KatexInlineLazyProps extends IKatexInlineProps {
  fallback?: React.ReactNode;
}

const KatexInlineLazy: React.SFC<KatexInlineLazyProps> = ({fallback = null, ...rest}) => {
  return (
    <React.Suspense fallback={fallback}>
      <KatexInline {...rest} />
    </React.Suspense>
  );
};

export default KatexInlineLazy;
