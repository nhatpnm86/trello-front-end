import { combineReducers } from 'redux-immutable';
import {
  ADD_BOARD,
  ADD_LIST
} from './actions';
import uniqueId from 'lodash/uniqueId';
import { mergeDeep } from 'immutable';

function boards(state = [], action) {
  switch (action.type) {
    case ADD_BOARD:
      return [
        ...state,
        {
          id: uniqueId(''),
          text: action.text,
          lists: []
        }
      ];
    case ADD_LIST:
      console.log(action);
      return mergeDeep(
        state,
        [
          {
            id: action.boardId,
            lists: [
              {
                id: uniqueId(''),
                name: action.name,
                tasks: []
              }
            ]
          }
        ]
      );

    default:
      return state;
  };
};

const trelloApp = combineReducers({
  boards
});

export default trelloApp;