import React from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class Hello extends React.Component {
  handleKeyUp = event => {
    console.log(event.keyCode, event.target.value);
    if (event.keyCode !== 13) return;
    if (event.target.value.trim() === "") return alert("输入不能为空");
    const newTodo = { id: nanoid(), name: event.target.value, done: false };
    this.props.addTodo(newTodo);
    event.target.value = ''
  };
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    );
  }
}
