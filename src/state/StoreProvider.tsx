import React, { createContext, useReducer } from 'react';

import { modalsReducer } from './modalReducer';
import { StoreProviderValue } from '../types';

const initialState = {};

export const globalContext = createContext(initialState);
const { Provider } = globalContext;

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(modalsReducer, initialState);

  const value: StoreProviderValue<typeof state> = {
    state,
    dispatch,
  };

  return <Provider value={value}>{children}</Provider>;
};
