export const wishesReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL":
      return [...action.payload];
    case "ADD_WISH":
      return [...state.payload];
    case "DELETE_WISH":
      return action.payload;
    case "UPDATE_WISH":
      return action.payload;
    default:
      return state;
  }
}