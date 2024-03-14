import * as request from "../utils/request";

export const cardProductService = async (q) => {
  try {
    const res = await request.get("take-card", {
      params: {
        q,
      },
    });
    return res.data;
  } catch (error) {
    return [];
  }
};
