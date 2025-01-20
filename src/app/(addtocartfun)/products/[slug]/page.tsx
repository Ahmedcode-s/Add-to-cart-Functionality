"use client"

import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../Redux/features/cartSlice';


let star = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />]



function SlugPage({ params }: { params: { slug: string } }) {
    const products = useSelector((state: any) => state.product)
    const data:any = products.find((item: any) => item.slug == params.slug)
    //useState
const dispatch = useDispatch();

    const [cartItem, setcartItem] = useState(
        {
            id: data.id,
            title: data.title,
            image: data.image,
            slug: data.slug,
            price: data.price,
            description: data.description,
            size: data.size,
            color: data.color,
            qty: data.qty ||  1,
            discount: data.discount,
            rating: data.rating


        }
    )


    return (
        <>
            <hr className="mx-36" />
            <div className="flex flex-col md:flex-row justify-evenly md:-space-x-32 mt-10 md:mt-10 px-4 md:px-0 bg-white max-w-screen-2xl mx-auto">
                {/* left */}
                <div className="md:w-auto md:h-auto space-x-3 sm:space-x-0 md:space-y-3 mt-3 sm:mt-0 flex md:block justify-start  md:justify-start order-2 sm:order-1">
                    {/* Images */}
                    <Image
                        src={data.image[0]}
                        className="w-[111px] h-[106px] md:w-[152px] md:h-[167px] object-cover rounded-[20px]"
                        alt={data.title}
                        width={152}
                        height={168}
                    />
                    <Image
                        src={data.image[1]}
                        className="w-[111px] h-[106px] md:w-[152px] md:h-[168px] object-cover rounded-[20px]"
                        alt={data.title}
                        width={152}
                        height={167}
                    />
                    <Image
                        src={data.image[2]}
                        className="w-[111px] h-[106px] md:w-[152px] md:h-[167px] object-cover  rounded-[20px]"
                        alt={data.title}
                        width={152}
                        height={167}
                    />
                </div>
                {/* Mid image */}
                <div className="w-auto h-auto flex justify-center order-1 sm:order-2">
                    <Image
                        src={data.image[0]}
                        alt={data.title}
                        width={444}
                        height={530}
                        className="object-cover w-[358px] md:w-[444px] h-[290px] md:h-[530px] rounded-[20px]"
                    />
                </div>
                {/* Right div */}
                <div className="w-full md:w-[600px] h-auto mt-5 md:mt-0 text-left order-3 ">
                    <h1 className="font-Integral text-2xl md:text-4xl">{cartItem.title}</h1>
                    <div className="flex text-yellow-500 mt-4">{star.map((icon, index) => (
                        <span key={index}>{icon}</span>
                    ))}</div>
                    <p className="text-2xl md:text-3xl font-bold mt-4 flex items-center font-Satoshi">
                        {cartItem.price * cartItem.qty}

                        {cartItem.discount && (
                            <span className="w-[62px] md:w-[72px] h-[31px] md:h-[34px] ml-2 bg-[#ff3333] bg-opacity-10 text-[#FF3333] text-sm md:text-normal rounded-full flex justify-center items-center line-through">
                                {(cartItem.price * cartItem.qty) - (cartItem.price * cartItem.discount * cartItem.qty) / 100}
                            </span>
                        )}
                    </p>
                    <p className="mt-4 text-[rgba(0,0,0,0.6)] text-sm md:text-base font-Satoshi">
                        {cartItem.description}
                    </p>
                    <hr className="mt-5" />

                    {/* Select color */}
                    <div className="mt-5">
                        <p className="text-[rgba(0,0,0,0.6)] text-sm md:text-base font-Satoshi">Select Colors</p>
                        <div className="flex space-x-4 pt-3">
                        {
                            data.color.map((item:any,i:any)=>{
                                return <button key={i} onClick={()=>setcartItem({...cartItem,color:item})}  className="w-[37px] h-[37px] active:outline rounded-full flex justify-center items-center"
                        style={{backgroundColor:item}}> </button>
                        
                            })
                        }
                        </div>
                    </div>
                    <hr className="mt-5" />
                    {/* Choose Size */}
                    <div>
                        <p className="mt-5 text-[rgba(0,0,0,0.6)] text-sm md:text-base font-Satoshi">Choose Size</p>
                        <div className="flex space-x-3 mt-4 font-Satoshi">
                           {
                            data.size.map(( item:any, i:any)=>{
                                return   <button onClick={()=>setcartItem({...cartItem,size:item})} key={i} className="w-[74px] md:w-[86px] h-[39px] md:h-[46px] text-sm sm:text-base bg-[#F0F0F0] flex justify-center items-center rounded-[62px] text-[rgba(0,0,0,0.6)] hover:bg-black hover:text-white">
                                    {item}
                                </button> 
                            })
                           }
                           
                        
                        </div>
                    </div>
                    <hr className="mt-5" />

                    {/* Button */}
                    <div className="flex justify-start items-center space-x-5 mt-8 font-Satoshi">
                        <button className="w-[110px] md:w-[170px] h-[44px] md:h-[52px] gap-2  bg-[#F0F0F0] flex md:justify-between items-center rounded-[62px] px-6">
                            <Minus onClick={()=>setcartItem({...cartItem,qty:cartItem.qty <= 1? 1: --cartItem.qty })} 
                            className="w-[20px] md:w-[24px]" />
                            <span>{cartItem.qty}</span>
                            <Plus onClick={(()=>setcartItem({...cartItem, qty:++cartItem.qty}))} className="w-[20px] md:w-[24px]" />
                        </button>
                        <Button onClick={()=>dispatch(addtocart(cartItem))} 
                        className="bg-black text-white w-[236px] md:w-[400px] h-[44px] md:h-[52px] text-sm sm:text-base rounded-[62px] font-Satoshi hover:border-black hover:bg-white hover:text-black">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SlugPage     
