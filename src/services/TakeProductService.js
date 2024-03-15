import * as request from "../utils/request";

export const getProductHomePage = async () => {
  try {
    const res = await request.get("take/product/home-page", {});
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductType = async (t) => {
  try {
    const res = await request.get("api/take/product/by/type", {
      params: {
        t,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductId = async (i) => {
  try {
    const res = await request.get("api/take/product/by/id", {
      params: {
        i,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
