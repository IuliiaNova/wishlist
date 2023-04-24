import React, { useContext } from "react";
import Task from "./Tasks";
import TaskContext from "../context/TaskContext";


const TaskList = () => {

  const { searchItems, wishes, deleteWish, updateWish, newItemValue } = useContext(TaskContext);


  return (
    <div className="task-list w-[55vw] bg-violet-700  p-8 rounded-lg flex flex-col items-center justify-center gap-2  m-4 ml-80">
      {wishes.length === 0 ? (
        <p className="text-white text-xl font-bold mb-4">It's time to make a wish!</p>
      ) : (
        wishes.map((wish) => (
          <Task
            key={`wish-${wish?._id}`}
            idItem={`${wish?._id}`}
            item={`${wish?.wishTitle}`}
            className={
              wish?.state === "Closed"
                ? "flex flex-col line-through bg-lime-500 w-[45vw] border text-lg rounded-lg items-center justify-center p-1"
                : "flex flex-col"
            } 
            searchItems={() => searchItems()}
            deleteWish={() => deleteWish(`${wish?._id}`)}
            updateWish={()=> updateWish(`${wish?._id}`, newItemValue)}
          /> 
        ))
      )}
      <p className="text-white">Total wishes: {wishes.length} </p>
    </div>
  );
}


export default TaskList;