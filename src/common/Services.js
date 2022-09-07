import axios from "axios";

const url = "http://localhost:5000/";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("mywallet"));
  const config = { headers: { Authorization: `Bearer ${auth.token}` } };
  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${url}/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${url}/login`, body);
  return promise;
}

export { createHeaders, postLogin, postSignUp };
