import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { UseModalStateExample } from '../src/useModalState/UseModalStateExample';
import { ModalStoreProvider } from '../src/state/ModalStoreProvider';

test('modal state should change correctly', () => {
  render(
    <ModalStoreProvider>
      <UseModalStateExample />
    </ModalStoreProvider>
  );

  const isOpened = screen.getByText(/opened/i);
  const yourUsername = screen.getByText(/your username/i);

  const openButton = screen.getByText(/open on click/i);
  const closeButton = screen.getByText(/close on click/i);
  const updateUsernameButton = screen.getByText(/update username/i);
  const resetButton = screen.getByText(/reset/i);
  const setAndOpen = screen.getByText(/set username and open/i);
  const closeAndReset = screen.getByText(/close and restore/i);

  expect(isOpened).toHaveTextContent('Opened: false');

  fireEvent.click(openButton);
  expect(isOpened).toHaveTextContent('Opened: true');

  fireEvent.click(closeButton);
  expect(isOpened).toHaveTextContent('Opened: false');

  fireEvent.click(updateUsernameButton);
  expect(yourUsername).toHaveTextContent('Your username: John');

  fireEvent.click(resetButton);
  expect(yourUsername).toHaveTextContent('Your username:');

  fireEvent.click(setAndOpen);
  expect(isOpened).toHaveTextContent('Opened: true');
  expect(yourUsername).toHaveTextContent('Your username: Johny');

  fireEvent.click(closeAndReset);

  expect(isOpened).toHaveTextContent('Opened: false');
  expect(yourUsername).toHaveTextContent('Your username:');
});
