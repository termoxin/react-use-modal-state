# react-use-modal-state

The way to make modal state management in React painless 😄

## Installation 🔧

`npm install react-use-modal-state` or `yarn add react-use-modal-state`

## Documentation 📑

https://termoxin.github.io/react-use-modal-state/global.html#useModalState

## API

```tsx
{ isOpened, open, close, state, set, setAndOpen, reset, resetAndClose, } = useModalState(modalName, initialState)
```

`isOpened` A boolean to know the state whether a modal element is visible or not

`open` A function to open modal element

`close` A function to close modal element

`state` A custom state of modal element (it consists of predefined `isOpened` property, but you can redeclare it whenever you want to)

`set` A function to set custom state for the modal element

`setAndOpen` A function to set custom state and open a modal element (by changing its `isOpened` property)

`reset` A function to reset custom state (it resets state to object with `isOpened=false` when initialState is not defined)

`resetAndClose` The function does the same like `reset` does, but also resets modal element state and close it

`modalName` A unique identification for a modal element to refer to it easily in other places of an app

`initialState` An optional argument to set initialState (is object with `isOpened=false` by default)

## Demo 📺

https://codesandbox.io/s/react-use-modal-state-demo-vyqez
