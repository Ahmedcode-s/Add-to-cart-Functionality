import Fonts from "@/components/Fonts";
import Hero from "@/components/Hero";
import Image from "next/image";
import Dress from "./DressStyles/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Fonts/>
      <Dress/>
    </div>
  );
}
