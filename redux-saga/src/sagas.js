import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { showNotification, hideNotification } from './actions'

let nextNotificationId = 0
function* showNotificationWithTimeout (action) {
  const id = nextNotificationId++
  yield put(showNotification(id, action.text))
  setTimeout(function *() {
    yield put(hideNotification(id))
  }, 5000)
}

function* saga () {
  yield * takeEvery('SHOW_NOTIFICATION_REQUESTED', showNotificationWithTimeout)
}

export default saga
