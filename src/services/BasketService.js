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
      {
        id: i,
        quantity: q,
        type: t,
      },
      {
        headers: authHeader(),
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductToBasket = async (id) => {
  try {
    const res = await request.get(`api/basket/delete`, {
      params: { i: id },
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const transportProductFromBasketToBill = async (
  ids,
  name,
  phoneNumber,
  address
) => {
  try {
    const res = await request.post(
      "api/basket/transport",
      {
        ids: ids,
        name: name,
        phoneNumber: phoneNumber,
        address: address,
      },
      {
        headers: authHeader(),
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
