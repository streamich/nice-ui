import * as React from 'react';
import {theme, rule} from 'nano-theme';

const blockClass = rule({
  ...theme.font.sans.bold,
  fz: '10px',
  textTransform: 'uppercase',
  col: theme.g(0.5),
  pad: 0,
  mar: 0,
});

export interface FormRowProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}

export const FormRow: React.FC<FormRowProps> = ({title, description, children}) => {
  return (
    <div className={blockClass}>
      <div>{title}</div>
      <div>{children}</div>
      <div>{description}</div>
    </div>
  );
};
