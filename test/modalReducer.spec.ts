import { modalsReducer } from '../src/state/modalReducer';
import {
  initModalRequest,
  setModalResponse,
  setExistingModalStateRequest,
  setExistingModalStateResponse,
  setNewModalDataRequest,
  setNewModalDataResponse,
} from './fixtures/modalReducer';

test('modals reducer should return expected state', () => {
  const action = {
    payload: initModalRequest,
    type: 'SET_MODAL_STATE',
  };

  const updatedState = modalsReducer({}, action);

  expect(updatedState).toEqual(setModalResponse);
});

test('modals reducer should set data and return expected state', () => {
  const action = {
    payload: setExistingModalStateRequest,
    type: 'SET_MODAL_STATE',
  };

  const updatedState = modalsReducer({}, action);

  expect(updatedState).toEqual(setExistingModalStateResponse);
});

test('modals reducer should set new data and return expected state', () => {
  const action1 = {
    payload: setNewModalDataRequest,
    type: 'SET_MODAL_STATE',
  };

  const action2 = {
    payload: setExistingModalStateRequest,
    type: 'SET_MODAL_STATE',
  };

  const updatedState1 = modalsReducer({}, action1);
  const updatedState2 = modalsReducer({}, action2);

  expect(updatedState2).toEqual(setExistingModalStateResponse);
  expect(updatedState1).toEqual(setNewModalDataResponse);
});
