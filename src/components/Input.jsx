import React, { useState, useEffect, useContext } from "react";
import { v4 } from "uuid";
import '../style/input-field.css';
import '../style/tailwind.css';
import TaskContext from "../context/TaskContext";


const Input = ({ children }) => {

  const [item, setItem] = useState(''); // state in input 
  const { items, setItems, deleteNode } = useContext(TaskContext);

  /*
      const [item, setItem] = useState(''); // state in input 
      const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
      ); // state of array of tasks 
      
      useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items))
      }, [items]) //dependencia -> si se cambia 'items' -> inicia useEffect
      
      
      
      const deleteNode = (id) => {
          setItems(items.filter((item)=> item.id !== id))
        }
        
      */

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
    <div className='wrapper-input-field mb-6'>
      <div className='input w-[100vw] h-[25vh] flex items-center justify-center '>
        <input
          className="w-1/4 h-30 bg-transparent border-b-2 p-2 text-white text-lg outline-0"
          value={item}
          type="text"
          placeholder='Enter your wish'
          onChange={(e) => setItem(e.target.value)}
          onKeyPress={(e) => keyPress(e)} />
        <button className='enter border-2 text-white p-2 m-2 w-40 rounded-lg mb-2' onClick={newItem}>Make a wish</button>
      </div>



      <>
        <TaskContext.Provider value={{ items, setItems }}>
          {children}
        </TaskContext.Provider>
      </>

    </div>
  );
}

/* {items.map((item, ind)=> {
            return (
                <Task key={`task-${ind}`} item={`${item.item}`} deleteNode={()=>deleteNode(item.id)} />
            )
          })
        }*/

export default Input;
