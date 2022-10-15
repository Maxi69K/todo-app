import React, { Component } from "react";

class NewTodo extends Component {
  state = {
    msg: '',
    done: false,
  }
  setNewMsg = (e) => {
    this.setState({
        msg: e.target.value
    })
  }
  addTodo = () => {
    this.props.addIntoTodos(this.state);
    this.setState({msg: ''});
  }
  render() {
    return (
      <div className="row">
        <div className="input-group">
          <input
            onChange={this.setNewMsg}
            type="text"
            className="form-control"
            placeholder="new msg"
            value={this.state.msg}
          />
          <div className="input-group-append">
            <button onClick={this.addTodo} className="btn">Add</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTodo;