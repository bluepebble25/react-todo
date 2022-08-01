import React from 'react'

function List({ todoList, setTodoList, data }) {
  const handleClickDelete = (id) => {
    let newTodoList = todoList.filter((data) => data.id !== id);
    setTodoList(newTodoList);
  };

  const handleCompleteChange = (id) => {
    let newTodo = todoList.map(data => {
      if(data.id === id) {
        data.isCompleted = !data.isCompleted;
      }
      return data;
    });

    setTodoList(newTodo);
  };

  return (
    <div
      key={data.id}
      className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-50 border rounded">
      <div>
        <input type="checkbox" defaultChecked={false} className="mr-1" onClick={() => {handleCompleteChange(data.id)}} />
        <span className={data.isCompleted ? "line-through" : "none"}>{data.title}</span>
      </div>
      <div>
        <button className="px-3 py-1 border rounded-full text-gray-500 bg-white" onClick={() => handleClickDelete(data.id)}>x</button>
      </div>
    </div>
  )
}

export default List