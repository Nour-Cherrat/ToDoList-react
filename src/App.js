import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
      <div className="App">
        <Header />
        <div className="container">
          <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
          <ToDoForm addTask={addTask}/>
        </div>
      </div>
  );
}

export default App;
