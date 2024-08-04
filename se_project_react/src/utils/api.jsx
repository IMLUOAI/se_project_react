import { checkResponse } from "./utils";
import { getToken } from "../utils/token";

const baseUrl = "http://localhost:3001";

const getItems = () => {
  return fetch(`${baseUrl}/items/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
};

const addItem = ({ name, weather, imageUrl }) => {
  const token = getToken();

  return fetch(`${baseUrl}/items/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  }).then((res) => checkResponse(res));
};

const addCardLike = (id) => {
  const token = getToken();

  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

const removeCardLike = (id) => {
  const token = getToken();

  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

const deleteItem = (id) => {
  const token = getToken();

  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

const getUserInfo = () => {
  const token = getToken();

  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
