import * as React from 'react';
import {EmojiInlineProps} from '.';

const EmojiInline = React.lazy(() => import('.'));

export interface EmojiInlineLazyProps extends EmojiInlineProps {
  fallback?: React.ReactNode;
}

const EmojiInlineLazy: React.SFC<EmojiInlineLazyProps> = ({fallback = null, ...rest}) => {
  return (
    <React.Suspense fallback={fallback}>
      <EmojiInline {...rest} />
    </React.Suspense>
  );
};

export default EmojiInlineLazy;
