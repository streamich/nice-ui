import * as React from 'react';
import {sheet} from '../../css';
import {on, off} from 'libreact/lib/util';
import {theme} from '../../theme';

const classes = sheet({
  block: {
    d: 'inline-block',
    pos: 'relative',
  },
  button: {
    bg: 'none',
    pad: 0,
    bdrad: '3px',
    bd: '3px solid transparent',
    mar: '-3px',
    out: 0,
    trs: 'box-shadow .15s',
    '&:active,&:focus:active': {
      boxShadow: `0 0 0 3px ${theme.blue}`,
    },
    '&:focus': {
      boxShadow: `0 0 0 1px ${theme.blue}`,
    },
  },
  round: {
    bdrad: '50%',
  },
  popup: {
    pos: 'absolute',
    top: '100%',
    left: 0,
    animation: `fadeInDown .15s`,
  },
});

export interface Props extends React.HTMLAttributes<any> {
  manual?: boolean;
  dx?: number;
  dy?: number;
  open?: boolean;
  round?: boolean;
  right?: boolean;
  renderContext: (state: State) => React.ReactElement<any>;
}

export interface State {
  open: boolean;
}

class Popup extends React.Component<Props, State> {
  state = {
    open: this.props.open,
  };

  componentWillUnmount() {
    this.clearEvents();
  }

  clearEvents() {
    off(document, 'click', this.onDocClick);
    off(document, 'keydown', this.onDocKeydown);
  }

  onDocClick = () => {
    this.close();
  };

  onClick = (event) => {
    if (!this.props.manual) {
      event.preventDefault();
      if (this.state.open) {
        this.close();
      } else {
        this.open();
      }
    }
  };

  open() {
    this.setState({open: true});
    if (!this.state.open) {
      on(document, 'click', this.onDocClick);
      on(document, 'keydown', this.onDocKeydown);
    }
  }

  close() {
    this.setState({open: false});
    this.clearEvents();
  }

  onDocKeydown = (e) => {
    if (e.key === 'Escape') {
      if (this.state.open) {
        this.close();
      }
    }
  };

  render() {
    const {dx, dy, renderContext, right, children, round, manual, open, ...props} = this.props;
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

    return (
      <div {...props} className={props.className + '' + classes.block}>
        <button className={classes.button + (round ? classes.round : '')} onClick={this.onClick}>
          {children}
        </button>
        {this.state.open && (
          <div className={classes.popup} style={stylePopup}>
            {renderContext(this.state)}
          </div>
        )}
      </div>
    );
  }
}

export default Popup;
