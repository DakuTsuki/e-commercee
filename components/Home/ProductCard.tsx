"use client";

import React from "react";
import { Products } from "@/typing";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/store/cartSlice";
import { RootState } from "@/store/store";

type Props = {
  products: Products;
};

const ProductCard = ({ products }: Props) => {
  const num = Math.round(products.rating.rate);
  const ratingArry = new Array(num).fill(0);


  const dispatch = useDispatch();

  const addToCartHandler =(product:Products) =>{
    dispatch(addItem(product))
  }

  return (
    <div className="p-4">
      <div className="w-[200px] h-[150px]">
        <Image
          src={products.image}
          alt={products.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
{/* Category */}
      <p className="mt-5 text-xs capitalize text-gray-600">{products.category}</p>
      {/* Title */}
      <Link href={`/product/product-details/${products.id}`}>
      <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">{products.title}</h1>
      </Link>
      {/* Rating */}
      <div className="flex items-center">
        {ratingArry.map((_)=> {
          return <StarIcon key={Math.random() * 1000} size={16} fill="yellow" className="text-yellow-500"/>
        })}
      </div>
{/* Pricing */}
<div className="flex mt-2 items-center space-x-2">
  <p className="text-black text-base line-through font-semibold opacity-50">${` ${(products.price + 10).toFixed(2)}`}</p>
  <p className="text-black text-lg font-bold opacity-80">${products.price}</p>
</div>
{/* Buttons */}
<div className="mt-4 items-center space-x-2">

  <Button onClick={()=>{
    addToCartHandler(products)
  }} size={"icon"} className="bg-black">
    <ShoppingBag size={18}/>
  </Button>
  <Button size={'icon'} className="bg-red-500">
    <Heart size={18}/>
  </Button>
</div>
    </div>
  );
};

export default ProductCard;
