import * as request from "../utils/request";
import authHeader from "./authHeader";

export const seeBasket = async () => {
  try {
    const res = await request.get("api/basket/see", { headers: authHeader() });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProductToBasket = async (i, q, t) => {
  try {
    const res = await request.post(
      "api/basket/add",
      { id: i, quantity: q, type: t },
      {
        headers: authHeader(),
      }
    );
    console.log(res);
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
