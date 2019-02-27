import * as React from 'react';
import {IMarkdownBlockCodeProps, blockDefaultProps} from '../shared';
import {sheet} from 'p4-css';

const h = React.createElement;

const css = {
  ff: 'Arial, Helvetica, Linux Libertine, Times, Times New Roman, sans-serif',
  fz: '24px',
  ta: 'center',
  canvas: {
    verticalAlign: 'bottom',
  },
};

const styles = sheet(
  {
    big: css,
    small: {
      ...css,
      fz: '18px',
    },
  },
  'ui-Markdown-Chem',
);

class Chem extends React.PureComponent<IMarkdownBlockCodeProps, {}> {
  static defaultProps = blockDefaultProps;

  el: HTMLDivElement;

  ref = (el) => (this.el = el);

  draw() {
    const ChemSys = (window as any).ChemSys;
    if (!ChemSys) {
      // tslint:disable-next-line
      console.error('ChemSys not loaded.');
      return;
    }

    const {el, props} = this;
    const {source} = props;
    const ex2 = ChemSys.compile(source);

    el.innerHTML = '';
    ChemSys.draw(el, ex2);

    const canvas = el.querySelectorAll('canvas');

    if (!canvas.length) el.innerHTML = source;
  }

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  render() {
    const isBig = this.props.source.length > 130;

    return h('div', {className: isBig ? styles.small : styles.big, ref: this.ref});
  }
}

export default Chem;
