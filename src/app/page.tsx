import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-dvh">
      <div className="container mx-auto px-2 py-8">
        <div className="flex items-center justify-center">
          <Link href="/shop" className="px-6 py-4 bg-indigo-600">See all products</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
