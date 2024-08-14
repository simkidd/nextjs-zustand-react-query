import ProductsList from "@/components/ProductsList";
import { getQueryClient } from "@/tanstack/get-query-client";
import { productsOptions } from "@/tanstack/queries/products";
import {
  dehydrate,
  HydrationBoundary
} from "@tanstack/react-query";
import Link from "next/link";

const ShopPage = async () => {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(productsOptions)

  // Dehydrate the queryClient state
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="w-full min-h-dvh">
      <div className="container mx-auto px-2 py-8">
        <Link href="/" className="px-6 py-4 bg-indigo-600">
          Go Home
        </Link>
      </div>
      <div>
        <HydrationBoundary state={dehydratedState}>
          <ProductsList />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default ShopPage;
