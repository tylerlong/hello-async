# Redux Saga

redux-saga is a library that aims to make side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.


## Pros

- Contrary to redux thunk, you don't end up in callback hell.
- You can test your asynchronous flows easily.
- Your actions stay pure.


## Cons

- It depends on ES6 Generators which is relatively new.


## Notes

The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects.

Ref: http://yelouafi.github.io/redux-saga/
