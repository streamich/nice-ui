import * as React from 'react';
import {rule, makeRule, theme} from 'nano-theme';

const blockClass = rule({
  d: 'block',
  pos: 'relative',
  bdrad: '4px',
  bxz: 'border-box',
  mar: '0 0 1px',
  pad: '0 8px 6px',
});

const useBlockClass = makeRule((theme) => ({
  bd: `1px solid ${theme.g(0.7)}`,
  '&:hover': {
    bd: `1px solid ${theme.g(0.5)}`,
  },
}));

const useBlockActiveClass = makeRule((theme) => ({
  mar: 0,
  pad: '0 7px',
  bd: `2px solid ${theme.color.sem.positive[1]}`,
  '&:hover': {
    bd: `2px solid ${theme.color.sem.positive[1]}`,
  },
}));

const useBlockDisabledClass = makeRule((theme) => ({
  mar: '0 0 1px',
  pad: '0 8px',
  bd: `1px solid ${theme.g(0.3)}`,
  '&:hover': {
    bd: `1px solid ${theme.g(0.3)}`,
  },
}));

const legendClass = rule({
  ...theme.font.ui3.mid,
  pad: '0 5px',
  fz: '12px',
});

const useLegendClass = makeRule((theme) => ({
  col: theme.g(0.7),
  'fieldset:hover &': {
    col: theme.g(0.5),
  },
}));

const useLegendActiveClass = makeRule((theme) => ({
  col: theme.g(0.3),
}));

const useLegendDisabledClass = makeRule((theme) => ({
  col: theme.g(0.6),
}));

export interface NotchedOutlineProps {
  className?: string;
  label: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const NotchedOutline: React.FC<NotchedOutlineProps> = ({className = '', label, active, disabled, children}) => {
  const dynamicBlockClass = useBlockClass();
  const dynamicBlockActiveClass = useBlockActiveClass();
  const dynamicLegendClass = useLegendClass();
  const dynamicLegendActiveClass = useLegendActiveClass();

  return (
    <fieldset
      className={
        className +
        blockClass +
        dynamicBlockClass +
        (active && !disabled ? dynamicBlockActiveClass : '') +
        (disabled ? useBlockDisabledClass : '')
      }
    >
      {!!label && (
        <legend
          className={
            legendClass +
            dynamicLegendClass +
            (active && !disabled ? dynamicLegendActiveClass : '') +
            (disabled ? useLegendDisabledClass : '')
          }
        >
          {label}
        </legend>
      )}
      {children}
    </fieldset>
  );
};
