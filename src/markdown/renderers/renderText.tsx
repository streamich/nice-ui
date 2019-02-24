import * as React from 'react';
import {RenderNode, IText} from '../types';

const renderText: RenderNode = (renderers, node: IText, props, state) => node.value;

export default renderText;
