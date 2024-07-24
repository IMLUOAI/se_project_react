import { checkResponse } from "./utils";

const BASE_URL = "http://localhost:3001";

const authorize = (email, password) => {
    return fetch(`${BASE_URL}/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({ email, password })
    }).then((res) => checkResponse(res))
  }


const register = (name, avatarUrl, email, password) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: "POST",
    headers: {
        // Accept: "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify({ name, avatarUrl, email, password })
  }).then((res) => checkResponse(res))
}

const checkTokenValidity = (token) => {
   return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
    },
   }).then((res) => checkResponse(res))
}

const auth = {
    register,
    authorize,
    checkTokenValidity
}

export default auth;