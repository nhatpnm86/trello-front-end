/*
 * action types
 */

export const ADD_BOARD = 'ADD_BOARD';
export const ADD_LIST = 'ADD_LIST';

/*
 * other constants
 */



/*
 * action creators
 */

export function addBoard(text) {
  return { type: ADD_BOARD, text };
};

export function addList(boardId, name) {
  return { type: ADD_LIST, boardId, name };
};