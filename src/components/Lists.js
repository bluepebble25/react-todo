import React from 'react'
import List from './List';

function Lists({todoList, setTodoList}) {
  return (
    <div>
    {todoList.map((data) => (
      <List todoList={todoList} setTodoList={setTodoList} data={data}  />
    ))}
    </div>
  )
}

export default Lists