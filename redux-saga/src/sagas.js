import { takeEvery, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { showNotification, hideNotification } from './actions'

let nextNotificationId = 0
function* showNotificationWithTimeout (action) {
  const id = nextNotificationId++
  yield put(showNotification(id, action.text))
  yield delay(5000)
  yield put(hideNotification(id))
}

function* notificationSaga () {
  yield takeEvery('SHOW_NOTIFICATION_WITH_TIMEOUT', showNotificationWithTimeout)
}

function* rootSaga () {
  yield [
    notificationSaga()
  ]
}

export default rootSaga
