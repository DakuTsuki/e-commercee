import { getProductByCategory, getSingleFunction } from "@/Request/Request";
import { Products } from "@/typing";
import { Star, StarIcon } from "lucide-react";
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
        {/* image */}
        <div className="col-span-3 mb-6 lg:mb-0">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            width={500}
            height={500}
            className="object-cover" // Optional: Control image display
          />
        </div>
        {/* Content */}

        <div className="col-span-4">
          {/* Title */}
          <h1 className="lg:text-3xl text-2xl font-bold text-black">
            {singleProduct.title}
          </h1>
          {/* review */}
          <div className="flex items-center mt-2 space-x-2">
            <div className="flex items-center">
              {starArray.map((star) => (
                <StarIcon
                  key={Math.random() * 1000}
                  size={20}
                  fill="yellow"
                  className="text-yellow-500"
                />
              ))}
            </div>
          </div>
          <p className="text-base text-gray-700 font-semibold">
            ( {singleProduct.rating?.rate} Review)
          </p>
          {/* Line */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
          {/* Price */}
          <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold text-blue-950">
            ${singleProduct?.price.toFixed(2)}
          </h1>

          {/* Description */}

          <p className="mt-2">{singleProduct.description}</p>
          {/* Extra info */}
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            Category : {singleProduct?.category}
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            Tag : Shop,WDW
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            SKU : (Math.random() * 500)
          </p>
          {/* Addtocart */}
          <AddToCart products={singleProduct} />
        </div>
      </div>

      {/* Related Products Section */}
      <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
