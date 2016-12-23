const reducer = (state = { text: '' }, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { text: action.text }
    case 'HIDE_NOTIFICATION':
      return { text: '' }
    default:
      return state
  }
}

export default reducer
