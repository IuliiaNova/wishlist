import React from "react";
import Input from "../components/Input";
import Buttons from "../components/Button";
import TaskList from "../components/TasksList";
import Header from "../components/Header";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const All = () => {

  const {user} = useContext(TaskContext);
  const { wishes } = user;

  return (
    <div className="">
      <Header />
      <Input />
      <Buttons />
      <TaskList wishes={wishes}/>
    </div>
  )

}

export default All;