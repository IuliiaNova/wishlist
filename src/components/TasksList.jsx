import React, { useState, useEffect, useContext } from "react";
import Task from "./Tasks";
import { v4 } from "uuid";
import TaskContext from "../context/TaskContext";

const TaskList = () => {

  const [item, setItem] = useState(''); // state in input 
  const { items, setItems, deleteNode, changeState, updateNode, searchItems } = useContext(TaskContext);


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]) //dependencia -> si se cambia 'items' -> inicia useEffect



  const newItem = () => {
    if (item.trim() !== '') {
      const newItem = {
        id: v4(),
        item: item,
        state: "active",
      }
      setItems((items) => [newItem, ...items]); // orden how the save new task
      setItem('')
    } else {
      alert('You forgot to make a wish...')
      setItem('')
    }
  }

  //activamos "enter" -> if press -> add element
  const keyPress = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      newItem();
    }
  }

  return (
    <div className="task-list bg-violet-700 p-8 rounded-lg flex flex-col items-center justify-center gap-2 m-4 ml-8">
      {items.length === 0 ? (
        <p className="text-white text-xl font-bold mb-4">It's time to make a wish!</p>
      ) : (
        items.map((item, ind) => (
          <Task
            key={`task-${ind}`}
            item={`${item.item}`}
            deleteNode={() => deleteNode(item.id)}
            updateNode={() => updateNode(item.id)}
            changeState={() => changeState(item.id)}
            className={
              item.state === "closed"
                ? "flex flex-col line-through bg-lime-500 w-[45vw] border text-lg rounded-lg items-center justify-center p-1"
                : "flex flex-col"
            }
            searchItems={() => searchItems()}
          />
        ))
      )}
      <p className="text-white">Total wishes: {items.length} </p>
    </div>
  );
}


export default TaskList;