import React, {useState} from 'react';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: inputValue,
      isCompleted: false
    };

    setTodoList([...todoList, newTodo]);
    setInputValue("");
  };

  const handleDeleteAllClick = () => {
    setTodoList([]);
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
