import { useReducer, useState } from "react";
import TaskContext from "./TaskContext";
import { wishesReducer } from "../reducer/wishesReducer";
import { wishesTypes } from "../reducer/types";
import { useAuth0 } from "@auth0/auth0-react";

export const initialState = []; 


const TaskProvider = ( {children} ) => {

  const [item, setItem] = useState();
  const [wishes, dispatch] = useReducer(wishesReducer, initialState);
  const [newItemValue, setNewItemValue] = useState(item);
  const { getIdTokenClaims } = useAuth0();

  const addWish = async (wish) => {
    const token = await getIdTokenClaims();
    const res = await fetch("http://localhost:3001/addwish", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.__raw}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wish),
    });
    const data = await res.json();

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

  const deleteWish = async (id) =>{
    const token = await getIdTokenClaims();
    const res = await fetch(`http://localhost:3001/deletewish/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.__raw}`,
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();

    if(data.ok){
      const filteredTodos = wishes.filter((wish) => wish.todoId !== id);
      dispatch({ type: wishesTypes.deleteWish, payload: filteredTodos })
    }
  };

  const updateWish = async (newWish) => {
    const res = await fetch(`http://localhost:4000/updatewish/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWish),
    });
    const data = await res.json();

    if (data.ok) {
      const filteredWishes = wishes.filter(
        (todo) => todo.todoId !== newWish.todoId
      );
      const allWishes = [...filteredWishes, newWish];
      dispatch({ type: wishesTypes.updateWish, payload: allWishes });
    }
  };





  return(
    <TaskContext.Provider value={{ 
    wishes,
    addWish, 
    getWishes,
    deleteWish,
    item, 
    setItem,
    updateWish,
    newItemValue, 
    setNewItemValue }}>

        {children}
      </TaskContext.Provider>

  )
}

export default TaskProvider