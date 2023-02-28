import React from "react";
import Input from "../components/Input";
import Buttons from "../components/Button";
import Search from "../components/Search";
import TaskListClosed from "../components/TaskListClosed";

const Closed = () => {

    return (
        <div className="  ">
      <Input />
      <Buttons />
      <Search />
      <TaskListClosed />
    </div>
  )
    
}

export default Closed;