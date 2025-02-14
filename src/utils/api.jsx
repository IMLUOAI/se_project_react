import { checkResponse } from "./utils";
import { getToken } from "../utils/token";

const baseUrl = process.env.NODE_ENV === "production"
  // ? "https://api.wtwr.ugo.si"
  ? "mongodb://localhost:27017/wtwr_db"
  : "http://localhost:3001";





export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const getItems = () => {
  return request(`${baseUrl}/items/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const addItem = ({ name, weather, imageUrl }) => {
  const token = getToken();
  return request(`${baseUrl}/items/`, {
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
  });
};

const addCardLike = (id) => {
  const token = getToken();

  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const removeCardLike = (id) => {
  const token = getToken();

  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteItem = (id) => {
  const token = getToken();

  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const getUserInfo = () => {
  const token = getToken();

  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const editProfile = (data) => {
  const token = getToken();
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

const api = {
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
  getUserInfo,
  editProfile,
};

export default api;
