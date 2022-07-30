import React, {useState} from 'react';
import './App.css';

const btnStyle = {
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

const getListStyle = (isCompleted) => {
  return {
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: isCompleted ? 'line-through' : 'none'
    // textDecoration: 'line-through'
  }
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleClickDelete = (id) => {
    let newTodoList = todoList.filter((data) => data.id !== id);
    setTodoList(newTodoList);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

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
    <div className="container">
      <div className="todo-block">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야 할 일을 입력하세요"
            value={inputValue}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>

        {todoList.map((data) => (
          <div key={data.id} style={getListStyle(data.isCompleted)}>
            <input type="checkbox" defaultChecked={false} onClick={() => {handleCompleteChange(data.id)}} />
              {data.title}
            <button style={btnStyle} onClick={() => handleClickDelete(data.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
