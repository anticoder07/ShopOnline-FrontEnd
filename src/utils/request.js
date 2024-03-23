import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8081/",
  timeout: 1000,
});

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

export const postForm = async (path, data, options = {}) => {
  try {
    const response = await request.postForm(path, data, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default request;
