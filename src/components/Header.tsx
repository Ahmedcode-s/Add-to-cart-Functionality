"use client"

import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { SheetSide } from "./Sheet";

import { useSelector } from "react-redux";

export default function Header() {
const cart =  useSelector((state:any)=>state.cart)

    return (
        <header className="w-full  h-[90px] bg-white flex justify-between items-center max-w-screen-3xl mx-auto">
            <div className="flex justify-center items-center">
                <SheetSide />
                <Link href={"/"}>
                <h1 className="text-xl sm:text-4xl font-bold pl-4 md:pl-2 md:ml-12 font-Integral md:pl-30 md:pr-0 md:mr-0">
                    SHOP.CO
                </h1>
                </Link>
            </div>
            <ul className="hidden md:block font-Satoshi">
                <li className="space-x-10 flex items-center">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/products"}>Products</Link>
                    <Link href={"/DressStyles"}>Browse Styles</Link>
                </li>
            </ul>

            {/* search input */}
            <div className="hidden md:block">
                <div className="flex justify-start items-center w-[600px] h-[40px] bg-[#F0F0F0] rounded-[62px]">
                    <FaMagnifyingGlass className="text-xl ml-2" />
                    <input id="search-bar" placeholder="Search for products..." className="w-full h-full bg-[#F0F0F0] rounded-[62px] ml-2 outline-none " />
                </div>

            </div>

            {/* cart */}
            <div className="flex items-center md:mr-7 space-x-5 pr-4 md:pr-10">
                <FaMagnifyingGlass className="text-xl ml-2 md:hidden " />
             <Link href={"/cart"} className="relative hidden lg:block">   <FiShoppingCart className="text-2xl w-7 h-7 stroke-2" />
             {cart.length > 0 && (
                <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[15px] h-[15px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
             )
             }
             </Link>

                <CgProfile className="text-2xl w-7 h-7 stroke-0" />
                <div className="flex items-center justify-center  lg:hidden  ">
                <Link href={"/cart"} className="relative"><FiShoppingCart className="text-2xl w-7 h-7 stroke-2 " />
                {cart.length > 0 && (
                <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[15px] h-[15px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
             )
             }
                </Link>

            </div>
            </div>
           

        </header>
    );
}
