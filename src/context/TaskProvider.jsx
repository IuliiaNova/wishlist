import { useReducer } from "react";
import TaskContext from "./TaskContext";
import { wishesReducer } from "../reducer/wishesReducer";
import { wishesTypes } from "../reducer/types";
import { add, remove, updateWish, updateWishState } from "../APIs/wishesApi";
import { create, login, createGoogle, googleLogin } from "../APIs/userApi";

export const initialState = {
  user: null,
}; 


const TaskProvider = ( {children} ) => {

  const [state, dispatch] = useReducer(wishesReducer, initialState);

  const createUser = async (user) => {
    const response = await create(user);
    if (response.ok) {
      localStorage.setItem("token", response.user.token);
      dispatch({ type: wishesTypes.register, payload: response.user });
    }
  };

  const createUserGoogle = async (user) => {
    const response = await createGoogle(user);
    if (response.ok) {
      localStorage.setItem("token", response.user.token);
      dispatch({ type: wishesTypes.register, payload: response.user });
    }
  };

  const loginUser = async (user) => {
    const response = await login(user);
    if (response.ok) {
      localStorage.setItem("token", response.user.token);
      dispatch({ type: wishesTypes.login, payload: response.user });
    }
  };

  const loginUserGoogle = async (user) => {
    const response = await googleLogin(user);
    if (response.ok) {
      localStorage.setItem("token", response.user.token);
      dispatch({ type: wishesTypes.login, payload: response.user });
    }
  };



  const addWish = async (wish, userID) => {
    const response = await add(wish, userID);

    if (response.ok){
      dispatch({ type: wishesTypes.addWish, payload: response.user})
    }
  }

  const deleteWish = async (wish, userID) =>{
    const response = await remove(wish, userID);

    if(response.ok){
      dispatch({ type: wishesTypes.deleteWish, payload: response.user })
    }
  };

  const updateWish = async (wish, wishId, userID) => {
    const response = await updateWish(wish, wishId, userID);
 
    if (response.ok) {
      dispatch({ type: wishesTypes.updateWish, payload: response.user });
    }
  };

  const updateWishState = async (wish, state, userID) => {
    const response = await updateWishState(wish, state, userID);
 
    if (response.ok) {
      dispatch({ type: wishesTypes.updateWish, payload: response.user });
    }
  };




  return(
    <TaskContext.Provider value={{ 
      ...state,
      createUser,
      createUserGoogle,
      loginUser,
      loginUserGoogle,
      addWish, 
      deleteWish,
      updateWish,
      updateWishState
     }}>

        {children}
      </TaskContext.Provider>

  )
}

export default TaskProvider