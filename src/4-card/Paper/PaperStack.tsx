import * as React from 'react';
import {rule} from 'nano-theme';
import {blockClass as paperClass} from '.';

const blockClass = rule({
  [`& .${paperClass.trim()}:first-child`]: {
    bdrad: '4px 4px 0 0',
  },
  [`& .${paperClass.trim()}`]: {
    bdrad: '0px',
  },
  [`& .${paperClass.trim()}:last-child`]: {
    bdrad: '0 0 4px 4px',
  },
});

export interface Props extends React.AllHTMLAttributes<any> {}

export const PaperStack: React.FC<Props> = ({children, className = '', ...rest}) => {
  const papers = React.Children.toArray(children);

  return (
    <div {...rest} className={className + blockClass}>
      {papers.map((paper, index) => {
        if (!React.isValidElement(paper)) return paper;
        const isFirst = index === 0;
        if (isFirst) return paper;
        return React.cloneElement(paper, {...paper.props, style: {...(paper.props.style || {}), borderTop: 0}});
      })}
    </div>
  );
};
