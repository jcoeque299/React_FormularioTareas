import React from 'react'

export const Todo = ({todo, deleteTodo, updateStateTodo, updateTodo}) => {

  const {id, title, description, priority, state} = todo

  return (
      <li className='list-group-item'>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className={state && 'completada'}> 
              {title}
            </h5>
            <p className={state && 'completada'}>{description}</p>
            <div className='d-flex'>
              <button onClick={() => deleteTodo(id)} className='btn btn-sm btn-danger mr-2'>Eliminar</button>
              <button onClick={() => updateTodo(todo)} className='btn btn-sm btn-warning mr-2'>Editar</button>
              <button onClick={() => updateStateTodo(id)} className='btn btn-sm btn-primary mr-2'>Actualizar Estado</button>
            </div>
          </div>
          <span className="badge badge-primary">
            {priority && "prioridad"}
            </span>
        </div>
      </li>
  )
}
