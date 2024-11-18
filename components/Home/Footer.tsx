import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/* Define Grid System */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* 1st Part */}
      <div>
        <h1 className='text-[25px] uppercase font-semibold text-black mb-4'>WDWShop</h1>
        <p className='text-sm text-black opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere eaque sunt illo! Distinctio enim eaque doloremque tempore reprehenderit rem laboriosam qui, alias recusandae dicta quidem, odio, dolor cum fuga.</p>
        <p className='text-base mt-6 text-black opacity-80'>(+000) 12345678 - <br />
          info@example.com
        </p>
      </div>
      {/* 2nd Part */}
      
      <div className="lg:mx-auto">
        <h1 className='footer_title'>Information</h1>
        <p className='footer_link'>About Us</p>
        <p className='footer_link'>Privacy Police</p>
        <p className='footer_link'>Return Policy</p>
        <p className='footer_link'>DropShipping</p>
        <p className='footer_link'>Shipping Policy</p>
        {/* <p className='footer_link'>About Us</p> */}
      </div>
      {/* Third Part */}

      <div className="lg:mx-auto">
        <h1 className='footer_title'>Account</h1>
        <p className='footer_link'>Dashboard</p>
        <p className='footer_link'>My Orders</p>
        <p className='footer_link'>Account Details</p>
        <p className='footer_link'>Track Orders</p>
        {/* <p className='footer_link'>Shipping Policy</p> */}
        {/* <p className='footer_link'>About Us</p> */}
      </div>
      {/* 4th Part */}

      <div className="lg:mx-auto">
        <h1 className='footer_title'>Shop</h1>
        <p className='footer_link'>Affiliate</p>
        <p className='footer_link'>Best Sellers</p>
        <p className='footer_link'>Latest Products</p>
        <p className='footer_link'>Sale Product</p>
        {/* <p className='footer_link'>Shipping Policy</p> */}
        {/* <p className='footer_link'>About Us</p> */}
      </div>
      </div>

{/* CopyRight */}
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 justify-between w-4/5  mx-auto'>
      <p> Copyright DakuTsuki 2024</p>
      <Image src='/images/pay.svg' alt='pay' width={230} height={230}className='object-contain sm:ml-auto'/>
      </div>
    </div>
  )
}

export default Footer