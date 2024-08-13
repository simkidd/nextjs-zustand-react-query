"use client";
import { Product } from "@/interfaces/product.interface";
import { getProducts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const ProductsList = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log("homepage products>>>", products);


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="">
      <h1>Products</h1>
      <ul className="grid md:grid-cols-4 grid-cols-2 gap-8">
        {products.map((product: Product) => (
          <li key={product._id}>
            <div>
              <Image
                src={product?.images[0]?.url}
                alt={product?.name}
                width={300}
                height={300}
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>Published: {product.isPublished ? "true" : "false"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
