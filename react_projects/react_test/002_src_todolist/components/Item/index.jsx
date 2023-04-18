import React from "react"
import "./index.css"

export default class Hello extends React.Component {
  state = { mouse: false }

  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  handleChange = id => {
    return event => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  handleDelete = id => {
    return () => {
      if (window.confirm("确定删除吗？")) {
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    const { mouse } = this.state
    const { id, name, done } = this.props.todo
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
          <span>{name}</span>
        </label>
        <button
          style={{ display: mouse ? "inline-block" : "none" }}
          className="btn btn-danger"
          onClick={this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    )
  }
}
