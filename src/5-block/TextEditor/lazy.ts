import {lazy} from '../../utils/lazy';
import {loadCodeMirror} from './loadCodeMirror';

export default lazy((): any => {
  loadCodeMirror(); // Start pre-loading CodeMirror.
  return import('.');
});
