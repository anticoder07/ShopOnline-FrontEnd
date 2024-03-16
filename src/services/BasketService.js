import * as request from "../utils/request";
import authHeader from "./authHeader";

export const seeBill = async (i) => {
  try {
    const res = await request.get("/basket/add", {
      param: i,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProductToBasket = async (data) => {
  try {
    const res = await request.post(
      "api/basket/add",
      {
        i: data,
        // q: data.q,
        // t: data.t,
      },
      { headers: authHeader() }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductToBasket = async (i) => {
  try {
    const res = await request.get("basket/delete", {
      param: i,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
