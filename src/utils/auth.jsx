import { checkResponse } from "./utils";

const BASE_URL = "http://localhost:3001";

const register = (email, password, name, avatar) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  }).then((res) => checkResponse(res));
};

const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
};

const checkTokenValidity = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

const auth = {
  register,
  authorize,
  checkTokenValidity,
};

export default auth;
