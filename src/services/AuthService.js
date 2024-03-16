import * as request from "../utils/request";

export const logIn = async (userData) => {
  try {
    const res = await request.post("api/auth/log-in", userData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (userData) => {
  try {
    const res = await request.post("api/auth/sign-up", userData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  try {
    const res = await request.get("api/log-out");
  } catch (error) {
    console.log(error);
  }
};
