import { useState } from "react";
import TaskContext from "./TaskContext";
import { wishesReducer } from "../reducer/wishesReducer";
import { wishesTypes } from "../reducer/types";

const TaskProvider = ( {children} ) => {

  const [item, setItem] = useState('');
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || [] );
  const [searchItem, setSearchItem] = useState('');
  const [matchingItems, setMatchingItems] = useState([]);


  const deleteNode = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const changeState = (id) => {
    setItems(items.map((task) => {
      return task.id === id ? { ...task, state: task.state === "active" ? "closed" : "active" } : task;
    }));
    const selectedItem = items.find((task) => task.id === id);
    if (selectedItem.state === "active") {
      setTimeout(function () {
        alert("Congratulations, your Dreams come true!");
      }, 500);
    }
  };
  
  const searchItems = (e) => {
      e.preventDefault();
      const filteredItems = items.filter((item) => {
          const checkItem = item.item;
          return checkItem.toLowerCase().includes(searchItem.toLowerCase());
      });
      setMatchingItems(filteredItems);
      setSearchItem(''); //matchingItems
  };

  return(
    <TaskContext.Provider value={{ item, setItem, items, setItems, deleteNode, changeState, searchItem, setSearchItem, matchingItems, setMatchingItems, searchItems }}>
        {children}
      </TaskContext.Provider>

  )
}

export default TaskProvider