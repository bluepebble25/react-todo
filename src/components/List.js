import React, { useState } from 'react'

const List = React.memo(({todoList, setTodoList, data, provided, snapshot}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data.title);

  const handleDeleteClick = (id) => {
    let newTodoList = todoList.filter((data) => data.id !== id);
    setTodoList(newTodoList);
  };

  const handleCompleteChange = (id) => {
    let newTodoList = todoList.map(data => {
      if(data.id === id) {
        data.isCompleted = !data.isCompleted;
      }
      return data;
    });

    setTodoList(newTodoList);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newTodoList = todoList.map(todo => {
      if(todo.id === data.id) {
        data.title = editedTitle;
      }
      return todo;
    });

    setTodoList(newTodoList);
    setIsEditing(false);
  };

  if(isEditing) {
    return (
      <div
        className="bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded"
      >
        <div>
          <form onSubmit={handleSubmit} >
            <input
              className="w-full"
              value={editedTitle}
              onChange={handleEditChange}
            />
          </form>
        </div>

        <div>
          <button
            className="px-4 py-2"
            type="submit"
            onClick={handleSubmit}
          >
            save
          </button>
          <button
            className="px-3 py-1 border rounded-full text-gray-500 bg-white"
            onClick={() => handleDeleteClick(data.id)}
          >
            x
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div
        key={data.id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-300" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
      >
        <div>
          <input type="checkbox" defaultChecked={false} className="mr-1" onClick={() => {handleCompleteChange(data.id)}} />
          <span className={data.isCompleted ? "line-through" : "none"}>{data.title}</span>
        </div>
        <div>
          <button
            className="px-4 py-2"
            onClick={() => setIsEditing(true)}
          >
            edit
          </button>
          <button
            className="px-3 py-1 border rounded-full text-gray-500 bg-white"
            onClick={() => handleDeleteClick(data.id)}
          >
            x
          </button>
        </div>
      </div>
    )
  }

  
});

export default List