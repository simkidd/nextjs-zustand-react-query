import { Product } from "@/interfaces/product.interface";
import { axiosInstance } from "@/lib/axios";
import { queryOptions } from "@tanstack/react-query";

export const productsOptions = queryOptions<Product[]>({
  queryKey: ["products"],
  queryFn: async () => {
    const res = await axiosInstance.get("/products");

    return res.data.products;
  },
});
