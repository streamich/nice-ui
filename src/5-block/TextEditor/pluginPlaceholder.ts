/**
 * This adds `placeholder` prop to CodeMirror config.
 *
 * @param CodeMirror
 */
export function addPlaceholderPlugin(CodeMirror: any) {
  CodeMirror.defineOption('placeholder', '', (cm: any, val: any, old: any) => {
    const prev = old && old !== CodeMirror.Init;
    if (val && !prev) {
      cm.on('blur', onBlur);
      cm.on('change', onChange);
      cm.on('swapDoc', onChange);
      onChange(cm);
    } else if (!val && prev) {
      cm.off('blur', onBlur);
      cm.off('change', onChange);
      cm.off('swapDoc', onChange);
      clearPlaceholder(cm);
      const wrapper = cm.getWrapperElement();
      wrapper.className = wrapper.className.replace(' CodeMirror-empty', '');
    }
    if (val && !cm.hasFocus()) onBlur(cm);
  });

  function clearPlaceholder(cm: any) {
    if (cm.state.placeholder) {
      cm.state.placeholder.parentNode.removeChild(cm.state.placeholder);
      cm.state.placeholder = null;
    }
  }

  function setPlaceholder(cm: any) {
    clearPlaceholder(cm);
    const elt = (cm.state.placeholder = document.createElement('pre'));
    elt.style.cssText = 'height: 0; overflow: visible';
    elt.style.direction = cm.getOption('direction');
    elt.className = 'CodeMirror-placeholder CodeMirror-line-like';
    let placeHolder = cm.getOption('placeholder');
    if (typeof placeHolder === 'string') placeHolder = document.createTextNode(placeHolder);
    elt.appendChild(placeHolder);
    cm.display.lineSpace.insertBefore(elt, cm.display.lineSpace.firstChild);
  }

  function onBlur(cm: any) {
    if (isEmpty(cm)) setPlaceholder(cm);
  }

  function onChange(cm: any) {
    const wrapper = cm.getWrapperElement();
    const empty = isEmpty(cm);
    wrapper.className = wrapper.className.replace(' CodeMirror-empty', '') + (empty ? ' CodeMirror-empty' : '');
    if (empty) setPlaceholder(cm);
    else clearPlaceholder(cm);
  }

  function isEmpty(cm: any) {
    return cm.lineCount() === 1 && cm.getLine(0) === '';
  }
}
