import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Footer(props) {
  Footer.propTypes = {
    todos: PropTypes.array.isRequired,
    checkAllTodo: PropTypes.func.isRequired,
    deleteDoneTodo: PropTypes.func.isRequired
  }

  const { todos } = props
  const total = todos.length
  const doneCount = todos.reduce((pre, todo) => {
    return pre + (todo.done ? 1 : 0)
  }, 0)

  const handleCheckAll = (e) => {
    props.checkAllTodo && props.checkAllTodo(e.target.checked)
  }

  const handleClearDone = () => {
    props.deleteDoneTodo && props.deleteDoneTodo()
  }

  return (
    <div className="todo-footer">
      <label>
        <input onChange={handleCheckAll} type="checkbox" checked={doneCount === total && total !== 0 ? true : false}/>
      </label>
      <span>
        <span>已完成{doneCount}</span> / 全部 {total}
      </span>
      <button onClick={handleClearDone} className="btn btn-danger">清除已完成任务</button>
    </div>
  )
}

export default Footer
