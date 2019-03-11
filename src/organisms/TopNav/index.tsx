import * as React from 'react';
import {WindowScrollSensor} from 'libreact/lib/WindowScrollSensor';
import {sheet} from '../../css';
import {topNav as zIndex} from '../../zindex';

export const height = 64;
const classes = sheet(
  {
    wrap: {
      zIndex,
      pos: 'fixed',
      left: 0,
      top: 0,
      w: '100%',
      h: `${height}px`,
      trs: 'transform .12s,background .5s',
    },
    hide: {
      transform: `translate(0,-${height + 5}px)`,
    },
    scroll: {
      bg: 'rgba(255,255,255,.85)',
      boxShadow: '0 1px 2px rgba(0,0,0,.05)',
    },
  },
  'TopNav',
);

export interface ITopNavProps extends React.HTMLAttributes<any> {
  open?: boolean;
}

export interface ITopNavState {
  y?: number;
  hide?: boolean;
}

export class TopNav extends React.Component<ITopNavProps, ITopNavState> {
  state: ITopNavState = {
    y: 0,
  };

  onScroll = ({y}) => {
    this.setState({
      hide: y > this.state.y,
      y,
    });
  };

  render() {
    const {children, open, ...rest} = this.props;
    const {y, hide} = this.state;

    return (
      <>
        <WindowScrollSensor onChange={this.onScroll} />
        <nav
          {...rest}
          className={
            (rest.className || '') + classes.wrap + (y ? classes.scroll : '') + (!open || hide ? classes.hide : '')
          }
        >
          {children}
        </nav>
      </>
    );
  }
}
