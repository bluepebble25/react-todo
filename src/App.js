import React, {useState} from 'react';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

const initialTodoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: inputValue,
      isCompleted: false
    };

    let newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
    setInputValue("");
  };

  const handleDeleteAllClick = () => {
    setTodoList([]);
    localStorage.setItem('todoList', JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleDeleteAllClick}>Delete All</button>
        </div>
        <Lists todoList={todoList} setTodoList={setTodoList} />
        <Form handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} />
      </div>
    </div>
  );
}

export default App;
