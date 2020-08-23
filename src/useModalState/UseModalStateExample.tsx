import React from 'react';

import { useModalState } from '.';

interface OpenExampleModalState {
  username: string | null;
}

export const UseModalStateExample = (): React.ReactElement => {
  const {
    isOpened,
    open,
    close,
    set,
    setAndOpen,
    resetAndClose,
    reset,
    state: { username },
  } = useModalState<OpenExampleModalState>('OPEN_EXAMPLE_MODAL', {
    username: null,
  });

  return (
    <div>
      <h1>
        Opened:
        {` ${isOpened}`}
      </h1>
      <p>
        Your username:
        {` ${username}`}
      </p>
      <button onClick={open} type="button">
        Open on click
      </button>
      <button onClick={close} type="button">
        Close on click
      </button>
      <button
        onClick={(): void =>
          set({
            username: 'John',
          })
        }
        type="button"
      >
        Update username
      </button>
      <button onClick={reset} type="button">
        Reset
      </button>
      <button
        onClick={(): void =>
          setAndOpen({
            username: 'Johny',
          })
        }
        type="button"
      >
        Set username and open
      </button>
      <button onClick={resetAndClose} type="button">
        close and restore
      </button>
    </div>
  );
};
