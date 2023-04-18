import React, { useEffect, useContext } from "react";
import Task from "./Tasks";
import TaskContext from "../context/TaskContext";

const TaskListActive = () => {

    const { changeState, wishes, getWishes, deleteWish } = useContext(TaskContext);
    const classN = "flex-col";


    useEffect(() => {
        const fetchActiveWishes = async () => {
          await getWishes();
        };
        fetchActiveWishes(); 
      }, [getWishes]);

    return (

        <div className="task-list w-[55vw] bg-violet-700  p-8 rounded-lg flex flex-col items-center justify-center gap-2  m-4 ml-80">
            {wishes.filter((wish) => wish.state === "Active").map((wish, ind) => (
                <Task 
                key={`task-${ind}`} 
                idItem={`${wish?._id}`} 
                item={`${wish?.wishTitle}`} 
                className={classN} 
                deleteWish={() => deleteWish(`${wish?._id}`)} 
                changeState={() => changeState(`${wish?._id}`)} />
            ))}
            <p className="text-white font-mono">Total wishes: {wishes.filter((item) => item.state !== "Closed").length} </p>
        </div>
    )
}


export default TaskListActive;