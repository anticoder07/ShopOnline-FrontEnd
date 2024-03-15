import * as request from "../utils/request";

export const logIn = async (userData) => {
  try {
    const res = await request.post(
      "api/auth/log-in",
      userData
      // , {
      //   headers: { "Content-Type": "application/json" },
      //   withCredentials: true,
      // }s
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (userData) => {
  try {
    const res = await request.post(
      "api/auth/sign-up",
      userData
      // , {
      //   headers: { "Content-Type": "application/json" },
      //   withCredentials: true,
      // }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
