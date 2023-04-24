//import axios from "axios";

const BASE_URL = "http:/localhost:3001/user";

export const create = async (user) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createGoogle = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/createusergoogle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const login = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/loginuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const googleLogin = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/loginusergoogle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

/*const BASE_URL = "http:/localhost:3001/user";

export const create = async (user) => {
  try{
    const response = await axios.post(BASE_URL, {
      user,
    })
    return response.data;
  }catch(error){
    console.log(error);
  }
};

export const createGoogle = async (user) => {
  try{
    const response = await axios.post(`${BASE_URL}/createusergoogle`, {
      user,
    })
    return response.data;
  }catch(error){
    console.log(error);
  }
}

export const login = async (user) => {
  try{
    const response = await axios.post(`${BASE_URL}/loginuser`, {
      user,
    })
    return response.data;
  }catch(error){
    console.log(error);
  }
}

export const googleLogin = async (user) => {
  try{
    const response = await axios.post(`${BASE_URL}/loginusergoogle`, {
      user,
    })
    return response.data;
  }catch(error){
    console.log(error);
  }
}*/