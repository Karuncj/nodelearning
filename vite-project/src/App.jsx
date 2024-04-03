import { useState } from "react"
import {NewTodoForm} from "./NewTodoform"
import "./styles.css"
import { TodoList } from "./TodoList"
export default function App()
{
  const [todos,setTodos] = useState([])
  function addTodo(title) {
       setTodos(currenttodos=>{
      return [
        ...currenttodos,
        {
          id:crypto.randomUUID(),
          title:title,
          completed:false
        },
      ]
    })
  }
  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return{
            ...todo,
            completed:completed
          }
        }
        return todo
      })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)
    })
  }
  return(
    <>
  <NewTodoForm onSubmit={addTodo}/>
  <h1 className="header">Todo list</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  )
}
