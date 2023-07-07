import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

function handleKeyUp(e, addTodo) {
  const { keyCode, target } = e
  if(keyCode !== 13) return
  if(!target.value.trim()) {
    alert('输入不能为空')
    return
  }
  const todoObj = {
    id: nanoid(),
    name: target.value,
    done: false
  }
  addTodo(todoObj)
  target.value = ''
}

function Header(props) {
  Header.propTypes = {
    addTodo: PropTypes.func.isRequired,
  }
  
  const { addTodo } = props
  return (
    <div className="todo-header">
      <input onKeyUp={(e) => handleKeyUp(e, addTodo)} type="text" placeholder="请输入你的任务名称，按回车键确认" />
    </div>
  )
}

export default Header
