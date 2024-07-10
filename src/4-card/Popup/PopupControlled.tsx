import * as React from 'react';
import {rule} from 'nano-theme';
import useClickAway from 'react-use/lib/useClickAway';
import {BasicTooltip} from '../BasicTooltip';

const blockClass = rule({
  d: 'flex',
  pos: 'relative',
});

const buttonClass = rule({
  d: 'inline-flex',
  ta: 'inherit',
  position: 'relative',
  bg: 'none',
  pad: 0,
  mar: 0,
  out: 0,
  trs: 'box-shadow .15s',
});

const roundClass = rule({
  bdrad: '50%',
});

const popupClass = rule({
  pos: 'absolute',
  top: '100%',
  left: 0,
  animation: 'fadeInScaleOut .15s',
});

export interface State {
  open: boolean;
}

export interface PopupControlledProps extends React.HTMLAttributes<any> {
  dx?: number;
  dy?: number;
  open?: boolean;
  round?: boolean;
  right?: boolean;
  prerender?: boolean;
  noAnimation?: boolean;
  renderContext: (state: State) => React.ReactElement<any>;
  showTooltip?: boolean;
  tooltipTop?: number | string;
  tooltipRight?: number | string;
  renderTooltip?: () => React.ReactElement<any>;
  block?: boolean;
  onHeadClick?: React.MouseEventHandler;
  onClickAway?: (e: Event) => void;
  onEsc?: () => void;
}

export const PopupControlled: React.FC<PopupControlledProps> = (props) => {
  const {
    dx,
    dy,
    renderContext,
    right,
    children,
    round,
    open = false,
    prerender,
    noAnimation,
    showTooltip,
    tooltipTop,
    tooltipRight,
    renderTooltip,
    block,
    onHeadClick,
    onClickAway = () => {},
    onEsc,
    ...rest
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  useClickAway(ref, onClickAway);

  const stylePopup: any = {};

  if (right) {
    stylePopup.left = 'auto';
    stylePopup.right = 0;
  }

  if (dx || dy) {
    stylePopup.marginTop = dy || 0;
    if (right) {
      stylePopup.marginRight = -(dx || 0);
    } else {
      stylePopup.marginLeft = dx || 0;
    }
  }

  const childrenWithTooltip = renderTooltip ? (
    <BasicTooltip show={!open && showTooltip} renderTooltip={renderTooltip} top={tooltipTop} right={tooltipRight}>
      {children}
    </BasicTooltip>
  ) : (
    children
  );

  const dropdown = (open || prerender) && (
    <div
      className={popupClass}
      style={{
        ...stylePopup,
        visibility: open ? 'visible' : 'hidden',
        animation: noAnimation ? 'none' : undefined,
      }}
    >
      {renderContext({open})}
    </div>
  );

  const head = (
    <span
      className={buttonClass + (round ? roundClass : '')}
      style={{display: block ? 'block' : undefined, width: block ? '100%' : undefined}}
      onClick={onHeadClick}
    >
      {childrenWithTooltip}
    </span>
  );

  return (
    <div
      {...rest}
      ref={ref}
      className={props.className + '' + blockClass}
      style={{display: block ? 'block' : undefined, width: block ? '100%' : undefined, ...(props.style || {})}}
      onKeyDown={(e) => {
        if (!onEsc) return;
        if (e.key === 'Escape') {
          e.stopPropagation();
          e.preventDefault();
          onEsc();
        }
      }}
    >
      {head}
      {dropdown}
    </div>
  );
};
