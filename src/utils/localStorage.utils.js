export const updateLocalStorage = (identifier, wishlist) => {
  window.localStorage.setItem(identifier, JSON.stringify(wishlist))
}

export const getFromLocalStorage = (identifier) => {
  window.localStorage.getItem(identifier)
}