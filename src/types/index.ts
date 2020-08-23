import { Dispatch } from 'react';

export interface Action {
  [key: string]: any;
}

export interface StoreProviderValue<S> {
  dispatch: Dispatch<Action>;
  state: S;
}
