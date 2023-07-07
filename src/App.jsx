import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [state, setState] = React.useState({
    todos: [
      { id: "001", name: "吃饭", done: false },
      { id: "002", name: "睡觉", done: false },
      { id: "003", name: "打代码", done: true },
      { id: "004", name: "逛街", done: false },
    ]
  })

  const addTodo = (todoObj) => {
    const { todos } = state
    const newTodos = [todoObj, ...todos]
    setState({ todos: newTodos })
  }

  const checkTodo = (id, done) => {
    const { todos } = state
    const newTodos = todos.map(todo => {
      if(todo.id === id) return {...todo, done}
      else return todo
    })
    setState({ todos: newTodos })
  }

  const deleteTodo = (id) => {
    const { todos } = state
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setState({ todos: newTodos })
  }

  const checkAllTodo = (done) => {
    const { todos } = state
    const newTodos = todos.map(todo => {
      return {...todo, done}
    })
    setState({ todos: newTodos })
  }

  const deleteDoneTodo = () => {
    const { todos } = state
    const newTodos = todos.filter(todo => {
      return todo.done === false
    })
    setState({ todos: newTodos })
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        {/* Header */}
        <Header addTodo={addTodo}/>
        {/* List */}
        <List todos={state.todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
        {/* Footer */}
        <Footer todos={state.todos} checkAllTodo={checkAllTodo} deleteDoneTodo={deleteDoneTodo}/>
      </div>
    </div>
  );
}

export default App