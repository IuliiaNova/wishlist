import React, { useState, useEffect, useContext } from "react";
import Task from "./Tasks";
import TaskContext from "../context/TaskContext";

const TaskList = () => {

 // state in input 
  const { item, setItem, items, deleteNode, changeState, searchItems, getWishes, wishes } = useContext(TaskContext);
  //[item, setItem] = useState('');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]) //dependencia -> si se cambia 'items' -> inicia useEffect
  
  useEffect(() => {
   console.log("item")
  }, [items]) 

  useEffect(() => {
    getWishes();
    console.log(wishes)
   }); 



  return (
    <div className="task-list bg-violet-700 p-8 rounded-lg flex flex-col items-center justify-center gap-2 m-4 ml-8">
      {items.length === 0 ? (
        <p className="text-white text-xl font-bold mb-4">It's time to make a wish!</p>
      ) : (
        items.map((item, ind) => (
          <Task
            key={`task-${ind}`}
            idItem={`${item.id}`}
            item={`${item.item}`}
            deleteNode={() => deleteNode(item.id)}
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