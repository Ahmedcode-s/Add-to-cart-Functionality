import { TfiEmail } from "react-icons/tfi";

export default function Offers() {
    return (
        <main className="w-full flex justify-center items-center md:mt-20 mt-10 max-w-screen-2xl mx-auto">
            <div className="w-[358px] md:w-[80%] h-[293px] sm:h-[180px] bg-black text-white  flex flex-col sm:flex-row justify-center md:justify-between items-center md:p-16 rounded-[20px]">
                <h1 className="font-Integral text-2xl md:text-[40px] w-[70%] md:w-[50%] pb-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div className="space-y-4">
                    <div className="flex justify-start items-center sm:w-[349px] h-[48px] bg-[#F0F0F0] rounded-[62px] pl-3">
                        <TfiEmail className="text-lg sm:ml-2 text-gray-500" />
                        <input id="email" autoComplete="@gmail.com" placeholder="Enter your email address" className="w-full h-full bg-[#F0F0F0] rounded-[62px] ml-2 outline-none font-Satoshi font-normal text-sm md:text-[16px] text-black" />
                    </div>
                    <div className="flex justify-center items-center w-[311px] sm:w-[349px] h-[42px] sm:h-[48px] bg-[#F0F0F0] rounded-[62px]">
                        
                        <p className="text-black font-Satoshi "> Subscribe to Newsletter </p>
                    </div>

                </div>
            </div>
        </main>

    )
}
