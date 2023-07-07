import React from 'react'
import PropTypes from 'prop-types'
import Item from "../Item"
import './index.css'

function List(props) {
  List.propTypes = {
    todos: PropTypes.array.isRequired,
    checkTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  const { todos, checkTodo, deleteTodo } = props
  return (
    <ul className="todo-main">
      {
        todos.map(todo => {
          return <Item key={todo.id} {...todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
        })
      }
    </ul>
  )
}

export default List