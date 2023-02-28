import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';



const Task = ({ item, deleteNode, changeState, className, updateNode}) => {
    const [editable, setEditable] = useState(false);
    const [newItemValue, setNewItemValue] = useState(item);
    

    const inputChange = (e) => {
        setNewItemValue(e.target.value);
      };
    
      const updateClick = () => {
        updateNode(newItemValue);
        setEditable(false);
      };
    
      const cancelClick = () => {
        setEditable(false);
        setNewItemValue(item);
      };

  

return (
    <div className="w-[50vw] task bg-violet-50 border border-gray-300 text-gray-900 text-lg rounded-lg  block w-1/4 p-1 md:p-2.5 flex justify-between m-2">
      <input type="checkbox" onClick={changeState} />
      {editable ? (
        <input type="text" value={newItemValue} onChange={inputChange} className="flex-1 pl-2" />
      ) : (
        <p className={className}>{item}</p>
      )}
      <div className="icons flex gap-2">
        {editable ? (
          <>
            <button onClick={updateClick} className="text-violet-800 font-bold">Update</button>
            <button onClick={cancelClick} className="text-violet-800 font-bold">Cancel</button>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPencilAlt} onClick={() => setEditable(true)} className="flex-col text-violet-800" />
            <FontAwesomeIcon icon={faTrash} onClick={deleteNode} className="flex-col text-violet-800" />
          </>
        ) }
      </div>
    </div>
  );
}

export default Task; 