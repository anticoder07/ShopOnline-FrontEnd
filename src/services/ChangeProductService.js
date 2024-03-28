import * as request from "../utils/request";
import authHeader from "./authHeader";

export const changeProduct = async (product) => {
  try {
    const res = await request.post("api/product/change", product, {
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (data) => {
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
    const res = await request.get(`api/product/delete?i=${i}`, {
      headers: authHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const recommendProduct = async () => {
  try {
    const res = await request.get(`api/take/product/recommend`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
