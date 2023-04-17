import { useReducer, useState } from "react";
import TaskContext from "./TaskContext";
import { wishesReducer } from "../reducer/wishesReducer";
import { wishesTypes } from "../reducer/types";
import { useAuth0 } from "@auth0/auth0-react";

export const initialState = []; 


const TaskProvider = ( {children} ) => {

  const [item, setItem] = useState('');
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || [] );
  const [searchItem, setSearchItem] = useState('');
  const [matchingItems, setMatchingItems] = useState([]);
  const [wishes, dispatch] = useReducer(wishesReducer, initialState);
  const { getIdTokenClaims } = useAuth0();


  const deleteNode = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const changeState = (id) => {
    setItems(items.map((task) => {
      return task.id === id ? { ...task, state: task.state === "active" ? "closed" : "active" } : task;
    }));
    const selectedItem = items.find((task) => task.id === id);
    if (selectedItem.state === "active") {
      setTimeout(function () {
        alert("Congratulations, your Dreams come true!");
      }, 500);
    }
  };
  
  const searchItems = (e) => {
      e.preventDefault();
      const filteredItems = items.filter((item) => {
          const checkItem = item.item;
          return checkItem.toLowerCase().includes(searchItem.toLowerCase());
      });
      setMatchingItems(filteredItems);
      setSearchItem(''); //matchingItems
  };

  // DATABASE 

  const addWish = async (wish) => {
    const token = await getIdTokenClaims();
    console.log(token)
    const res = await fetch("http://localhost:3001/addwish", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.__raw}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wish),
    });
    const data = await res.json();
    console.log(data)

    if (data.ok){
      dispatch({ type: wishesTypes.add, payload: data.wish})
    }
  }

  const getWishes = async () =>{
    const res = await fetch("http://localhost:3001/getwishes");
    const data = await res.json();

    if(data.ok){
      dispatch({ type: wishesTypes.getWish, payload: data.wishes })
    }
  };


  return(
    <TaskContext.Provider value={{ 
    item, 
    setItem, 
    items, 
    setItems, 
    deleteNode, 
    changeState, 
    searchItem, 
    setSearchItem, 
    matchingItems, 
    setMatchingItems, 
    searchItems, 
    wishes,
    addWish, 
    getWishes }}>

        {children}
      </TaskContext.Provider>

  )
}

export default TaskProvider