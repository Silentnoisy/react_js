import React from "react"
import PropTypes from "prop-types"
import "./index.css"

export default class Hello extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteAllDoneTodos: PropTypes.func.isRequired,
    checkAllTodos: PropTypes.func.isRequired,
  }

  handleClearAllDone = () => {
    this.props.deleteAllDoneTodos()
  }

  handleCheckAll = event => {
    this.props.checkAllTodos(event.target.checked)
  }

  render() {
    const { todos } = this.props
    const doneNum = todos.filter(todo => todo.done).length
    const totalNum = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneNum === totalNum && totalNum !== 0} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneNum}</span> / 全部{totalNum}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    )
  }
}
