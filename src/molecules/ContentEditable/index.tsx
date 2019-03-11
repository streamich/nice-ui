import * as React from 'react';

const h = React.createElement;

export interface IContentEditableProps {
  tag?: string;
  value: string;
  onChange: (value: string, event?) => void;
  onPaste?: (text: string) => void;
}

export interface IContentEditableState {}

export class ContentEditable extends React.Component<IContentEditableProps, IContentEditableState> {
  el: HTMLElement = null;

  ref = (el) => (this.el = el);

  onChange = (ev) => {
    const value = this.el.innerText;

    this.props.onChange(value, ev);
  };

  onPaste = (ev) => {
    ev.preventDefault();

    const text = ev.clipboardData.getData('text');

    document.execCommand('insertText', false, text);

    const {onPaste} = this.props;

    if (onPaste) {
      onPaste(text);
    }
  };

  shouldComponentUpdate(props) {
    return props.value !== this.el.innerText;
  }

  componentDidUpdate() {
    setTimeout(() => {
      if (this.props.value !== this.el.innerText) {
        this.el.innerText = this.props.value;
      }
    });
  }

  render() {
    const {tag = 'div', value, ...props} = this.props;
    const attr: any = props;

    attr.ref = this.ref;
    attr.dangerouslySetInnerHTML = {__html: value};
    attr.contentEditable = true;
    attr.onInput = this.onChange;
    attr.onPaste = this.onPaste;

    return h(tag, attr);
  }
}
