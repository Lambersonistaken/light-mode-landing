import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png"
import Image from "next/image";

export const Header = () => {
  return (
    <header>
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
          <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
          </div>
        </div>
        <div className="py-5">
          <div className="container">
          <Image src={Logo} alt="logo" height={40} width={40} />
          </div>
        </div>
    </header>
    
  )
};
