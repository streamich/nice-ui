import * as React from 'react';
import {ICode} from 'md-mdast/lib/types';
import DocsMd from '../../DocsMd';
import AsideContainer from './AsideContainer';

export interface Props {
  node: ICode;
}

const Aside: React.FC<Props> = ({node}) => {
  return (
    <AsideContainer>
      <DocsMd md={node.value} />
    </AsideContainer>
  );
};

export default Aside;
