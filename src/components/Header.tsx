import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { SheetSide } from "./Sheet";

export default function Header() {
    return (
        <header className="w-full h-[90px] bg-white flex justify-between items-center max-w-screen-3xl mx-auto">
            <div className="flex justify-center items-center">
                <SheetSide />
                <h1 className="text-xl sm:text-4xl font-bold pl-4 md:pl-2 md:ml-12 font-Integral md:pl-30 md:pr-0 md:mr-0">
                    SHOP.CO
                </h1>
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
             <Link href={"/cart"}>   <FiShoppingCart className="text-2xl w-7 h-7 stroke-2" /></Link>
                <CgProfile className="text-2xl w-7 h-7 stroke-0" />
            </div>

        </header>
    );
}
