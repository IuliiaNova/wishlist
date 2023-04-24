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
  const [editable, setEditable] = useState(false);
  const { getIdTokenClaims } = useAuth0();

  const addWish = async (wish) => {
    const token = await getIdTokenClaims();
  
    const res = await fetch("http://localhost:3001/wish/addwish", {
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

    getWishes();
  }

  const getWishes = async () =>{
    const token = await getIdTokenClaims();
    const res = await fetch("http://localhost:3001/wish/getwishes", {
      headers: {
        Authorization: `Bearer ${token.__raw}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if(data.ok){
      dispatch({ type: wishesTypes.getWish, payload: data.wishes })
    }
  };

  const deleteWish = async (id) =>{
    const token = await getIdTokenClaims();
    const res = await fetch(`http://localhost:3001/wish/deletewish/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.__raw}`,
        "Content-Type": "application/json",
      }
    });

    
    const data = await res.json();

    if(data.ok){
      const filteredWishes = wishes.filter((wish) => wish.todoId !== id);
      dispatch({ type: wishesTypes.deleteWish, payload: filteredWishes })
    }
  };

  const updateWish = async (id, newWish) => {
    const token = await getIdTokenClaims();
    const res = await fetch(`http://localhost:3001/updatewish/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token.__raw}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWish),
    });

    const data = await res.json();

    if (data.ok) {
      const filteredWishes = wishes.map(
        (wish) => wish._id === newWish._id
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
    setNewItemValue,
    editable, 
    setEditable,
     }}>

        {children}
      </TaskContext.Provider>

  )
}

export default TaskProvider