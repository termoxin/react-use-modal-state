import { Action } from '../types/index';

export const SET_MODAL_STATE = 'SET_MODAL_STATE';

export const modalsReducer = <T, A extends Action>(state: T, action: A): T => {
  const { payload, error, type } = action;

  if (!error && type === SET_MODAL_STATE) {
    return {
      ...state,
      [payload.name]: {
        ...payload.state,
        isOpened: payload.state.isOpened ?? false,
      },
    };
  }

  return state;
};
