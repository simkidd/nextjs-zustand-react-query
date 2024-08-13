import { axiosInstance } from "./axios";

export const getProducts = async () => {
  try {
    const { data } = await axiosInstance.get("/products");
    return data.products;
  } catch (error) {
    console.log(error);
  }
};
