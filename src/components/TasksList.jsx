import Task from "./Tasks";


const TaskList = ({wishes}) => {


  return (
    <div className="task-list w-[55vw] bg-violet-700  p-8 rounded-lg flex flex-col items-center justify-center gap-2  m-4 ml-80">
      {wishes.length === 0 ? (
        <p className="text-white text-xl font-bold mb-4">It's time to make a wish!</p>
      ) : (
        wishes.map((wish) => (
          <Task
            key={`wish-${wish?._id}`}
            wishId={`${wish?._id}`}
            wish={`${wish?.wishTitle}`}
            className={
              wish?.state === "Closed"
                ? "flex flex-col line-through bg-lime-500 w-[45vw] border text-lg rounded-lg items-center justify-center p-1"
                : "flex flex-col"
            } 
          /> 
        ))
      )}
      <p className="text-white">Total wishes: {wishes.length} </p>
    </div>
  );
}


export default TaskList;