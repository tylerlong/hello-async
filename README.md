# Hello Async

To demonstrate all kinds of ways to implement async with React & Redux.


## Diffrent ways to implement async

1. [Writing Async Code Inline](./async-code-inline)
1. [Extracting Async Action Creator](./async-action-creator)
1. [Use Redux Thunk](./redux-thunk)


## Oncoming

1. [Use Redux Saga](./redux-saga)


## About the demo projects

In each demo project, we try to implement a notification feature:

- Click buttons to show notifications.
- Each notification auto dismiss after 5 seconds.
- Multiple notifications are allowed simultaneously.


## Motivation

This repo is inspired by [this answer](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559) on stackoverflow.

The accepted answer is awesome.

> Once again [Dan Abramov](http://stackoverflow.com/users/458193/dan-abramov) shows how thoughtful the Redux design choices are, and how he excels in explaining them.

But there is something missing:

1. No runnable sample projects, just some code snippets.
1. No sample code for other alternatives, such as:
    1. [Redux Saga](https://github.com/yelouafi/redux-saga)

This repo is trying to add the missing things:

1. Runnable projects. You can download and run them without modification.
1. Provide sample code for Redux Saga.


## How to run

Take [Writing Async Code Inline](./async-code-inline) for example:

```
git clone git@github.com:tylerlong/hello-async.git
cd  hello-async/async-code-inline
yarn install
yarn start
```
