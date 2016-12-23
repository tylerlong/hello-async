# Hello Async

This is a simple app to demonstrate all kinds of ways to implement async in a React + Redux app.

This repo is inspired by [this answer](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559) on stackoverflow.

The accepted answer is awesome.

> Once again [DanAbramov](http://stackoverflow.com/users/458193/dan-abramov) shows how thoughtful the Redux design choices are, and how he excels in explaining them.

But there is something missing:

1. no runnable sample project
1. no sample code for other alternatives, such as:
    1. [redux-saga](https://github.com/yelouafi/redux-saga)
    1. redux-loop

This repo is trying to add the missing things:

1. Runnable projects. You can download and run them in 3 minutes.
1. Provide sample code for redux-saga


## Diffrent ways to implement async in a React + Redux app

- [Writing Async Code Inline](./async-code-inline)
- [Extracting Async Action Creator](./async-action-creator)


## How to run

Take [Writing Async Code Inline](./async-code-inline) for example:

```
git clone git@github.com:tylerlong/hello-async.git
cd  hello-async/async-code-inline
yarn start
```
