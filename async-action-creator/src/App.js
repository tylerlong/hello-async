import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { showNotificationWithTimeout } from './actions';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={() => showNotificationWithTimeout(this.props.dispatch, 'Hello')}>Show "Hello"</button>
          &nbsp;
          <button onClick={() => showNotificationWithTimeout(this.props.dispatch, 'Async')}>Show "Async"</button>
          {this.props.messages.map((message, index) => {
            return <h1 key={index}>{message}</h1>;
          })}
        </div>
      </div>
    );
  }
}

App = connect((state) => {
  return {
    messages: state.notifications.map((notification) => notification.text),
  };
})(App);


export default App;
