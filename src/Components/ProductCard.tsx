import { Product } from "@/types";
import React from "react";
import { useNavigate } from "react-router-dom";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate()
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p className=" text-white font-bold text-xl">${product.price}</p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={()=>navigate(`/products/${product._id}`)}>Details</button>
        </div>
      </div>
    </div>
  );
}
