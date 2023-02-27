import React, { useState, useEffect, useContext } from "react";
import Task from "./Tasks";
import { v4 } from "uuid";
import TaskContext from "../context/TaskContext";

const TaskList = () => {

    const [item, setItem] = useState(''); // state in input 
    const { items, setItems, deleteNode } = useContext(TaskContext);


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

    /*const deleteNode = (id) => {
        setItems(items.filter((item)=> item.id !== id))
      }*/


    //activamos "enter" -> if press -> add element
    const keyPress = (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            newItem();
        }
    }


    return (
        <div className="task-list bg-pink-300 w-[55vw] p-8 rounded-lg flex-col items-center justify-center gap-4  m-4 ml-8">
            {items.map((item, ind) => {
                return (
                    <Task key={`task-${ind}`} item={`${item.item}`} deleteNode={() => deleteNode(item.id)} />
                )
            })
            }
        </div>
    )
}


export default TaskList;