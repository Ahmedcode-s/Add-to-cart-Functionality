import Offers from "./Offers";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <main className="bg-[#F0F0F0] w-full h-full md:h-[450px] relative mt-52 max-w-screen-2xl mx-auto">
            <span className="absolute top-[-170px] w-full">
                <Offers/>
            </span>
            {/* Container */}
            <div className="flex h-full md:h-[400px] flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32">
            {/* top div */}
                <div className="flex flex-col justify-center items-center w-[248px] ">
                    <ul>
                        <h2 className="font-Integral text-2xl sm:text-3xl">Shop.co</h2>
                        <p className="font-Satoshi text-sm text-[rgba(0,0,0,0.6)] mt-5 sm:mt-5">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        {/* icons  */}
                        <div className="flex items-center space-x-3 mt-5 sm:mt-10">
                            <FaTwitter className=" text-xl"/>
                            <TiSocialFacebook className=" text-xl"/>
                            <FaInstagram className=" text-xl"/>
                            <FaGithub className=" text-xl"/></div>
                    </ul>
                </div>
                {/* Mid div  */}
                <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-4">
                    {/* box 1 */}

                    <ul className="space-y-3">
                        <h2 className="text-base sm:text-lg font-Satoshi">Company</h2>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">About</li>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">Features</li>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">Works</li>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">Career</li>
                    </ul>

                    {/* box 2 */}
                    <ul className="space-y-3">
                        <h2 className="text-base sm:text-lg font-Satoshi">HELP</h2>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">Customer Support</li>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">Delivery Details</li>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">Terms & Conditions</li>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">Privacy Policy</li>
                    </ul>
                    {/* box 3 */}
                    <ul className="space-y-3">
                        <h2 className="text-base sm:text-lg font-Satoshi">FAQ</h2>
                        <li className="text-sm font-Satoshi text-[rgba(0,0,0,0.6)]">Account</li>
                        <li className="text-sm font-Satoshi text-[rgba(0,0,0,0.6)]">Manage Deliveries</li>
                        <li className="text-sm font-Satoshi text-[rgba(0,0,0,0.6)]">Orders</li>
                        <li className="text-sm font-Satoshi text-[rgba(0,0,0,0.6)]">Payments</li>
                    </ul>
                    {/* box 4 */}
                    <ul className="space-y-3">
                        <h2 className="text-base sm:text-lg font-Satoshi">RESOURCES</h2>
                        <li className="text-sm  font-Satoshi  text-[rgba(0,0,0,0.6)]">Free eBooks</li>
                        <li className="text-sm  font-Satoshi  text-[rgba(0,0,0,0.6)]">Development Tutorial</li>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">How to-Blog</li>
                        <li className="text-sm font-Satoshi  text-[rgba(0,0,0,0.6)]">Youtube Playlist</li>
                    </ul>

                </div>
               
            </div>
             {/* Bottom div  */}
             <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
                    <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="flex items-center">
                        <Image src={"/footer1.png"} className="w-[50px]" width={100} height={100} alt="pic" />
                        <Image src={"/footer2.png"} className="w-[50px]" width={100} height={100} alt="pic" />
                        <Image src={"/footer3.png"} className="w-[50px]" width={100} height={100} alt="pic" />
                        <Image src={"/footer4.png"} className="w-[50px]" width={100} height={100} alt="pic" />
                        <Image src={"/footer5.png"} className="w-[50px]" width={100} height={100} alt="pic" />
                    </div>
                </div>
        </main>
    )
}