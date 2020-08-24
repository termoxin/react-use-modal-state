import isEqual from 'lodash/isEqual';
import { useEffect, useCallback, useContext } from 'react';

import { globalContext } from '../state/ModalStoreProvider';
import { SET_MODAL_STATE } from '../state/modalReducer';

export type BasicState<S> = S & {
  isOpened?: boolean;
};

interface CreateSetterActionOutput<T> {
  name: string;
  state: T;
}

interface CreateSetterAction<T> {
  type: string;
  payload: CreateSetterActionOutput<T>;
}

interface UseModalStateReturn<T> {
  isOpened: boolean;
  state: T;
  close: () => void;
  open: () => void;
  set: (value: T) => void;
  reset: () => void;
  setAndOpen: (value: T) => void;
  resetAndClose: () => void;
}

/**
 * A hook to access the modals' state. This hook takes n modal name
 * as a first argument
 *
 * This hook takes an initial state as the second optional argument
 * that allows you to set initial data for the specific modal's state based on the modal name argument
 *
 *
 * @param name modal name
 * @param initialState initialState for the specific modal
 *
 * @returns the modal's state and helper functions
 *
 * @example
 *
 * import React from 'react'
 *
 * import { useModalState } from 'react-use-modal-state'
 *
 * export const ExampleModal = () => {
 *  const {isOpened, state: {counter}, set} = useModalState(EXAMPLE_MODAL, {
 *    counter: 0
 *  })
 *
 *  return (
 *    <div>
 *      {isOpened && <div>{counter}</div>}
 *      <button onClick={() => set('counter', counter + 1)}>increment</button>
 *    </div>
 *   )
 *  }
 */

export const useModalState = <T>(
  name: string,
  initialState = {} as BasicState<T>
): UseModalStateReturn<T> => {
  const { state: currentModalState, dispatch } = useContext<any>(globalContext);

  const state = currentModalState?.[name];

  const createSetterAction = useCallback(
    (payload: T): CreateSetterAction<T> => ({
      type: SET_MODAL_STATE,
      payload: { state: payload as T, name },
    }),
    [name]
  );

  useEffect(() => {
    if (!state) {
      const newModalState = { isOpened: false, ...initialState };

      dispatch(createSetterAction(newModalState));
    }
  }, [createSetterAction, dispatch, initialState, state]);

  const close = (): void => {
    if (state?.isOpened) {
      dispatch(createSetterAction({ ...state, isOpened: false }));
    }
  };

  const open = (): void => {
    if (!state?.isOpened) {
      dispatch(createSetterAction({ ...state, isOpened: true }));
    }
  };

  const set = (value: T): void => {
    const oldState = state;
    const newState = { ...state, ...value };

    if (!isEqual(oldState, newState)) {
      dispatch(createSetterAction(newState));
    }
  };

  const reset = (): void => {
    dispatch(createSetterAction({ ...state, ...initialState, isOpened: false }));
  };

  const setAndOpen = (value: T): void => {
    set({ ...value, isOpened: true });
  };

  const resetAndClose = (): void => {
    if (state?.isOpened) {
      dispatch(createSetterAction({ ...initialState, isOpened: false }));
    }
  };

  const output = {
    isOpened: state?.isOpened ?? false,
    state: { ...initialState, ...state } as T,
    close,
    open,
    set,
    setAndOpen,
    reset,
    resetAndClose,
  };

  return output;
};
