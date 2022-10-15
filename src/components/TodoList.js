import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, markTodo, deleteTodo }) => {
  const allTodos = todos.map((todo, index) => {
    return <Todo todo={todo} key={index} index={index} markTodo={markTodo} deleteTodo={deleteTodo} />
  })
  return <div className="todo-holder">{allTodos}</div>
}

export default TodoList;