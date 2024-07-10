import * as React from 'react';
import {NiceUiServices} from './services/NiceUiServices';

export const context = React.createContext<NiceUiServices>(null!);

export const useNiceUiServices = () => React.useContext(context);
