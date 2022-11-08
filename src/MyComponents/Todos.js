import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle={
        minHeight: "70vh",
        margin: "40px auto"
    }
  return (
    <div className="container" style={myStyle}>
      <h4 className= "my-1">Todos List</h4>
      {props.todos.length===0? "No Todos to display" :props.todos.map((todo)=>{
      return(
      <TodoItem todo={todo} keys={todo.sno}onDelete={props.onDelete}/>
      )
       } )}
    </div>
  )
}


