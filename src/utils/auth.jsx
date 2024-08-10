import { checkResponse } from "./utils";

const BASE_URL = "http://localhost:3001";

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const register = (email, password, name, avatar) => {
  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  });
};

const authorize = (email, password) => {
  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
};

const checkTokenValidity = (token) => {
  return request(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const auth = {
  register,
  authorize,
  checkTokenValidity,
};

export default auth;
