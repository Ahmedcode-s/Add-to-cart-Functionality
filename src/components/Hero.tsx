import Image from "next/image";

export default function Hero(){
    return(
        <main className=" md:w-full w-full  h-[853px] md:h-[600px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1] overflow-hidden md:overflow-hidden max-w-screen-2xl mx-auto">
{/* left side  */}
<div className=' w-[350px] md:w-[900px] ml-2 pt-6 md:mt-20 md:ml-14 md:pl-20 text-left'>
    <h1 className="text-4xl md:text-7xl font-Integral ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
    <p className="text-[12px] md:text-base mt-3 md:mt-3 font-Satoshi text-[rgba(0,0,0,0.6)] max-w-80 sm:max-w-full" >Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
<button className="bg-black  py-2 px-32 md:py-2 md:px-10 rounded-[62px] mt-4 text-sm text-white border border-black hover:bg-transparent hover:text-black ">
    Shop Now
</button>
</div>
{/* Right side  */}
<div className="relative w-full md:w-[1000px] md:pr-20 flex justify-end">
  <Image  src={"/model.jpeg"} className="w-full h-full md:h-auto md:w-[610px]  md:ml-40 md:-mt-11 object-cover object-center"priority width={1440} height={663} alt="profile"></Image>
 
  <Image  src={"/star.png"} className=" w-[60px] md:w-[100px] absolute top-[25px] right-[20px] md:top-[50px] md:right-[75px]"  width={104} height={104} alt="profile"></Image>
  
  <Image  src={"/star2.png"} className=" w-[44px] md:w-[56px] absolute top-[110px] left-[20px] md:top-[250px] md:left-[100px]"  width={56} height={56} alt="profile"></Image>
</div>
        </main>
    )
}   