import * as React from 'react';
import {rule} from '../../css';
import {Ripple} from '../../atoms/Ripple';

const className = rule(
  {
    w: '64px',
    h: '64px',
    d: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cur: 'pointer',
    bd: 0,
    bg: 'none',
    bxz: 'border-box',
    out: 'none',
    op: 0.5,
    trs: 'opacity .15s',
    boxShadow: 'none',
    '&:hover': {
      op: 1,
    },
  },
  'TopNav_Burger',
);

const Burger = (props) => (
  <Ripple ms={600}>
    <button {...props} className={(props.className || '') + className}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
  </Ripple>
);

export default Burger;
