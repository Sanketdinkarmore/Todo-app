import React from 'react'

function Tabs(props) {
  const {todos,selectedTabs,setSelectedTabs}=props



  const tabs=['All','Open','Completed']
  return (
    <>
    <nav className='tab-container'>
    {tabs.map((tab,tabindex)=>{
      const numOfTask=tab=='All'? todos.length :tab== 'Open' ? todos.filter(val=> !val.complete).length:
      todos.filter(val=>val.complete).length
      return(
        <button onClick={()=>{
          setSelectedTabs(tab)
        }} key={tabindex} className={'tab-button '+(tab==selectedTabs?'tab-selected':'') }><h4>{tab}<span>({numOfTask})</span></h4></button>
    )
    })}
    <hr/>
    </nav>
    </>
  )
}

export default Tabs
