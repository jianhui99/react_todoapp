import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Item(props) {
  Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    checkTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  const { id, name, done } = props
  const [mouse, setMouse] = React.useState(false)

  const handleMouse = (flag) => {
    return () => {
      setMouse(flag)
    }
  }

  const handleCheck = (id) => {
    return (e) => {
      props.checkTodo && props.checkTodo(id, e.target.checked)
    }
  }

  const handleDelete = (id) => {
    return (e) => {
      if(window.confirm('确定删除吗？')) {
        props.deleteTodo && props.deleteTodo(id)
      }
    }
  }

  return (
    <li id={id} onMouseLeave={handleMouse(false)} onMouseEnter={handleMouse(true)} style={{backgroundColor:mouse ? '#ddd' : 'white'}}>
        <label>
          <input type="checkbox" checked={done} onChange={handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={handleDelete(id)} className="btn btn-danger" style={{display:mouse ? 'block':'none'}}>删除</button>
    </li>
  )
}

export default Item
