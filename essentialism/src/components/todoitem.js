import React from 'react';
import '../App.css'



export default function TodoItem(props){
  let classNames = "item";
  if (props.item.completed) {
    classNames += " completed";
  }

  function updateTodo(){
    props.toggle(props.item.id)
  }



return (
  <div className={classNames} onClick={updateTodo}>
    <p>{props.item.task}</p>
  </div>
);

}