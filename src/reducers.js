import { combineReducers } from 'redux'
import {
  ADD_BOARD
} from './actions'
import uniqueId from 'lodash/uniqueId'

function boards(state = [], action) {
  switch (action.type) {
    case ADD_BOARD:
      return [
        ...state,
        {
          id: uniqueId(''),
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