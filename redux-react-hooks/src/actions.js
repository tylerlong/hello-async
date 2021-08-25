const showNotification = (text, id) => {
  return { type: 'SHOW_NOTIFICATION', text, id }
}

const hideNotification = (id) => {
  return { type: 'HIDE_NOTIFICATION', id }
}

export { showNotification, hideNotification }
