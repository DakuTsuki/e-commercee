"use client";

import { Button } from "@/components/ui/button";
import { addItem, CartItem } from "@/store/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Products } from "@/typing";
import { useToast } from "@/hooks/use-toast";

const AddtoCart = ({ products }: { products: Products }) => {
  const dispatch = useDispatch();

  const {toast} = useToast()
  const addCartHandler = () => {
    toast({
      description: "Item Added to the cart",
      variant: "success"
    });
    dispatch(addItem(products));
  }

  return (
    <Button
      onClick={() => {
        addCartHandler();
      }}
      className="mt-6 bg-black"
    >
      {" "}
      Add To Cart
    </Button>
  );
};

export default AddtoCart;
