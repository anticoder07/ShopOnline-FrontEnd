import * as request from "../utils/request";
import authHeader from "./authHeader";

export const seeBill = async () => {
  try {
    const res = await request.get("api/bill/see", {
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const setStateAdmin = async (id, state) => {
  try {
    const res = await request.get(`api/bill/set-state/admin/${id}`, {
      params: {
        state,
      },
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const setStateUser = async (inf) => {
  try {
    const res = await request.get("api/bill/set-state", inf);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
