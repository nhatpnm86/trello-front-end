import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Board = ({ id, text }) => (
    <li>
        <Link
            exact
            to={`/board/${id}`}
        >
            {text}
        </Link>
    </li>
)

Board.propTypes = {
    text: PropTypes.string.isRequired
}

export default Board