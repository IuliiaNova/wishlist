import React from "react";
import Input from "../components/Input";
import Buttons from "../components/Button";
import TaskListClosed from "../components/TaskListClosed";
import Header from "../components/Header";

const Closed = () => {

  return (
    <div >
      <Header />
      <Input />
      <Buttons />
      <TaskListClosed />
    </div>
  )

}

export default Closed;