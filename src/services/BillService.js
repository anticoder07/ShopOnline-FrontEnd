import * as request from "../utils/request";

export const seeBill = async () => {
  try {
    const res = await request.get("bill/see");
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
