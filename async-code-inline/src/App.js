import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { showNotification, hideNotification } from './actions'

let nextNotificationId = 0

class App extends Component {
  constructor (props) {
    super(props)
    this.showNotificationWithTimeout = this.showNotificationWithTimeout.bind(this)
  }

  showNotificationWithTimeout (text) {
    const id = nextNotificationId++
    this.props.showNotification(text, id)
    setTimeout(() => {
      this.props.hideNotification(id)
    }, 5000)
  }

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
          <button onClick={() => this.showNotificationWithTimeout('Hello')}>Show "Hello"</button>
          &nbsp;
          <button onClick={() => this.showNotificationWithTimeout('Async')}>Show "Async"</button>
          {this.props.notifications.map((notification) => {
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
},
{ showNotification, hideNotification })(App)

export default ConnectedApp
