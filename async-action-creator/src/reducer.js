import { combineReducers } from 'redux'

const notifications = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return [...state, { id: action.id, text: action.text }]
    case 'HIDE_NOTIFICATION':
      return state.filter((notification) => { return notification.id !== action.id })
    default:
      return state
  }
}

const combinedReducers = combineReducers({
  notifications
})

export default combinedReducers
