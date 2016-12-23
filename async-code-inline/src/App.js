import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { showNotification, hideNotification } from './actions'

class App extends Component {
  constructor (props) {
    super(props)
    this.showNotificationWithTimeout = this.showNotificationWithTimeout.bind(this)
  }

  showNotificationWithTimeout (text) {
    this.props.showNotification(text)
    setTimeout(() => {
      this.props.hideNotification()
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
          <h1>{this.props.text}</h1>
        </div>
      </div>
    )
  }
}

const ConnectedApp = connect((state) => {
  return {
    text: state.text
  }
},
{ showNotification, hideNotification })(App)

export default ConnectedApp
