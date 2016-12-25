import { createLogic } from 'redux-logic'
import { showNotification, hideNotification } from './actions'

let nextNotificationId = 0
const showNotificationWithTimeoutLogic = createLogic({
  type: 'SHOW_NOTIFICATION_WITH_TIMEOUT',
  process ({ getState, action }, dispatch) {
    const id = nextNotificationId++
    dispatch(showNotification(id, action.text))
  }
})

const autoHideNotificationLogic = createLogic({
  type: 'SHOW_NOTIFICATION',
  process ({ getState, action }, dispatch) {
    setTimeout(() => {
      dispatch(hideNotification(action.id))
    }, 5000)
  }
})

export default [
  showNotificationWithTimeoutLogic,
  autoHideNotificationLogic
]
