import React, { useContext } from "react";
import '../style/input-field.css';
import '../style/tailwind.css';
import TaskContext from "../context/TaskContext";


const Input = () => {

  const { item, setItem, addWish } = useContext(TaskContext);

  const newItem = () => {
    if (item.trim() !== '') {
      const newItem = {
        wishTitle: item,
      }
      addWish(newItem);
      setItem('')
    } else {
      alert('You forgot to make a wish...')
    }
  }

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
        <button className='enter border-2 text-white p-2 m-2 w-40 rounded-lg mb-2 font-mono' onClick={addWish}>Make a wish</button>
      </div>
    </div>
  );
}


export default Input;
