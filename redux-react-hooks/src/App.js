import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { showNotification, hideNotification } from './actions'

const App = () => {
  const [nextNotificationId, setNextNotificationId] = useState(null)

  const dispatch = useDispatch()

  const notifications = useSelector(state => state.notifications)

  function showNotificationWithTimeout (text) {
    dispatch(showNotification(text, nextNotificationId + 1)).then(() => {
      setTimeout(() => {
        dispatch(hideNotification(id))
      }, 5000)
      setNextNotificationId(nextNotificationId + 1)
    })
  }

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
        <button onClick={() => showNotificationWithTimeout('Hello')}>Show "Hello"</button>
        &nbsp;
        <button onClick={() => showNotificationWithTimeout('Async')}>Show "Async"</button>
        {notifications.map((notification) => {
          return <h1 key={notification.id}>{notification.text}</h1>
        })}
      </div>
    </div>
  )
}

export default App
