// Import fonts

import Image from "next/image";
import React from 'react'

export default function Fonts() {
    return (
        <div className="bg-black w-full h-[122px] md:w-full flex flex-wrap justify-center space-x-4 md:justify-between items-center md:px-32 md:text-sm text-[12px] px-3 ">
            
            <Image src={"/Vector.png"} className=" w-[100px] h-[23px] md:w-[166px] md:h-33 pr-1" width={166} height={33} alt="profile"></Image>
            <Image src={"/zara.png"} className=" w-[50px] md:w-[80px] " width={91} height={38} alt="profile"></Image>
            <Image src={"/gucci.png"} className=" w-[100px] md:w-[156px] " width={156} height={36} alt="profile"></Image>
            <Image src={"/prada.png"} className=" w-[100px] md:w-[156px] " width={194} height={32} alt="profile"></Image>
            <Image src={"/calvin.png"} className=" w-[110px] md:w-[156px] " width={206} height={32} alt="profile"></Image>
           
            


        </div>
    )
}