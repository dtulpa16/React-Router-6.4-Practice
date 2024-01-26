import React from "react";
import { useLoaderData } from "react-router-dom";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
export default function ProductList() {
  const data = useLoaderData();
  const products = data as Product[];
  return (
    <div
      className="w-full bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="w-full max-w-[1292px] mx-auto py-12 flex flex-wrap gap-8 justify-center">
        {products
          ? products.map((el) => <ProductCard key={el._id} product={el} />)
          : null}
      </div>
    </div>
  );
}
