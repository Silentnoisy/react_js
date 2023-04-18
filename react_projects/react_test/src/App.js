import "./App.css"
import React from "react"
import axios from "axios"

export default class App extends React.Component {
  state = { list: [] }

  getData = () => {
    axios.get(window.location.href + "api1/student").then(
      reponse => {
        console.log(reponse.data)
        this.setState({ list: reponse.data })
      },
      error => {
        console.log(error)
      }
    )
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <button onClick={this.getData}>点击获取数据</button>
        {list.map(info => <h2 key={info.id}>{info.name},{info.age}</h2> )}
      </div>
    )
  }
}
