import { Dispatch } from 'react';

export interface Action {
  [key: string]: any;
}

export interface ModalStoreProviderValue<S> {
  dispatch: Dispatch<Action>;
  state: S;
}
