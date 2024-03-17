import * as request from "../utils/request";
import authHeader from "./authHeader";

export const seeProfile = async () => {
  try {
    const res = await request.get("api/profile/see", { headers: authHeader() });
    return res.data;
  } catch (error) {
    return { status: error.response.status, data: error.response.data };
  }
};

export const changeUserProfile = async (name) => {
  try {
    const res = await request.post("api/profile/change/name", name, {
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const changePasswordProfile = async (password) => {
  try {
    const res = await request.post("api/profile/change/password", password, {
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const changeAvatarProfile = async (avatar) => {
  try {
    const res = await request.post("api/profile/change/avatar", avatar, {
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
