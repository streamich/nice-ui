import {cloneElement} from 'react';
import {extend} from 'fast-af/extend';

const patchElementStyle = (element, stylePatch) => {
  if (process.env.NODE_ENV === 'production') {
    const {props} = element;
    const {style} = props;

    if (style) {
      props.style = extend(style, stylePatch);
    } else {
      props.style = stylePatch;
    }

    return element;
  } else {
    return cloneElement(element, {
      ...element.props,
      style: {
        ...(element.props.style || {}),
        ...stylePatch,
      },
    });
  }
};

export default patchElementStyle;
