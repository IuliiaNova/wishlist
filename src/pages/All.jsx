import React from "react";
import Input from "../components/Input";
import Buttons from "../components/Button";
import Search from "../components/Search";
import TaskList from "../components/TasksList";
import SearchedList from "../components/SearchedList";

const All = () => {

  return (
    <div className="">
      <Input />
      <Buttons />
      <Search />
      <SearchedList />
    </div>
  )

}

export default All;