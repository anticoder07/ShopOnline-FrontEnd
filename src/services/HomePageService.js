import * as request from "../utils/request";

export const HomePageService = async (option) => {
  try {
    const res = await request.get(`api/take/product/home-page/${option}`);
    return res.data;
  } catch (error) {
    return [];
  }
};
