import React from "react";
import Input from "../components/Input";
import Buttons from "../components/Button";
import TaskList from "../components/TasksList";
import Header from "../components/Header";

const All = () => {

  return (
    <div className="">
      <Header />
      <Input />
      <Buttons />
      <TaskList />
    </div>
  )

}

export default All;