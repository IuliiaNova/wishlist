import React, { useContext, useEffect } from "react";
import Task from "./Tasks";
import TaskContext from "../context/TaskContext";

const TaskListClosed = () => {

    const { changeState, wishes, getWishes, deleteWish  } = useContext(TaskContext);
    const classN = "flex flex-col line-through bg-lime-500 w-[45vw] border text-lg rounded-lg items-center justify-center p-1";

    useEffect(() => {
        const fetchActiveWishes = async () => {
          await getWishes();
        };
        fetchActiveWishes(); 
      }, [getWishes]);

    return (
        <div className="task-list w-[55vw] bg-violet-700  p-8 rounded-lg flex flex-col items-center justify-center gap-2 m-4 ml-80">
            {wishes.filter((wish) => wish.state === "Closed").map((wish, ind) => (
                <Task 
                key={`task-${ind}`} 
                idItem={`${wish?.id}`} 
                item={`${wish?.wishTitle}`} 
                className={classN} 
                deleteWish={() => deleteWish(`${wish?._id}`)}  
                changeState={() => changeState(wish?.id)} />
            ))}
            <p className="text-white font-mono">Total closed wishes: {wishes.filter((wish) => wish.state === "Closed").length} </p>
        </div>
    )
}


export default TaskListClosed;