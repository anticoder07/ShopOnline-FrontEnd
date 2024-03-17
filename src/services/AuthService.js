import * as request from "../utils/request";
import authHeader from "./authHeader";

export const logIn = async (userData) => {
  try {
    const res = await request.post("api/auth/log-in", userData);
    return res.data;
  } catch (error) {
    return { status: error.response.status, data: error.response.data };
  }
};

export const signUp = async (userData) => {
  try {
    const res = await request.post("api/auth/sign-up", userData);
    return res.data;
  } catch (error) {
    return { status: error.response.status, data: error.response.data };
  }
};

export const logOut = async () => {
  try {
    const res = await request.get("api/log-out", {
      headers: authHeader(),
    });
  } catch (error) {
    console.log(error);
  }
};
