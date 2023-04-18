import "./App.css"
import React from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

export default class App extends React.Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: false },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打豆豆", done: false },
    ],
  }

  addTodo = todoObj => {
    const { todos } = this.state
    this.setState({ todos: [todoObj, ...todos] })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }

  deleteAllDoneTodos = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      return !todos.done
    })
    this.setState({ todos: newTodos })
  }

  checkAllTodos = (check) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      return {...todo, done: check}
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header todos={todos} addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} deleteAllDoneTodos={this.deleteAllDoneTodos} checkAllTodos={this.checkAllTodos} />
        </div>
      </div>
    )
  }
}
