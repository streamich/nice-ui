import * as React from 'react';
import useRefMounted from 'react-use/lib/useRefMounted';
import useSetState from 'react-use/lib/useSetState';
import useEvent from '../useEvent';

const {useMemo, useCallback} = React;

export interface DropAreaState {
  over: boolean;
}

export interface DropAreaBond {
  onDragOver: React.DragEventHandler;
  onDragEnter: React.DragEventHandler;
  onDragLeave: React.DragEventHandler;
  onDrop: React.DragEventHandler;
  onPaste: React.ClipboardEventHandler;
}

export interface DropAreaOptions {
  onFiles?: (files: File[], event?) => void;
  onText?: (text: string, event?) => void;
  onUri?: (url: string, event?) => void;
}

const noop = () => {};
const defaultState: DropAreaState = {
  over: false,
};

const createProcess = (options: DropAreaOptions, mounted: React.RefObject<boolean>) => (
  dataTransfer: DataTransfer,
  event,
) => {
  const uri = dataTransfer.getData('text/uri-list');

  if (uri) {
    (options.onUri || noop)(uri, event);
    return;
  }

  if (dataTransfer.files && dataTransfer.files.length) {
    (options.onFiles || noop)(Array.from(dataTransfer.files), event);
    return;
  }

  if (dataTransfer.items && dataTransfer.items.length) {
    dataTransfer.items[0].getAsString((text) => {
      if (mounted.current) {
        (options.onText || noop)(text, event);
      }
    });
  }
};

const useDropArea = (options: DropAreaOptions = {}): DropAreaState => {
  const {onFiles, onText, onUri} = options;
  const mounted = useRefMounted();
  const [state, setStateRaw] = useSetState<DropAreaState>((() => defaultState) as any);
  // TODO: need to memoize it inside useSetState.
  const setState = useCallback(setStateRaw, []);
  const process = useMemo(() => createProcess(options, mounted), [onFiles, onText, onUri]);
  useEvent('dragover', (event) => {
    event.preventDefault();
    setState({over: true});
  });
  useEvent('dragenter', (event) => {
    event.preventDefault();
    setState({over: true});
  });
  useEvent('dragleave', (event) => {
    setState({over: false});
  });
  useEvent('dragexit', (event) => {
    setState({over: false});
  });
  useEvent('drop', (event) => {
    event.preventDefault();
    setState({over: false});
    process(event.dataTransfer, event);
  });
  useEvent('paste', (event) => {
    process(event.clipboardData, event);
  });
  return state;
};

export default useDropArea;
