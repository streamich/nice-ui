import * as React from 'react';
import {theme} from '../../theme';
import {css} from '../../css';

const h = React.createElement;

export interface ICheckboxProps {
  on: boolean;
  small?: boolean;
  onChange?: (e?) => void;
}

export interface ICheckboxState {
  active?: boolean;
}

@css({
  pos: 'relative',
  cur: 'pointer',
  d: 'inline-block',
  pad: 0,
  mar: 0,
  bdrad: '20px',
  trs: 'box-shadow 0.18s',
  boxShadow: 'inset 0 0 2px rgba(0,0,0,.25)',
  bd: 0,
  out: 0,
  w: '50px',
  h: '30px',
  '&:focus': {
    boxShadow: `0 0 0 3px ${theme.blue}`,
  },
  '&:hover': {
    boxShadow: `0 0 0 3px ${theme.color6[0]}`,
    '& > span': {
      bg: theme.snow[0],
      'box-shadow': '0 0 3px rgba(0,0,0,.4)',
    },
  },
  '& > span': {
    h: '24px',
    pos: 'absolute',
    top: '3px',
    d: 'inline-block',
    bdrad: '12px',
    trs: 'left 0.2s, width 0.2s',
    bg: '#fff',
  },
})
export class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  state = {
    active: false,
  };

  events = {
    onMouseLeave: () => this.setState({active: false}),
    onMouseDown: () => this.setState({active: true}),
    onMouseUp: () => this.setState({active: false}),
  };

  render() {
    const {on, small} = this.props;
    const {active} = this.state;

    const style: any = {
      background: on ? theme.positive : theme.smoke[1],
    };

    const styleSpan: any = {
      left: on ? (active ? 17 : 23) : 3,
      width: small ? (active ? 20 : 14) : active ? 30 : 24,
    };

    if (small) {
      style.width = 40;
      style.height = 20;
      styleSpan.height = 14;
    }

    return h(
      'button',
      {
        ...this.events,
        onClick: this.props.onChange,
        style,
        role: 'checkbox',
        'aria-checked': active,
        type: 'button',
      },
      h('span', {style: styleSpan}, ' '),
    );
  }
}
