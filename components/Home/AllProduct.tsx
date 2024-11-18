"use client";
import { getAllProduct } from "@/Request/Request";
import { Products } from "@/typing";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProduct = () => {
  const [products, setProducts] = useState<Products[] | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(products);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products: Products[] = await getAllProduct();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className="pt-1 pb-12 ">
      <h1 className="text-center font-bold text-2xl">All Product</h1>

      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <Loader size={32} className="animate-spin" />
        </div>
      ) : (
        <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {products?.map((product) => {
            return <ProductCard key={product.id} products={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllProduct;
