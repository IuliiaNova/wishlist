import React from "react";
import Input from "../components/Input";
import Buttons from "../components/Button";
import Search from "../components/Search";
import TaskList from "../components/TasksList";
import Header from "../components/Header";

const All = () => {

  return (
    <div className="">
      <Header />
      <Input />
      <Buttons />
      <Search />
      <TaskList />
    </div>
  )

}

export default All;