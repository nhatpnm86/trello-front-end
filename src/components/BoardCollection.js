import React from 'react'
import PropTypes from 'prop-types'
import Board from './Board'

const BoardCollection = ({ boards }) => (
  <ul>
    {boards.map((board, index) => (
      <Board key={index} {...board} />
    ))}
  </ul>
)

BoardCollection.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default BoardCollection