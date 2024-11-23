import React from 'react'

const TodoCard = (props) => {
  const {todo,handleDeleteTodo,todoIndex,handleCompleteTodo}=props
  
  return (
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <div className='todo-buttons'></div>
      <button disabled={todo.complete} onClick={()=>{
        handleCompleteTodo(todoIndex)
      }}>
        <h6>Done</h6>
      </button>
      <button onClick={()=>{
        handleDeleteTodo(todoIndex)
      }}>
        <h6 >Delete</h6>
      </button>
      
    </div>
  )
}

export default TodoCard
