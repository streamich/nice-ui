import * as CM from 'codemirror';

export type CodeMirror = typeof CM;
export type CodeMirrorEditor = CM.Editor;

export interface EditorControls {
  getValue: () => string;
  getSelectionValue: () => string;
  setValue: (value: string) => void;
  insert: (text: string, select?: 'around' | 'start') => void;
  clear: () => void;
  focus: () => void;
  blur: () => void;
  gotoEnd: () => void;
  hasFocus: () => boolean;
  selectAll: () => void;
}
