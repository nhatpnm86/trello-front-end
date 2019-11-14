import React from 'react'
import PropTypes from 'prop-types'

const Board = ({ onClick, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Board