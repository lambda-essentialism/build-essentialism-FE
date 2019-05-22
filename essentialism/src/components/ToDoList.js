import React from 'react';
import TodoItem from './todoitem';
import '../App.css'
export default function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map(item => (
        <TodoItem key={item.id} item={item} toggle={props.toggle} />
      ))}
    </div>
  );
}