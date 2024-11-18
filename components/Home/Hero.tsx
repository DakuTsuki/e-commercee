import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col ">
      {/* Define Grid */}
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            Mega Sales <span className="text-rose-600">Special</span> Offer up to{" "}
            <span className="text-orange-500">60%</span> Off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nostrum debitis facere blanditiis labore officia illo ea repudiandae ratione sed tempora dignissimos, maxime temporibus voluptatum enim tempore error molestias doloremque!
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Button size={'lg'} className='bg-blue-700'>Shop Now</Button>
            <Button size={'lg'} className="bg-black">Explore More</Button>
          </div>
        </div>
        {/* Image Content */}
        <div className="hidden lg:block">
          <Image 
            src='/images/hero.svg' 
            alt="hero" 
            width={600} 
            height={600} 
            className="lg:h-[50%] lg:w-[50%] xl:w-[80%] xl:h-[80%]"
            priority // Optional: Use if this image is critical for the initial load
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;