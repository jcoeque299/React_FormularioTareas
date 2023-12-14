import React, { useState } from 'react'
import Formulario from './components/Formulario'
import TodoList from './components/TodoList'

const initialState = [
  {
    id:1,
    title:"todo 01",
    description:"Descripcion 01",
    state: "pendiente",
    priority:false,
    state:true // Cambiamos a un booleano para manejarlo mejor.
  },
  {
    id:2,
    title:"todo 02",
    description:"Descripcion 02",
    state: "pendiente",
    priority:false,
    state:true
  }
]

const App = () => {

  // Estado - Lista de componentes
  const [todoEdit, setTodoEdit] = useState("")
  const [todos, setTodos] = useState(initialState)

  // Funcion añadir tarea
  const addTodo = todo => {
    setTodos([...todos,todo])
  }

  // Función deleteTodo
  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }

  const updateTodo = todo => {
    setTodoEdit(todo)
  }

  const updateData = todoEdit => {
    const newArray = todos.map(todo => {
      if (todo.id == todoEdit.id) {
        todo.title = todoEdit.title,
        todo.description = todoEdit.description,
        todo.state = todoEdit.state
      }
      return todo
    })
    setTodoEdit("")
    setTodos(newArray)
  }

  // Función updateStateTodo
  const updateStateTodo = id => {
    const newArray = todos.map(todo => {
      if (todo.id == id) {
        todo.state = !todo.state
      }
      return todo
    })
    setTodos(newArray)
  }
  
  return (
    <div className='container'>
      <h1>Formularios</h1>
      < Formulario addTodo = {addTodo} todoEdit = {todoEdit} updateData = {updateData} />
      < TodoList todos={todos} deleteTodo={deleteTodo} updateStateTodo={updateStateTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default App