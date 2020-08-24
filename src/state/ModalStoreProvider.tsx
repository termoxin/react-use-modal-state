import React, { createContext, useReducer } from 'react';

import { modalsReducer } from './modalReducer';
import { ModalStoreProviderValue } from '../types';

const initialState = {};

export const globalContext = createContext(initialState);
const { Provider } = globalContext;

export const ModalStoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(modalsReducer, initialState);

  const value: ModalStoreProviderValue<typeof state> = {
    state,
    dispatch,
  };

  return <Provider value={value}>{children}</Provider>;
};
