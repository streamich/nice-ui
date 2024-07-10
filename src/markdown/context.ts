import * as React from 'react';
import {MdastContextValue} from './types';

const {useContext} = React;

export const context = React.createContext<MdastContextValue>(null!);

export const useMarkdown = () => useContext(context);
