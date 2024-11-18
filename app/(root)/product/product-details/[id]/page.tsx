import { getProductByCategory, getSingleFunction } from "@/Request/Request";
import { Products } from "@/typing";
import { Star } from "lucide-react";
import React from "react";
import AddToCart from "./add-cart"; // Ensure consistent casing in component names
import ProductCard from "@/components/Home/ProductCard";
import Image from "next/image";

interface ProductDetailsProps {
  params: {
    id: string;
  };
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { id } = params;
  console.log(id);

  // Fetch product details and related products
  const singleProduct: Products = await getSingleFunction(id);
  const relatedProducts: Products[] = await getProductByCategory(singleProduct.category);

  // Calculate the number of filled stars based on the rating
  const filledStarsCount = Math.round(singleProduct?.rating?.rate) || 0; // Default to 0 if undefined
  const starArray = Array(filledStarsCount).fill(0);

  return (
    <div className="mt-20">
      {/* Define a grid system */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/* Product Details Section */}
        <div className="lg:col-span-3">
          <img src={singleProduct.image} alt={singleProduct.title} width={500} height={500} />
          <h1 className="text-2xl font-bold">{singleProduct.title}</h1>
          <div className="flex items-center">
            {starArray.map((_, index) => (
              <Star key={index} className="text-yellow-500" />
            ))}
            <span className="ml-2">{singleProduct.rating?.rate}</span>
          </div>
          <p className="mt-2">{singleProduct.description}</p>
          <AddToCart />
        </div>

        {/* Related Products Section */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;