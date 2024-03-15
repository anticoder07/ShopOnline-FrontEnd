import * as request from "../utils/request";

export const seeProfile = async () => {
  try {
    const res = await request.get("api/profile/see");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const changeUserProfile = async (name) => {
  try {
    const res = await request.get("profile/change/name", name);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const changePasswordProfile = async (password) => {
  try {
    const res = await request.get("profile/change/password", password);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
