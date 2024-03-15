import * as request from "../utils/request";

export const HomePageService = async () => {
  try {
    const res = await request.get("api/take/product/home-page");
    return res.data;
  } catch (error) {
    return [];
  }
};
