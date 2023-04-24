import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import TaskContext from "../context/TaskContext";


const Task = ({ wish, className }) => {

  
  const { user, updateWish, deleteWish } = useContext(TaskContext);
  
  const [editable, setEditable] = useState(false);
  const [newWishTitle, setNewWishTitle] = useState(wish.wishTitle);

  const handleEditWish = () => {
    updateWish(newWishTitle, wish._id, user._id);
    setEditable(false)
  }

  const inputChange = (e) => {
    setNewWishTitle(e.target.value);
  };
  
  const cancelClick = () => {
    setEditable(false);
  };


  return (
    <div className="w-[50vw] task bg-violet-50 border border-gray-300 text-gray-900 text-lg rounded-lg  block w-1/4 p-1 md:p-2.5 flex justify-between m-2">
      <input type="checkbox" />
      {editable ? (
        <input type="text" value={newWishTitle} onChange={inputChange} className="flex-1 pl-2" />
      ) : (
        <p className={className}>{wish}</p>
      )}
      <div className="icons flex gap-2">
        {editable ? (
          <>
            <button onClick={handleEditWish} className="text-violet-800 font-bold">Update</button>
            <button onClick={cancelClick} className="text-violet-800 font-bold">Cancel</button>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPencilAlt} onClick={() => setEditable(true)} className="flex-col text-violet-800" />
            <FontAwesomeIcon icon={faTrash} onClick={deleteWish} className="flex-col text-violet-800" />
          </>
        )}
      </div>
    </div>
  );
}

export default Task; 