import React from "react";
import Input from "../components/Input";
import Buttons from "../components/Button";
import Search from "../components/Search";
import TaskList from "../components/TasksList";

const All = () => {

    return (
        <div className=" bg-violet-100 ">
      <Input />
      <Buttons />
      <Search />
      <TaskList />
    </div>
  )
    
}

export default All;