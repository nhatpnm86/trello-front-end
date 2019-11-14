/*
 * action types
 */

export const ADD_BOARD = 'ADD_BOARD'
export const SHOW_BOARD = 'SHOW_BOARD'

/*
 * other constants
 */



/*
 * action creators
 */

export function addBoard(text) {
  return { type: ADD_BOARD, text }
}

export function showBoard(index) {
  return { type: SHOW_BOARD, index }
}