"use client";
import { productsOptions } from "@/tanstack/queries/products";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";

const ProductsList = () => {
  // const {
  //   data: products,
  //   isLoading,
  //   error,
  // } = useQuery<Product[]>({
  //   queryKey: ["products"],
  //   queryFn: getProducts,
  // });

  const {
    data: products,
    isLoading,
    error,
  } = useSuspenseQuery(productsOptions);

  console.log("homepage products>>>", products);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="">
      <h1 className="text-3xl mb-6">Products</h1>
      <ul className="grid md:grid-cols-4 grid-cols-2 gap-8">
        {products?.map((product) => (
          <li key={product?._id}>
            <div>
              <Image
                src={product?.images[0]?.url}
                alt={product?.name}
                width={300}
                height={300}
                priority
              />
              <p>{product?.name}</p>
              <p>{product?.price}</p>
              <p>Published: {product?.isPublished ? "true" : "false"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
