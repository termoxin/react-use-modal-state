export const initModalRequest = {
  name: 'EXAMPLE_MODAL',
  state: {
    username: 'John',
  },
};

export const setModalResponse = { EXAMPLE_MODAL: { isOpened: false, username: 'John' } };

export const setExistingModalStateRequest = {
  name: 'EXAMPLE_MODAL',
  state: {
    isOpened: true,
    username: `New John's name`,
  },
};

export const setExistingModalStateResponse = {
  EXAMPLE_MODAL: { isOpened: true, username: `New John's name` },
};

export const setNewModalDataRequest = {
  name: 'EXAMPLE_MODAL',
  state: {
    age: 30,
  },
};
export const setNewModalDataResponse = {
  EXAMPLE_MODAL: { age: 30, isOpened: false },
};
