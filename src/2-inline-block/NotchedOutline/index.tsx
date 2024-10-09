import * as React from 'react';
import {drule, theme, useTheme} from 'nano-theme';

const blockClass = drule({
  d: 'block',
  pos: 'relative',
  bdrad: '6px',
  bxz: 'border-box',
  mr: 0,
  pd: '0 8px 6px',
});

const legendClass = drule({
  ...theme.font.ui3.mid,
  pad: '0 5px',
  fz: '12px',
});

export interface NotchedOutlineProps {
  className?: string;
  label: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const NotchedOutline: React.FC<NotchedOutlineProps> = ({className = '', label, active, disabled, children}) => {
  const theme = useTheme();

  return (
    <fieldset
      className={
        className +
        blockClass({
          bd: disabled
            ? `1px dotted ${theme.g(0.8)}`
            : active
              ? `1px solid ${theme.color.sem.positive[1]}`
              : `1px solid ${theme.g(0.7)}`,
          bxsh: active && !disabled ? `0 0 0 1px ${theme.color.sem.positive[1]}` : 'none',
          '& *': {
            op: disabled ? 0.5 : 1,
          },
          '&:hover': {
            bd: disabled
              ? `1px solid ${theme.g(0.8)}`
              : active
                ? `1px solid ${theme.color.sem.positive[2]}`
                : `1px solid ${theme.g(0.5)}`,
            bxsh: active && !disabled ? `0 0 0 2px ${theme.color.sem.positive[2]}` : 'none',
            '& *': {
              op: 1,
            },
          },
        })
      }
    >
      <legend
        className={legendClass({
          bg: active ? theme.bg : 'transparent',
          col: disabled ? theme.g(0.6) : active ? theme.g(0.3) : theme.g(0.5),
          'fieldset:hover &': {
            col: disabled ? theme.g(0.6) : active ? theme.g(0.1) : theme.g(0.5),
          },
        })}
        style={{
          padding: label ? undefined : 0,
        }}
      >
        {label || '\uFEFF'}
      </legend>
      {children}
    </fieldset>
  );
};
