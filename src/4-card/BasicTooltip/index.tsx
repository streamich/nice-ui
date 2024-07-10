import * as React from 'react';
import {rule, useTheme} from 'nano-theme';

const {forwardRef, useState} = React;

const blockClass = rule({
  pos: 'relative',
  d: 'inline-flex',
});

const tooltipClass = rule({
  d: 'inline-flex',
  pos: 'absolute',
  bgc: 'rgba(0,0,0,.85)',
  bdrad: '4px',
  col: '#fff',
  fz: '14px',
  pad: '4px 8px',
  userSelect: 'none',
  pointerEvents: 'none',
  z: 1000,
});

export interface BasicTooltipProps extends React.AllHTMLAttributes<any> {
  Component?: 'div' | 'span';
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  renderTooltip?: () => React.ReactNode;

  /**
   * If true, text tooltip will be added CSS to not wrap it to new lines.
   */
  nowrap?: boolean;

  /**
   * To manually control the tooltip, set the `show` props.
   */
  show?: boolean;
}

export const BasicTooltip: React.FC<BasicTooltipProps> = forwardRef(
  (
    {Component = 'span', top, bottom, left, right, renderTooltip, nowrap, show, children, onMouseEnter, onMouseLeave},
    ref,
  ) => {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();

    React.useEffect(() => {
      const listener = () => {
        setVisible(false);
      };
      document.addEventListener('mousedown', listener);
      return () => document.removeEventListener('mousedown', listener);
    }, []);

    const C = Component as any;

    return (
      <C
        className={blockClass}
        onMouseEnter={(e: React.MouseEvent) => {
          if (onMouseEnter) onMouseEnter(e);
          if (renderTooltip) setVisible(true);
        }}
        onMouseLeave={(e: React.MouseEvent) => {
          if (onMouseLeave) onMouseLeave(e);
          if (renderTooltip) setVisible(false);
        }}
        ref={ref}
      >
        {children}
        {!!renderTooltip && (typeof show === 'boolean' ? show : !!visible) && (
          <C
            className={tooltipClass}
            style={{top, bottom, left, right, boxShadow: theme.isLight ? undefined : `0 0 0 1px ${theme.g(0.1, 0.16)}`}}
          >
            {nowrap ? <span style={{whiteSpace: 'nowrap'}}>{renderTooltip()}</span> : renderTooltip()}
          </C>
        )}
      </C>
    );
  },
);
