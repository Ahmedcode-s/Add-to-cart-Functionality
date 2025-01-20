import Image from "next/image";


export default function Dress() {
    return (
        <div className="flex justify-center max-w-screen-2xl mx-auto mt-20">
            <div className="md:w-[1239px] w-[350px] md:h-[866px] h-[975px] bg-[#F0F0F0] md:rounded-[40px] rounded-[20px] flex flex-col items-center ">
                {/* Top Heading div */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-Integral md:pt-16 pt-10 sm:pl-0  max-w-60 sm:max-w-full text-center sm:text-left">
                        BROWSE BY DRESS STYLE
                    </h1>
                </div>
                {/* Bottom Images div */}
                <div className=" flex flex-wrap md:gap-3 md:pl-16 pl-4 space-y-4 sm:space-y-0 md:pt-20 pt-10 ">
                    {/* Image 1 */}
                    <div className="md:w-[407px] w-[310px] md:h-[289px] h-[190px] rounded-[20px] relative">
                        <Image
                            alt="dress" className="object-cover md:w-[407px] w-[310px] md:h-[289px] h-[190px] rounded-[20px]" src={"/dress1.png"} width={407} height={289} />
                            <span className="absolute top-6 left-9 font-Satoshi text-4xl font-bold">Casual</span>
                    </div>
                    {/* Image 2 */}
                    <div className="md:w-[684px] w-[310px] md:h-[289px] h-[190px] relative">
                        <Image src={"/dress2.png"} alt="dress" width={684} height={289} className="object-cover object-left-top md:w-[684px] w-[310px] md:h-[289px] h-[190px] rounded-[20px]"></Image>
                        <span className="absolute top-6 left-9 font-Satoshi text-4xl font-bold">Formal</span>
                    </div>
                    {/* Image 3 */}

                    <div className="md:w-[684px] w-[310px] md:h-[289px] h-[190px] relative ">
                        <Image src={"/dress3.png"} alt="dress" width={684} height={289} className="object-cover object-left-top md:w-[684px] w-[310px] md:h-[289px] h-[190px] rounded-[20px]"></Image>
                        <span className="absolute top-6 left-9 font-Satoshi text-4xl font-bold">Party</span>

                    </div>
                    {/* Image 4 */}

                    <div className="md:w-[407px] w-[310px] md:h-[289px] h-[190px] relative">

                        <Image
                            alt="dress"
                            className="object-cover object-[0px_0px]  md:w-[407px] w-[310px] md:h-[289px] h-[190px]   rounded-[20px]"
                            src={"/dress4.png"}
                            width={407}
                            height={289}
                        />
                            <span className="absolute top-6 left-9 font-Satoshi text-4xl font-bold">Gym</span>

                    </div>
                </div>
            </div>
        </div>
    );
}