import { getProductByCategory, getSingleFunction } from "@/Request/Request";
import { Products } from "@/typing";
import { Star } from "lucide-react";
import React from "react";
import AddToCart from "./add-cart"; // Ensure consistent casing in component names
import ProductCard from "@/components/Home/ProductCard";
import Image from "next/image";

// Define the type for the component props
type ProductDetailsProps = {
  params: Promise<{ id: string }>; // params is a Promise
};

// Example usage of the type
const productDetails: ProductDetailsProps = {
  params: Promise.resolve({ id: "123" }), // Simulating a resolved Promise
};

// This is a page component that can be async
const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const resolvedParams = await params; // Wait for the Promise to resolve
  const { id } = resolvedParams; // Now this correctly accesses the id property

  let singleProduct: Products;
  let relatedProducts: Products[] = [];

  try {
    // Fetch product details and related products
    singleProduct = await getSingleFunction(id);
    relatedProducts = await getProductByCategory(singleProduct.category);
  } catch (error) {
    console.error("Error fetching product data:", error);
    return <div>Error loading product details.</div>; // Handle error gracefully
  }

  // Calculate the number of filled stars based on the rating
  const filledStarsCount = Math.round(singleProduct?.rating?.rate) || 0; // Default to 0 if undefined
  const starArray = Array(filledStarsCount).fill(0);

  return (
    <div className="mt-20">
      {/* Define a grid system */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/* Product Details Section */}
        <div className="lg:col-span-3">
          <Image 
            src={singleProduct.image} 
            alt={singleProduct.title} 
            width={500} 
            height={500} 
            className="object-cover" // Optional: Control image display
          />
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