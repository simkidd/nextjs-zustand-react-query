import ProductsList from "@/components/ProductsList";
import { getProducts } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  // Dehydrate the queryClient state
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="container mx-auto px-4">
      <HydrationBoundary state={dehydratedState}>
        <ProductsList />
      </HydrationBoundary>
    </main>
  );
}
