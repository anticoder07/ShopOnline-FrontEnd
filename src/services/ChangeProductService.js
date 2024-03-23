import * as request from "../utils/request";
import authHeader from "./authHeader";

export const changeProduct = async (product) => {
  try {
    const res = await request.post("product/change", product);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (data) => {
  console.log(data);
  try {
    const res = await request.post("api/product/add", data, {
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (i) => {
  try {
    const res = await request.get("product/delete", {
      i,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
