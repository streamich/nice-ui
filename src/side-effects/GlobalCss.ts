import * as React from 'react';
import {globalCss} from 'p4-css';

let emitted = false;

class GlobalCss extends React.Component {
  componentDidMount() {
    if (!emitted) {
      emitted = true;
      globalCss();
    }
  }

  componentWillUnmount() {
    // tslint:disable-next-line no-console
    console.warn('<GlobalCss> is not meant to be ever un-mounted.');
  }

  render() {
    return null;
  }
}

export default GlobalCss;
