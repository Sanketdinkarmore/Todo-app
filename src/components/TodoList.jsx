import React from 'react'
import TodoCard from './TodoCard'


export default function TodoList(props) {

  const {todos,selectedTabs,}=props

   

    const filterTodosList=selectedTabs=='All'? todos :selectedTabs=='Completed'? todos.filter(val=>val.complete): todos.filter(val=>!val.complete)

  return (
    <>
    {filterTodosList.map((todo,todoIndex)=>{
      return(
        <TodoCard  key={todoIndex} 
        todoIndex={todos.findIndex(val=> val.input == todo.input)}
        {...props}
         todo={todo} />
      )

    })}
    </>
  )
}
