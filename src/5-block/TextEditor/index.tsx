import * as React from 'react';
import {loadCodeMirror} from './loadCodeMirror';
import useAsync from 'react-use/lib/useAsync';
import {CodeMirrorEditor} from './types';
import {rule, COLOR, theme, useRule} from 'nano-theme';
import {EditorControls} from './types';

const codeColor = '#f30';

const {useEffect, useRef, useState, useMemo} = React;

const blockClass = rule({
  '& .CodeMirror': {
    ...theme.font.mono,
    bgc: 'transparent',
  },
  '& .CodeMirror-gutters': {
    bgc: 'transparent',
    bdr: 0,
  },
  '& .CodeMirror-linenumber': {
    pad: '1px 4px 0 4px',
    col: '#ccc',
    fz: '.7em',
  },
  '& .CodeMirror-placeholder': {
    op: 0.8,
  },
  '& .CodeMirror .cm-spell-error': {
    bgc: 'transparent !important',
    bdb: `1px solid ${theme.color.sem.negative[0]}`,
  },

  // Highlighting.
  '& .CodeMirror .cm-comment': {
    // Single tick inline code.
    col: codeColor,
  },
  '& .CodeMirror .cm-link': {
    col: COLOR.LINK,
  },
  '& .CodeMirror .cm-url': {
    col: COLOR.LINK,
  },
});

const textareaClass = rule({
  vis: 'hidden',
  w: '1px',
  h: '1px',
});

const defaultFontSize = 15;
const defaultLineHeight = 1.5;

const setEditorLines = (editor: CodeMirrorEditor, lineHeight: number, lines: number) => {
  const height = 10 + lines * lineHeight + 'px';
  editor.setSize('100%', height);
};

const adjustLineNumber = (editor: CodeMirrorEditor, lineHeight: number, minLines: number = 1) => {
  const lines = Math.max(editor.getDoc().lineCount(), minLines);
  setEditorLines(editor, lineHeight, lines);
};

declare const CodeMirrorSpellChecker: any;

export interface Props {
  className?: string;
  fontSize?: number;
  placeholder?: string;
  lineHeight?: number;
  showAllLines?: boolean;
  minLines?: number;
  disabled?: boolean;
  onChange?: (controls: EditorControls) => void;
  onControls?: (controls: EditorControls) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const TextEditor: React.FC<Props> = (props) => {
  const dynamicClass = useRule((theme) => ({
    '& .CodeMirror': {
      col: theme.name === 'dark' ? '#ddd' : '000',
    },
    '& .CodeMirror-selected': {
      bg: `${theme.isLight ? theme.g(0.9) : theme.g(0.8)} !important`,
    },
    '& .CodeMirror-cursor': {
      borderLeftColor: theme.g(0, 0.5),
    },
  }));
  const fontSize = props.fontSize || defaultFontSize;
  const lineHeightInPx = Math.round(fontSize * (props.lineHeight || defaultLineHeight));
  const {className, minLines = 1, onFocus, onBlur, disabled} = props;

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [editor, setEditor] = useState<CodeMirrorEditor | null>(null);
  const {value: CodeMirror} = useAsync(loadCodeMirror);

  const controls = useMemo<undefined | EditorControls>(() => {
    if (!editor) return;
    const controls: EditorControls = {
      getValue: () => editor.getDoc().getValue(),
      getSelectionValue: () => {
        return editor.getDoc().getSelection().toString();
      },
      setValue: (value: string) => editor.getDoc().setValue(value),
      insert: (text: string, select?: any) => {
        const doc = editor.getDoc();
        doc.replaceSelection(text, select);
      },
      clear: () => editor.getDoc().setValue(''),
      focus: () => editor.focus(),
      blur: () => editor.getInputField().blur(),
      gotoEnd: () => editor.getDoc().setCursor(editor.getDoc().lineCount(), 0),
      hasFocus: () => editor.hasFocus(),
      selectAll: () => {
        editor.execCommand('selectAll');
      },
    };
    return controls;
  }, [editor]);

  useEffect(() => {
    if (!CodeMirror) return;
    if (!textareaRef.current) return;

    if (typeof CodeMirrorSpellChecker === 'function') {
      CodeMirrorSpellChecker({
        codeMirrorInstance: CodeMirror,
      });
    }
    const editor = CodeMirror.fromTextArea(textareaRef.current, {
      mode: 'spell-checker',
      // backdrop: 'gfm',
      theme: 'default',

      // This must be set to "textarea" if set to "contenteditable" or omitted
      // it does not fire change event on mobile until space is pressed on mobile.
      // If this setting is omitted, it defaults to "contenteditable" on mobile.
      inputStyle: 'textarea',

      placeholder: props.placeholder,
      lineNumbers: false,
      lineWrapping: true,
    } as any);

    if (props.showAllLines) {
      setEditorLines(editor, lineHeightInPx, minLines);
    } else {
      editor.setSize('100%', '100%');
    }

    setEditor(editor);
  }, [textareaRef.current, CodeMirror]);

  useEffect(() => {
    if (!editor) return;
    if (!props.showAllLines) return;

    const onChange = () => {
      adjustLineNumber(editor, lineHeightInPx, minLines);
    };
    adjustLineNumber(editor, lineHeightInPx, minLines);

    editor.on('change', onChange);
    return () => editor.off('change', onChange);
  }, [editor, props.showAllLines]);

  useEffect(() => {
    if (!editor) return;
    if (!controls) return;
    if (!props.onChange) return;
    const listener = () => props.onChange && props.onChange(controls);
    editor.on('change', listener);
    return () => editor.off('change', listener);
  }, [editor, controls, props.onChange]);

  useEffect(() => {
    if (controls && props.onControls) props.onControls(controls);
  }, [controls]);

  useEffect(() => {
    if (!editor) return;
    if (!onFocus) return;

    editor.on('focus', onFocus);
    return () => editor.off('focus', onFocus);
  }, [editor, onFocus]);

  useEffect(() => {
    if (!editor) return;
    if (!onBlur) return;

    editor.on('blur', onBlur);
    return () => editor.off('blur', onBlur);
  }, [editor, onBlur]);

  useEffect(() => {
    if (!editor) return;
    if (disabled) editor.setOption('readOnly', true);
    else editor.setOption('readOnly', false);
  }, [editor, disabled]);

  const style = {
    fontSize: fontSize + 'px',
    lineHeight: lineHeightInPx + 'px',
  };

  return (
    <div className={(className || '') + blockClass + dynamicClass} style={style}>
      <textarea className={textareaClass} ref={textareaRef} />
    </div>
  );
};
