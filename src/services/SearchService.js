import * as request from "../utils/request";
import authHeader from "./authHeader";

export const searchAllProducts = async (data) => {
  try {
    const res = await request.get(`api/search/${data}`);
    return res.data;
  } catch (error) {
    return { status: error.response.status, data: error.response.data };
  }
};

export const searchAllProductsBasket = async (data) => {
  try {
    const res = await request.get(`api/search/basket/${data}`, {
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    return { status: error.response.status, data: error.response.data };
  }
};

export const searchAllProductsBill = async (data) => {
  try {
    const res = await request.get(`api/search/bill/${data}`, {
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    return { status: error.response.status, data: error.response.data };
  }
};
