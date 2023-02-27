import React, { useState, useContext } from 'react';
import './App.css';
import RouterPaths from './router/Router';
import TaskContext from './context/TaskContext';



function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const deleteNode = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="App bg-violet-100 ">
      <TaskContext.Provider value={{ items, setItems, deleteNode }}>
        <RouterPaths />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
