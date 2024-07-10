import * as React from 'react';
import {rule} from 'nano-theme';

export const hidePreviewAt = 900;

const blockClass = rule({
  d: 'flex',
  alignItems: 'center',
  fz: '16px',
});

const separatorClass = rule({
  d: 'inline-block',
  pad: '0 8px',
  op: 0.4,
});

export interface BreadcrumbsProps {
  crumbs: React.ReactNode[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({crumbs}) => {
  return (
    <div className={blockClass} aria-label="breadcrumb">
      {crumbs.map((item, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <React.Fragment key={index}>
            {item}
            {!isLast && <span className={separatorClass}>/</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};
