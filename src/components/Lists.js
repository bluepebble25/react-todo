import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';

function Lists({todoList, setTodoList}) {
  const handleEnd = (result) => {
    // result가 포함하는 정보: source(출발지)와 destination(목적지)의 정보
    if(!result.destination) return;
    const newTodoList = todoList;
    const [reorderedItem] = newTodoList.splice(result.source.index, 1);
    // splice는 제거된 요소를 배열로 반환한다.

    // 제거한 reorderedItem을 목적지에 insert한다.
    newTodoList.splice(result.destination.index, 0, reorderedItem);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoList.map((data, index) => (
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                <List todoList={todoList} setTodoList={setTodoList} data={data}
                      provided={provided} snapshot={snapshot}
                />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Lists