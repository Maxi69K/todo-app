import React, { Component } from 'react';
import Header from './components/Header';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {todos: []};

  componentDidMount(){
    let dataTodo = [];
    if (localStorage.dataTodo) {
      dataTodo = JSON.parse(localStorage.dataTodo)
    }
    this.setState({todos: dataTodo})
  }
  componentDidUpdate(){
    localStorage.dataTodo = JSON.stringify([...this.state.todos])
  }

  addIntoTodos = (todo) => {
    //todo.id = Math.floor(Math.random()*(10000 - 10)-10);
    this.setState({todos: [...this.state.todos, todo]})
  }

  markTodo = (index) => {
    const copyTodos = [...this.state.todos];
    copyTodos[index].done = !copyTodos[index].done;
    this.setState({todos: copyTodos});
  }

  deleteTodo = (index) => {
    const copyTodos = [...this.state.todos];
    copyTodos.splice(index, 1);
    this.setState({todos: copyTodos});
  }

  render() {
    return (
      <div className="container">
        <Header />
        <NewTodo addIntoTodos={this.addIntoTodos} />
        <TodoList
          todos={this.state.todos}
          markTodo={this.markTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
