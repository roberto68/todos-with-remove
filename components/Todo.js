import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, children}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
   {text}
   {children}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
} // children je object ?? a naco by to bolo dobre

export default Todo
