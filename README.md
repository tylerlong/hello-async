# Hello Async

To demonstrate all kinds of ways to implement async with React & Redux.

If you like this repository, please :star: it and help to spread the word! :heart:

## Diffrent ways to implement async

1. [Writing Async Code Inline](./async-code-inline)
1. [Extracting Async Action Creator](./async-action-creator)
1. [Use Redux Thunk](./redux-thunk)
1. [Use Redux Saga](./redux-saga)
1. [Use Redux Logic](./redux-logic)
1. [Use Redux with React Hooks](./redux-react-hooks)

## Oncoming

1. [Use Redux Loop](https://github.com/redux-loop/redux-loop)

## My favorite solution isn't in the list

1. :fork_and_knife: Fork this project and submit a PR.
1. :point_right: [creating an issue](https://github.com/tylerlong/hello-async/issues/new?title=Could%20you%20please%20add%20a%20sample%20project%20for%20%3Cxxx%3E%20?).

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
    1. [Redux Logic](https://github.com/jeffbski/redux-logic)

This repo is trying to add the missing things:

1. Runnable projects. You can download and run them without modification.
1. Provide sample code for more alternatives:
    - Redux Saga
    - Redux Logic
    - ...

## How to run

Take [Writing Async Code Inline](./async-code-inline) for example:

```sh
git clone git@github.com:tylerlong/hello-async.git
cd  hello-async/async-code-inline
yarn install
yarn start
```
