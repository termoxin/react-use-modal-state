# react-use-modal-state

The way to make modal state management in React painless 😄

## 💡 What problem does it solve?

The project helps to manage the state of modal elements easily. Most importantly, without pain

## 📼 What are the use cases for the package?

The usage of the project starts with hackneyed modal window, lightboxes and ends with hiding buttons in different React component

## ❓ Why should it be used?

1. It will help to get rid of fatigue when working with a vast number of modal element
2. It is easy to manage modal window merely having their name saved in constant
3. It is simple, tiny, and it does not have dependencies

## 🔧 Installation

`npm install react-use-modal-state` or `yarn add react-use-modal-state`

## 📑 Documentation

https://termoxin.github.io/react-use-modal-state/global.html#useModalState

## 🖐 API

```tsx
{ isOpened, open, close, state, set, setAndOpen, reset, resetAndClose, } = useModalState(modalName, initialState)
```

`isOpened` A boolean to know the state whether a modal element is visible or not

`open` A function to open modal element

`close` A function to close modal element

`state` A custom state of the modal element (it consists of predefined `isOpened` property, but you can redeclare it whenever you want to)

`set` A function to set the custom state for the modal element

`setAndOpen` A function to set custom state and open a modal element (by changing its `isOpened` property)

`reset` A function to reset custom state (it resets the state to object with `isOpened=false` when initialState is not defined)

`resetAndClose` The function does the same like `reset` does, but also resets modal element state and close it

`modalName` A unique identification for a modal element to refer to it easily in other places of an app

`initialState` An optional argument to set initialState (is object with `isOpened=false` by default)

## Demo 📺

https://codesandbox.io/s/react-use-modal-state-demo-vyqez
