"use client"


import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { useSelector } from 'react-redux';



let star = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />]


function Products() {
    const products = useSelector((state:any)=>state.product)
    return (
        <div className="w-full h-full max-w-sceeen-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-Integral text-center mt-20">PRODUCTS</h1>

            {/* Card  */}
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-32 mt-16">
                {
                    // The i is for index 
                    products.map((data: any, i:any) => {
                        return (
                            <div className="mb-20 sm:mb-0 " key={i}>
                                
                                <Link href={`/products/${data.slug}`}> 
                                <div className="w-[296px] h-[300px] bg-[#F0EEED] rounded-[20px] overflow-hidden">
                                    <Image src={data.image[0]} alt={data.title} width={296} height={444} className={`object-contain -mt-20 ${data.id === 2 ? "pt-3" : ""}`}>

                                    </Image>
                                </div>
                                </Link>
                                <div>
                                    <p className="text-xl mt-2 font-satoshi font-semibold mb-2">{data.title}</p>
                                    <p className="flex text-[#ffe032]">{star.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))} <span className="text-sm text-black px-3 font-Satoshi">{data.rating}</span></p>
                                    <p className="font-bold mt-1 flex items-center">
                                        <span className="text-2xl font-Satoshi">{data.price}</span>


                                        {data.discount && ( // Only render the discount badge if data.discount exists
                                            <span className="bg-[#ff3333] font-Satoshi bg-opacity-10 text-[#FF3333] text-xs w-[58px] h-[28px] ml-2 rounded-full flex justify-center items-center">
                                                {data.discount}
                                            </span>
                                        )}
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Products
