import React from 'react'

const TodoHeader = ({ countTodos, countPendingTodos }) => {
  return (
    <div>
      <h1> Cantidad: {countTodos}, <small> Pendientes: {countPendingTodos} </small></h1>
      <hr />
    </div>
  )
}

export default TodoHeader
