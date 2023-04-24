import { wishesTypes } from "./types";

export const wishesReducer = (state, action) => {
  switch (action.type) {
    case wishesTypes.register:
      return {...state, user: action.payload};
    case wishesTypes.login:
      return {...state, user: action.payload};
    case wishesTypes.addWish:
      return {...state, user: action.payload};
    case wishesTypes.updateWish:
      return {...state, user: action.payload};
    case wishesTypes.deleteWish:
      return {...state, user: action.payload};
    default:
      return state;
    
  }
}



