# Todo App

[Live URL](https://628506692a86ec00091e7a9e--stellular-syrniki-578e44.netlify.app/)

## UML Diagram

![UML](./assets/UML%20new.jpg)

## How the global state is consumed by the components:

- In order to make a state global, we have to create a new context using the "createContext" method from react.

- then we need to create a new context provider so we can share the data and methods to this provider children, which is basicaly any component that will be passed to this provider (in this case, we only passed the list component as the child of the provider).

- we pass whatever value we need to be shared inside the "value" object, in our case we passed the "state object" only, containing the initial state and the methods to set the state.

- the list component will be able to consume this state object with all the related setters.

## The operation of the useForm hook:

This is a custom made hook, which will be responsible for the form actions such as submit & change, this hook takes a callback function as an argument, this callback function takes in the item that will be added or changed as an argument, and the hook will be handling the even and the values passed on submit or on change.
