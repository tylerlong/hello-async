const showNotification = (id, text) => {
  return { type: 'SHOW_NOTIFICATION', id, text }
}

const hideNotification = (id) => {
  return { type: 'HIDE_NOTIFICATION', id }
}

let nextNotificationId = 0
const showNotificationWithTimeout = (text) => {
  return (dispatch) => {
    const id = nextNotificationId++
    dispatch(showNotification(id, text))
    setTimeout(() => {
      dispatch(hideNotification(id))
    }, 5000)
  }
}

export { showNotificationWithTimeout }
