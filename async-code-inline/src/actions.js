const showNotification = (text) => {
  return { type: 'SHOW_NOTIFICATION', text }
}

const hideNotification = () => {
  return { type: 'HIDE_NOTIFICATION' }
}

export { showNotification, hideNotification }
