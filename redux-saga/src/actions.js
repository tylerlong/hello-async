const showNotification = (id, text) => {
  return { type: 'SHOW_NOTIFICATION', id, text }
}

const hideNotification = (id) => {
  return { type: 'HIDE_NOTIFICATION', id }
}

export { showNotification, hideNotification }
