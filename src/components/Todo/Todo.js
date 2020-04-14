import React from 'react'
import PropTypes from 'prop-types'
import './Todo.css'

const Todo = ({ onClick, completed, text}) => (
    <div
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        className="todo"
    >
     {text}
    </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo