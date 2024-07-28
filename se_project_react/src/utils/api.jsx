import { checkResponse } from "./utils";

const baseUrl = "http://localhost:3001";

const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
};

const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  }).then((res) => checkResponse(res));
};

const addCardLike= (id, token) => {
  return fetch(`${baseUrl}/clothingItems/${id}/likes`, {
    method: "PUT",
    header: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  },
  }).then((res) => checkResponse(res));
}

const removeCardLike = (id, token) => {
  return fetch(`${baseUrl}/clothingItems/${id}/likes`, {
    method: "DELETE",
    header: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  }).then((res) => checkResponse(res));
}
const deleteItem = ({ _id }) => {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
};

const getUserInfo = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer${token}`
    },
  }).then((res) => checkResponse(res));
};

const api = {
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
  getUserInfo,
};

export default api;
