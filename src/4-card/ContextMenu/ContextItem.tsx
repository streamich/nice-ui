import * as React from 'react';
import {lightTheme as theme, rule, makeRule} from 'nano-theme';
import {Link} from '../../1-inline/Link';
import {FixedColumn} from '../../3-list-item/FixedColumn';
import {Ripple} from '../../misc/Ripple';
import {usePopup} from '../Popup/context';

const padding = 20;

const {createElement: h} = React;

const blockClass = rule({
  d: 'block',
  bd: 0,
  w: '100%',
  bxz: 'border-box',
  bg: 'none',
  ta: 'left',
  'svg path': {
    fill: theme.g(0.4),
  },
  us: 'none',
  out: 'none',
  '&:focus': {
    bg: theme.g(0, 0.02),
  },
});

const itemClass = rule({
  ...theme.font.ui2,
  fz: '14px',
  pad: `6px ${padding}px`,
});

const useItemClass = makeRule((theme) => ({
  col: theme.g(0.3),
  '&:hover': {
    col: theme.g(0.3),
    'svg path': {
      fill: theme.g(0.3),
    },
  },
}));

const itemClickableClass = rule({
  cur: 'pointer',
});

const useItemClickableClass = makeRule((theme) => ({
  '&:hover': {
    bg: theme.isLight ? theme.g(0, 0.04) : theme.g(0, 0.06),
  },
}));

const useDangerClass = makeRule((theme) => ({
  'svg path': {
    fill: theme.red(0.8),
  },
  '&:hover': {
    bg: theme.red(0.08),
    'svg path': {
      fill: theme.red(1),
    },
  },
}));

const useItemGrayClass = makeRule((theme) => ({
  bg: theme.isLight ? theme.g(0.985) : theme.g(0.92),
}));

export const bigItemClass = rule({
  ...theme.font.ui1.mid,
  cur: 'pointer',
  fz: '15px',
  pad: '12px 20px',
  bg: 'transparent',
  whiteSpace: 'nowrap',
  '&:hover': {
    col: '#fff',
    bg: '#07F',
  },
});

const useBigItemClass = makeRule((theme) => ({
  col: theme.g(0.3),
}));

const iconClass = rule({
  pad: 0,
  w: '16px',
  h: '16px',
  mar: '0 0 0 -2px',
});

const smallTextClass = rule({
  p: {
    fz: '.82em',
    pad: 0,
    mar: 0,
  },
  a: {
    col: theme.g(0.5),
    borderBottomColor: theme.g(0.9),
    '&:hover': {
      col: '#0089ff',
      bdb: '1px solid rgba(0,137,255,.4)',
    },
  },
});

const useSmallTextClass = makeRule((theme) => ({
  p: {
    col: theme.g(0.5),
  },
  a: {
    col: theme.g(0.5),
    borderBottomColor: theme.g(0.9),
  },
}));

const useSelectedClass = makeRule((theme) => ({
  bg: theme.g(0, 0.04),
}));

export interface ContextItemProps extends React.HTMLAttributes<any> {
  big?: boolean;
  grey?: boolean;
  danger?: boolean;
  icon?: React.ReactNode;
  smallText?: boolean;
  to?: string;
  selected?: boolean;
  inset?: boolean;
}

export const ContextItem: React.FC<ContextItemProps> = ({
  big,
  grey,
  danger,
  className,
  icon,
  children,
  smallText,
  to,
  selected,
  inset,
  ...rest
}) => {
  const popup = usePopup();
  const dynamicItemClass = useItemClass();
  const dynamicItemClickableClass = useItemClickableClass();
  const dynamicItemGrayClass = useItemGrayClass();
  const dynamicBigItemClass = useBigItemClass();
  const dynamicSmallTextClass = useSmallTextClass();
  const dynamicDangerClass = useDangerClass();
  const selectedClass = useSelectedClass();

  const mainClassName =
    (className || '') +
    blockClass +
    (big
      ? bigItemClass + dynamicBigItemClass
      : itemClass +
        dynamicItemClass +
        (grey ? dynamicItemGrayClass : '') +
        (rest.onClick || to ? itemClickableClass + dynamicItemClickableClass : '')) +
    (smallText ? smallTextClass + dynamicSmallTextClass : '') +
    (danger ? dynamicDangerClass : '') +
    (selected ? selectedClass : '');

  const onClickWrapped = rest.onClick;
  rest.onClick = (e) => {
    if (popup) popup.close();
    if (onClickWrapped) onClickWrapped(e);
  };

  let element: React.ReactNode = children;

  if (icon) {
    element = (
      <FixedColumn as={'span'} left={25}>
        <span className={iconClass}>{icon}</span>
        <span>{children}</span>
      </FixedColumn>
    );
  }

  element = h(Ripple, {
    ms: 800,
    color: danger ? theme.red(0.6) : undefined,
    children: h(
      to ? Link : 'button',
      {
        ...rest,
        a: to ? true : undefined,
        to,
        className: mainClassName,
        style: inset
          ? {
              paddingLeft: padding - 4,
              paddingRight: padding - 4,
              borderRadius: 4,
            }
          : undefined,
      },
      element,
    ),
  });

  if (inset) {
    element = <div style={{padding: '0 4px'}}>{element}</div>;
  }

  return element;
};
