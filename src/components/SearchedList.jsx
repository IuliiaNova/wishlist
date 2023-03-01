import React, { useState, useEffect, useContext } from "react";
import Task from "./Tasks";
import { v4 } from "uuid";
import TaskContext from "../context/TaskContext";

const SearchedList = () => {

    const { items, deleteNode, changeState, updateNode, searchItems, matchingItems } = useContext(TaskContext);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items]) //dependencia -> si se cambia 'items' -> inicia useEffect


    // determine which items to display based on whether there are matching items
    const displayItems = matchingItems.length > 0 ? matchingItems : items;

    return (
        <div className="matching-items w-[55vw] bg-violet-700  p-8 rounded-lg flex flex-col items-center justify-center gap-2 m-4 ml-80">
            {displayItems.length > 0 ? (
                displayItems.map((item, ind) => (
                    <div >
                        <Task
                            key={`task-${ind}`}
                            item={item.item}
                            deleteNode={() => deleteNode(item.id)}
                            updateNode={() => updateNode(item.id)}
                            changeState={() => changeState(item.id)}
                            className={
                                item.state === "closed"
                                    ? "flex flex-col line-through bg-lime-500 w-[45vw] border text-lg rounded-lg items-center justify-center p-1"
                                    : "flex flex-col"
                            }
                            searchItems={() => searchItems()}
                        />
                    </div>
                ))
            ) : (
                <div className="task-list bg-violet-700 p-8 rounded-lg flex flex-col items-center justify-center gap-2 m-4 ml-8">
                    <p className="text-white text-xl font-bold mb-4 font-mono">It's time to make a wish!</p>
                </div>
            )}
            <button className="text-white font-mono font-bold m-2 p-2 rounded-lg border-2 font-bold hover:bg-gray-300 hover:text-violet-800"
                onClick={() => { window.location.reload() }}>Show all wishes</button>
            <p className="text-white font-mono">Total wishes: {items.length} </p>
        </div>
    );
}

export default SearchedList;