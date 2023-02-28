import React, { useState, useEffect, useContext } from "react";
import Task from "./Tasks";
import { v4 } from "uuid";
import TaskContext from "../context/TaskContext";

const TaskListClosed = () => {

    const [item, setItem] = useState(''); // state in input 
    const { items, setItems, deleteNode, changeState } = useContext(TaskContext);
    const classN = "flex flex-col line-through bg-lime-500 w-[45vw] border text-lg rounded-lg items-center justify-center p-1 ";


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
        <div className="task-list w-[55vw] bg-violet-700  p-8 rounded-lg flex flex-col items-center justify-center gap-2  m-4 ml-8">
            {items.filter((item) => item.state === "closed").map((item, ind) => (
                <Task key={`task-${ind}`} item={`${item.item}`} className={classN} deleteNode={() => deleteNode(item.id)} changeState={() => changeState(item.id)} />
            ))}
            <p className="text-white font-mono">Total closed wishes: {items.filter((item) => item.state === "closed").length} </p>
        </div>
    )
}


export default TaskListClosed;