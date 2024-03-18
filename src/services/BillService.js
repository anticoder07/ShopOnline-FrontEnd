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

export const setStateAdmin = async (inf) => {
  try {
    const res = await request.get("bill/set-state/admin", inf);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const setStateUser = async (inf) => {
  try {
    const res = await request.get("bill/set-state", inf);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
