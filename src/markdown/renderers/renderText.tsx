import * as React from 'react';
import {RenderNode, IText} from '../types';

const renderText: RenderNode = (renderers, flat, idx, props, state) => flat.nodes[idx].value;

export default renderText;
