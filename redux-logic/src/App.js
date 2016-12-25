import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { showNotificationWithTimeout } from './actions'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={() => this.props.showNotificationWithTimeout('Hello')}>Show "Hello"</button>
          &nbsp;
          <button onClick={() => this.props.showNotificationWithTimeout('Async')}>Show "Async"</button>
          {this.props.notifications.map((notification, index) => {
            return <h1 key={notification.id}>{notification.text}</h1>
          })}
        </div>
      </div>
    )
  }
}

const ConnectedApp = connect((state) => {
  return {
    notifications: state.notifications
  }
}, { showNotificationWithTimeout })(App)

export default ConnectedApp
