import * as request from "../utils/request";

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

export const addProductToBasket = async (i) => {
  try {
    const res = await request.get("basket/add", {
      param: i,
    });
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
