import * as CodeMirror from 'codemirror';
import {loadCss} from 'thingies/lib/loadCss';
import {loadGlobal, loadScript} from '../../utils/loadScript';
import {addPlaceholderPlugin} from './pluginPlaceholder';

const CODE_MIRROR_VERSION = '5.49.2';

const CODE_MIRROR_LIB = `https://cdn.jsdelivr.net/npm/codemirror@${CODE_MIRROR_VERSION}/lib/codemirror.min.js`;
const CODE_MIRROR_CSS = `https://cdn.jsdelivr.net/npm/codemirror@${CODE_MIRROR_VERSION}/lib/codemirror.min.css`;
const CODE_MIRROR_ADDON_MODE_OVERLAY = `https://cdn.jsdelivr.net/npm/codemirror@${CODE_MIRROR_VERSION}/addon/mode/overlay.min.js`;

const CODE_MIRROR_SPELLCHECK = 'https://cdn.jsdelivr.net/codemirror.spell-checker/latest/spell-checker.min.js';
const CODE_MIRROR_SPELLCHECK_CSS = 'https://cdn.jsdelivr.net/codemirror.spell-checker/latest/spell-checker.min.css';

let cm: typeof CodeMirror;

export const loadCodeMirror = async () => {
  if (cm) return cm;

  loadCss(CODE_MIRROR_CSS);
  loadCss(CODE_MIRROR_SPELLCHECK_CSS);

  cm = await loadGlobal<typeof CodeMirror>('CodeMirror', CODE_MIRROR_LIB);
  addPlaceholderPlugin(cm);

  await Promise.all([loadScript(CODE_MIRROR_ADDON_MODE_OVERLAY)]);
  await loadScript(CODE_MIRROR_SPELLCHECK);

  return cm;
};
