import { combineReducers } from 'redux'
import {
  ADD_BOARD,
  SHOW_BOARD
} from './actions'

function boards(state = [], action) {
  switch (action.type) {
    case ADD_BOARD:
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}

const trelloApp = combineReducers({
  boards
})

export default trelloApp