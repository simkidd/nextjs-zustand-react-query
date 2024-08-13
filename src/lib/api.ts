import { Product } from "@/interfaces/product.interface";
import { axiosInstance } from "./axios";

export async function getProducts() {
  try {
    const { data } = await axiosInstance.get("/products");
    return data.products;
  } catch (error) {
    console.log(error);
  }
}
