const showNotification = (id, text) => {
  return { type: 'SHOW_NOTIFICATION', id, text }
}

const hideNotification = (id) => {
  return { type: 'HIDE_NOTIFICATION', id }
}

const showNotificationWithTimeout = (text) => {
  return { type: 'SHOW_NOTIFICATION_WITH_TIMEOUT', text }
}

export { showNotification, hideNotification, showNotificationWithTimeout }
