import { createLogic } from 'redux-logic'
import { showNotification, hideNotification } from './actions'

let nextNotificationId = 0
const showNotificationWithTimeoutLogic = createLogic({
  type: 'SHOW_NOTIFICATION_WITH_TIMEOUT',
  process ({ getState, action }, dispatch, done) {
    const id = nextNotificationId++
    dispatch(showNotification(id, action.text))
    setTimeout(() => {
      dispatch(hideNotification(id))
      done()
    }, 5000)
  }
})

export default [
  showNotificationWithTimeoutLogic
]
