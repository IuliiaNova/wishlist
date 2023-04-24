const BASE_URL = "http:/localhost:3001/wish";

export const add = async (wish, userID) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token': window.localStorage.getItem('token')
      },
      body: JSON.stringify({ wish, userID })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (wish, userID) => {
  try {
    const response = await fetch(`${BASE_URL}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token': window.localStorage.getItem('token')
      },
      body: JSON.stringify({ wish, userID })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateWish = async (wish, wishId, userID) => {
  try {
    const response = await fetch(`${BASE_URL}/updatewish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token': window.localStorage.getItem('token')
      },
      body: JSON.stringify({ wish, wishId, userID })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateWishState = async (wish, status, userID) => {
  try {
    const response = await fetch(`${BASE_URL}/updatewishstate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token': window.localStorage.getItem('token')
      },
      body: JSON.stringify({ wish, status, userID })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};





/*import axios from "axios";

const BASE_URL = "http:/localhost:3001/wish";

export const add = async (wish, userID) => {
  try {
    const response = await axios.post(
      BASE_URL, {
      wish,
      userID
    },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (wish, userID) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/delete`,
      {
        wish,
        userID
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateWish = async (wish, wishId, userID) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/updatewish`,
      {
        wish,
        wishId,
        userID
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateWishSate = async (wish, status, userID) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/updatewishstate`,
      {
        wish,
        status,
        userID
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};*/

