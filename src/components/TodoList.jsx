import React from 'react'
import { Todo } from './Todo'

const TodoList = ({todos, deleteTodo, updateStateTodo, updateTodo}) => {
  return (
    <div className='mt-2'>
    <h1 className='text-center'>Lista de tareas</h1>
      <ul>
        {
          todos.map(todo=> (
            < Todo key={todo.id} todo = {todo} deleteTodo={deleteTodo} updateStateTodo={updateStateTodo} updateTodo={updateTodo} />
          ))
        }
      </ul>
    </div>

  )
}

export default TodoList