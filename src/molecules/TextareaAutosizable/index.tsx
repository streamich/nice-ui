import * as React from 'react';
import T from 'react-textarea-autosize';
import {rule} from '../../css';
import {theme} from '../../theme';

const Textarea = T as React.SFC<React.TextareaHTMLAttributes<any> & {minRows?: number; inputRef?: (a: any) => void}>;

function setCursorPos(input, start, end) {
  if (arguments.length < 3) end = start;
  if ('selectionStart' in input) {
    setTimeout(() => {
      input.selectionStart = start;
      input.selectionEnd = end;
    }, 1);
  } else if (input.createTextRange) {
    const rng = input.createTextRange();
    rng.moveStart('character', start);
    rng.collapse();
    rng.moveEnd('character', end - start);
    rng.select();
  }
}

function insertAtCursor(myField, myValue) {
  // IE support
  if ((document as any).selection) {
    myField.focus();
    const sel = (document as any).selection.createRange();
    sel.text = myValue;
    // MOZILLA and others
  } else if (myField.selectionStart || myField.selectionStart === '0') {
    const startPos = myField.selectionStart;
    const endPos = myField.selectionEnd;
    myField.value =
      myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
    const carret = startPos + myValue.length;
    setCursorPos(myField, carret, carret);
  } else {
    myField.value += myValue;
  }
}

const className = rule({
  ...theme.font.mono,
  fz: 'inherit',
  bd: 0,
  mar: 'auto',
  pad: 0,
  out: 'none',
  bxz: 'border-box',
  bg: 'transparent',
  resize: 'none',
  w: '100%',
  pos: 'relative',
  z: 2,
  ov: 'hidden',
  col: theme.slate,
  'min-height': '1em',
  'max-width': '1100px',
});

export interface Props extends React.TextareaHTMLAttributes<any> {
  focus?: boolean;
  select?: boolean;
  disabled?: boolean;
  inputRef?: (area: HTMLTextAreaElement | null) => void;
}

class TextareaAutosizable extends React.Component<Props, {}> {
  area: HTMLTextAreaElement | undefined;

  ref = (area) => {
    this.area = area;
    if (this.props.inputRef) this.props.inputRef(area);
  };

  onKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      this.insert('    ');
    }
  };

  componentDidMount() {
    const {props, area} = this;
    const {focus, select} = props;

    area.addEventListener('keydown', this.onKeyDown, false);

    if (focus) this.focus();
    if (select) area.select();

    // if (this.props.value) this.setValue(this.props.value);

    // Resize
    /*
    setTimeout(() => {
      const src = this.getValue();
      if (src) {
        area.value = src;
        area.style.height = 'auto';
        area.style.height = area.scrollHeight + 'px';
      }
    }, 50);
    */
  }

  componentWillUnmount() {
    const {area} = this;
    area.removeEventListener('keydown', this.onKeyDown, false);
  }

  getValue() {
    const {area} = this;
    return area ? area.value : '';
  }

  setValue(value) {
    const {area} = this;
    if (area) area.value = value;
  }

  focus() {
    const {area} = this;
    if (area) area.focus();
  }

  blur() {
    const {area} = this;
    if (area) area.blur();
  }

  isFocused() {
    return this.area === document.activeElement;
  }

  insert(str: string) {
    const {area} = this;
    if (area) {
      const {value} = area;
      if (value) {
        insertAtCursor(area, str);
        const {onChange} = this.props;
        if (onChange) onChange({target: {value: this.getValue()}} as React.ChangeEvent<{value: string}>);
      } else {
        this.setValue(str);
        const {onChange} = this.props;
        if (onChange) onChange({target: {value: str}} as React.ChangeEvent<{value: string}>);
      }
    }
  }

  render() {
    const {props} = this;
    return <Textarea minRows={1} {...props} className={(props.className || '') + className} inputRef={this.ref} />;
  }
}

export default TextareaAutosizable;
