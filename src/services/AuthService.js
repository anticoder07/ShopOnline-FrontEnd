import * as request from "../utils/request";

export const logIn = async (userData) => {
  // console.log(userData);
  try {
    const res = await request.post(
      "/api/auth/log-in",
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

export const signUp = async (userData) => {
  try {
    const res = await request.post(
      "signUp",
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
