import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8081/",
  timeout: 1000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

// request.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = "Bearer " + token;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export const get = async (path, options = {}) => {
  try {
    const response = await request.get(path, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (path, data, options = {}) => {
  try {
    const response = await request.post(path, data, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default request;
