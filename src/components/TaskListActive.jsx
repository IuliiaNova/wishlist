import React, { useState, useEffect, useContext } from "react";
import Task from "./Tasks";
import { v4 } from "uuid";
import TaskContext from "../context/TaskContext";

const TaskListActive = () => {

    const [item, setItem] = useState(''); // state in input 
    const { items, setItems, deleteNode, changeState } = useContext(TaskContext);
    const classN = "flex-col";


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items]) //dependencia -> si se cambia 'items' -> inicia useEffect


    return (

        <div className="task-list w-[55vw] bg-violet-700  p-8 rounded-lg flex flex-col items-center justify-center gap-2  m-4 ml-80">
            {items.filter((item) => item.state === "active").map((item, ind) => (
                <Task key={`task-${ind}`} idItem={`${item.id}`} item={`${item.item}`} className={classN} deleteNode={() => deleteNode(item.id)} changeState={() => changeState(item.id)} />
            ))}
            <p className="text-white font-mono">Total wishes: {items.filter((item) => item.state !== "closed").length} </p>
        </div>
    )
}


export default TaskListActive;