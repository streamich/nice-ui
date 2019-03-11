import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';

let cssCnt = 0;
const css = (obj) => rule(obj, 'Accordion_' + cssCnt++);

const blockClass = css({
  pos: 'relative',
  trs: 'border 0.3s',
  bd: '1px solid transparent',
  bdrad: '0 0 2px 2px',
  mar: '-1px',
});

const openClass = css({
  bg: '#fff',
  bdt: `1px solid ${theme.color1[1]}`,
  bdrad: '4px',
  '&:hover': {
    bd: `1px solid ${theme.grey[8]}`,
    bdt: `1px solid ${theme.warning}`,
    boxShadow: '0 1px 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.05)',
  },
});

const lineClass = css({
  pos: 'absolute',
  h: '1px',
  w: '0%',
  vis: 'hidden',
  bg: theme.color1[2],
  left: 0,
  trs: 'all 0.4s',
  top: 0,
  bdrad: '3px',
  [`.${openClass.trim()}:hover &`]: {
    w: '100%',
    h: '3px',
    top: '-1px',
    vis: 'visible',
  },
});

const titleClass = css({
  ...theme.font.ui,
  col: theme.grey[3],
  bdt: `1px solid ${theme.grey[9]}`,
  bdb: '1px solid transparent',
  pad: '0 15px',
  fz: '16px',
  lh: '42px',
  trs: 'color .2s, background .2s',
  cur: 'pointer',
  userSelect: 'none',
  '&:hover': {
    bdt: `1px solid ${theme.grey[7]}`,
    col: theme.grey[0],
  },
  [`.${openClass.trim()} &`]: {
    col: theme.color1[1],
    '&:hover': {
      col: theme.color1[2],
    },
  },
  [`.${openClass.trim()}:hover &`]: {
    bg: '#fcfcfc',
    bdt: `1px solid ${theme.warning}`,
    bdb: `1px solid ${theme.grey[9]}`,
    col: theme.color1[2],
    '&:hover': {
      bdt: `1px solid ${theme.warning}`,
      bg: '#f9f9f9',
    },
  },
});

const bodyClass = css({
  pad: '15px',
});

export interface Props {
  open?: boolean;
  title?: React.ReactNode;
  onTitleClick?: React.MouseEventHandler<any>;
}

const AccordionTab: React.SFC<Props> = ({open, title, children, onTitleClick}) => {
  return (
    <div className={blockClass + (open ? openClass : '')}>
      <div className={titleClass} onClick={onTitleClick}>
        {title || null}
      </div>
      {open && (
        <div className={'fadeIn' + bodyClass}>{typeof children === 'function' ? children() : children || null}</div>
      )}
      <div className={lineClass} />
    </div>
  );
};

export default AccordionTab;
