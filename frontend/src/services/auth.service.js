import axios from "axios";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

export const register = (username, email, password) => {
  let bodyFormData = new FormData();
  bodyFormData.append('username', username);
  bodyFormData.append('email', email);
  bodyFormData.append('password', password);
  bodyFormData.append('password_confirmation', password);

  return axios({
    method: "post",
    url: `${API_URL}register`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" }
  })
};

export const login = async (email, password) => {
  let bodyFormData = new FormData();
  bodyFormData.append('email', email);
  bodyFormData.append('password', password);

  const response = await axios({
    method: "post",
    url: `${API_URL}login`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" }
  });
  if (response.data.access_token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));

};


