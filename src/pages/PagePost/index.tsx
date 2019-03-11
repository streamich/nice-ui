import * as React from 'react';
import {P4Asset} from '../../util/types';
import {rule} from 'p4-css';
import Markdown from '../../markdown/Markdown';

const classes = {
  content: rule({
    pad: '30px',
    mar: '0 auto',
    maxW: '900px',
  }),
};

export interface Props {
  asset: P4Asset;
}

const PagePost: React.SFC<Props> = ({asset}) => {
  return (
    <div className={classes.content}>
      <Markdown src={asset.src} />
    </div>
  );
};

export default PagePost;
