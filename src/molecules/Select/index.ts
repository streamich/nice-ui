import * as React from 'react';
import {dsheet, keyframes} from '../../css';
import {theme} from '../../theme';
import Arrow from '../../atoms/icons/interactive/Arrow';
import renderProp from 'libreact/lib/util/renderProp';
import {select as zIndex} from '../../zindex';
import {Ripple} from '../../atoms/Ripple';
import {OutsideClick} from 'libreact/lib/OutsideClick';

const h = React.createElement;
const height = 42;

const barAnimation = keyframes({
  from: {
    w: '0%',
    left: '50%',
  },
  to: {
    w: '100%',
    left: '0%',
  },
});

const styles = dsheet({
  sizing: {
    h: `${height}px`,
  },
  select: {
    d: 'inline-block',
    pos: 'relative',
    bxz: 'border-box',
    zIndex,
    cur: 'pointer',
    userSelect: 'none',
  },
  knob: {
    pos: 'relative',
    z: 1,
    d: 'flex',
    h: '100%',
    minW: '200px',
    alignItems: 'center',
    trs: 'border .1s',
    bd: `1px solid ${theme.grey[5]}`,
    pad: `0 ${theme.space[2]}px 0 0`,
    '&:hover': {
      bd: `1px solid ${theme.grey[4]}`,
    },
  },
  arrow: {
    w: '24px',
    h: '24px',
    mar: `0 ${theme.space[2]}px`,
  },
  children: {
    ff: theme.font.sansBold.ff,
    fw: theme.font.sansBold.fw,
    fz: theme.font.baseLine + 'px',
    col: theme.grey[1],
  },
  list: {
    pos: 'absolute',
    bxz: 'border-box',
    bd: `1px solid ${theme.grey[5]}`,
    bdt: 0,
    w: '100%',
    bdrad: '0 0 2px 2px',
    'max-height': '300px',
    'overflow-y': 'auto',
  },
  item: {
    d: 'flex',
    alignItems: 'center',
    w: '100%',
    bxz: 'border-box',
    pad: `0 ${theme.space[3]}px`,
    ff: theme.font.sans.ff,
    fw: theme.font.sans.fw,
    fz: '14px',
    col: theme.grey[1],
    '&:hover': {
      bg: theme.grey[10],
    },
  },
  bar: {
    z: 10,
    pos: 'absolute',
    bg: theme.color1[1],
    w: '100%',
    h: '3px',
    top: '100%',
    animation: `${barAnimation} .3s`,
  },
});

export interface ISelectProps {
  block?: boolean;
  children: any;
  renderList: (state: ISelectState) => any[];
  onChange?: (state: ISelectState) => void;
  onSelect?: (index: number) => void;
}

export interface ISelectState {
  open: boolean;
}

export class Select extends React.Component<ISelectProps, ISelectState> {
  state: ISelectState = {
    open: false,
  };

  onOutsideClick = () => {
    if (this.state.open) {
      this.change(false);
    }
  };

  onClick = () => {
    this.change(!this.state.open);
  };

  onItemClick = (index) => () => {
    this.change(false);

    const {onSelect} = this.props;

    if (onSelect) {
      onSelect(index);
    }
  };

  change(open) {
    if (open === this.state.open) {
      return;
    }

    const newState = {open};

    this.setState(newState);

    const {onChange} = this.props;

    if (onChange) {
      onChange(this.state);
    }
  }

  render() {
    const {open} = this.state;
    const {block, children, renderList} = this.props;
    const wrappedList = [];

    if (open) {
      const list = renderList(this.state);

      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const isLast = i >= list.length - 1;

        wrappedList.push(
          h(
            Ripple,
            {color: theme.grey[7], ms: 600},
            h(
              'div',
              {
                className:
                  styles.sizing() +
                  styles.item({
                    bdb: isLast ? 0 : `1px solid ${theme.grey[8]}`,
                  }),
                onClick: this.onItemClick(i),
              },
              item,
            ),
          ),
        );
      }
    }

    const cssKnob: any = {
      bdrad: open ? '2px 2px 0 0' : '2px',
    };

    return h(
      OutsideClick,
      {onClick: this.onOutsideClick},
      h(
        'div',
        {
          className:
            styles.select({
              boxShadow: open ? '0 1px 3px rgba(0,0,0,.1)' : 'none',
            }) + styles.sizing(),
          style: {
            width: block ? '100%' : 'auto',
          },
        },
        h(
          Ripple,
          {color: theme.grey[7], ms: 600},
          h(
            'div',
            {className: styles.knob(cssKnob), onClick: this.onClick},
            h('div', {className: styles.arrow()}, h(Arrow, {direction: this.state.open ? 'u' : 'd'})),
            h('div', {className: styles.children()}, renderProp(this.props, this.state)),
          ),
        ),
        open &&
          h(
            'div',
            {
              className:
                'fadeInDown' +
                styles.list({
                  boxShadow: open ? '0 1px 3px rgba(0,0,0,.1)' : 'none',
                }),
              role: 'listbox',
            },
            ...wrappedList,
          ),
        open && h('div', {className: styles.bar()}),
      ),
    );
  }
}
