# Redux Thunk

Finding a way to “legitimize” this pattern of providing dispatch to a helper function,
and help Redux “see” such asynchronous action creators as a special case of normal action creators rather than totally different functions.

In a gist, Redux Thunk teaches Redux to recognize special kinds of actions that are in fact functions.


## Pros

- Dispatching an asynchronous action (really, a series of actions) looks no different than dispatching a single action synchronously to the component.
- We can use thunk action creators in any place where we would use regular action creators. For example, we can use them with `connect()`.


## Cons

- It depends on third party middleware redux-thunk.
- For some apps, you may find yourself in a situation where your asynchronous control flow requirements are too complex to be expressed with thunks.


## Notes

> You might want to look at more advanced asynchronous control flow solutions such as [Redux Saga](../redux-saga) or Redux Loop. Evaluate them,
> compare the examples relevant to your needs, and pick the one you like the most.

Ref: http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
