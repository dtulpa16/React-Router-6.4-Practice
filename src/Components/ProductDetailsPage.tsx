import React from "react";
import { Product } from "@/types";
import { useLoaderData } from "react-router-dom";
export default function ProductDetailsPage() {
  const data = useLoaderData();
  const product = data as Product;
  console.log(product);
  return (
    <div
      className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="max-w-2xl w-full p-8 bg-blue-600 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <img
          className="w-full h-96 object-cover mb-6 rounded"
          src="https://i.pinimg.com/originals/ea/b7/af/eab7af8911e2006b0dfc3565e15cfede.png"
          alt={product.name}
        />
        <p className="text-lg mb-6">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">${product.price}</span>
          <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
