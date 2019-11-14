/*
 * action types
 */

export const ADD_BOARD = 'ADD_BOARD'

/*
 * other constants
 */



/*
 * action creators
 */

export function addBoard(text) {
  return { type: ADD_BOARD, text }
}