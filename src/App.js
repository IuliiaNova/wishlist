import React, { useState } from 'react';
import RouterPaths from './router/Router';
import TaskContext from './context/TaskContext';



function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const deleteNode = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const changeState = (id) => {
    setItems(items.map((task) => {
      return task.id === id ? { ...task, state: task.state === "active" ? "closed" : "active" } : task;
      
    }));
    const selectedItem = items.find((task) => task.id === id);
  if (selectedItem.state === "active") {
    setTimeout(function() {
      alert("Congratulations, your Dreams come true!");
    }, 500);
  }
  };

  return (
    <div className="App ">
      <TaskContext.Provider value={{ items, setItems, deleteNode, changeState }}>
        <RouterPaths />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
