import React from 'react'

function Header(props) {

  const{ todos }=props

  const todolength=todos.length

  const IsTasksPlural=todos.length !=1;
  
  const TaskorTasks=IsTasksPlural? 'tasks' :'task'

  return (
    <>
    <header><h1 className='text-gradient'>you have {todolength} open {TaskorTasks}</h1></header>
    </>
  )
}

export default Header
