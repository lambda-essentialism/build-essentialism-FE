import React from 'react'
import TodoForm from './ToDoForm'
import TodoList from './ToDoList'
import '../App.css'

const todos=[
  {
    task:'',
    id:1,
    completed:false

  }

]

class Todo extends React.Component {
  constructor() {
    super();
    this.state={
      todos
    };
  }
  
  addItem= item =>{
    this.setState({
      todos:[
        ...this.state.todos,
        {task: item, completed:false,id:Date.now()}
      ]
    })
  }



  toggle=id=>{
    this.setState({
      todos: this.state.todos.map(item=>
        item.id===id ?{...item,completed:!item.completed}:item
        )
    })
  }

  clear=()=>{
    this.setState({
      todos:this.state.todos.filter(item=>!item.completed)
    })
  }
  render() {
    return (
      <div className="Projects">
        <div className="projects-header">
          <h1>Current Projects</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggle={this.toggle}
        />
        <button onClick={this.clear} className='clearbtn'>Clear Completed</button>
      </div>
    );
  }


}
export default Todo;