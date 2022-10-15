import React from "react";

const Todo = ({ todo, index, markTodo, deleteTodo }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Todo: {index + 1}</h4>
      </div>
      <div className="card-body">
        <h3 className={todo.done ? 'complete' : 'incomplete'}>{todo.msg}</h3>
      </div>
      <div className="card-footer">
        <button onClick={() => deleteTodo(index)} className="delete-btn">Delete</button>
        <button onClick={() => markTodo(index)} className="mark-btn">Mark</button>
      </div>
    </div>
  )
}

export default Todo;