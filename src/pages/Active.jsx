import React from "react";
import Input from "../components/Input";
import Buttons from "../components/Button";
import Search from "../components/Search";
import TaskList from "../components/TasksList";

const Active = () => {

    return (
        <div className=" bg-violet-100 flex items-center justify-center">
      <Input />
      <Buttons />
      <Search />
      <TaskList />
    </div>
  )
    
}

export default Active;