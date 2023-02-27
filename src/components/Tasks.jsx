import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


const Task = ( {item, deleteNode}) => {

    const [state, setState] = useState(
        JSON.parse(localStorage.getItem('items')) || []
      );

      console.log(state[0].state)


    const changeState = (id) => {
    if(state.id == id){
        setState(state.state="closed")  
    }
}
        
   


    
    return (
        <div className="w-[50vw] task bg-pink-50 border border-gray-300 text-gray-900 text-lg rounded-lg  block w-1/4 p-1 md:p-2.5 flex justify-between m-2">
            <input type="checkbox" onClick={()=>(changeState(state[0].id))}/>
            <p className="flex-col">{item}</p>
            <div className="icons flex gap-2">
            <FontAwesomeIcon icon={faPencilAlt} className="flex-col text-rose-800"/>
            <FontAwesomeIcon icon={faTrash} onClick={()=>(deleteNode())} className="flex-col text-rose-800"/>
            </div>
        </div>

    )
}

export default Task; 