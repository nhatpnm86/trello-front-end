import React from 'react'
import PropTypes from 'prop-types'
import Board from './Board'

const BoardCollection = ({ boards, onBoardClick }) => (
  <ul>
    {boards.map((board, index) => (
      <Board key={index} {...board} onClick={() => onBoardClick(index)} />
    ))}
  </ul>
)

BoardCollection.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onBoardClick: PropTypes.func.isRequired
}

export default BoardCollection