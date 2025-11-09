import Image from "next/image";
import logo from "@/public/logo.svg";
import downIcon from "@/public/icons/down-arrow.svg";
const Hero = () => {
  return (
    <div className="w-full main-container ">
      {" "}
      <div className="relative w-full flex flex-col items-start justify-between px-[50px] pt-[50px] rounded-[30px] aspect-1341/748 bg-linear-to-b from-[#ffffff] via-[#8e6fd6] to-[#317ddc]">
        <div className="w-full flex items-center justify-between">
          <Image src={logo} width={228} height={76} alt="logo" />
          <ul className="flex items-center gap-7 text-white bg-[#110B3726] py-5 px-[50px] rounded-[30px] text-sm">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Our Approach</li>
            <li className="cursor-pointer">Our Partners</li>
          </ul>
          <div className="w-40 flex items-center justify-center h-[60px] bg-white rounded-4xl text-sm">
            Contact Us
          </div>
        </div>
        <div className="h-[calc(100%-78px)] flex flex-col items-center justify-center  w-full gap-5">
          <h2 className="text-[50px] text-white font-extrabold leading-[100%] text-center text-nowrap font-inter">
            We Transform Your Idea To Products
          </h2>
          <div className="text-[24px] text-white font-medium font-inter">
            We Make Your Brand Definitive.We Build The Digital Bridges
          </div>
          <button className="mt-2.5 w-[169px] h-[60px] flex items-center justify-center text-white text-sm border border-white rounded-4xl">
            Explore now
          </button>
          <div className="w-[60px] h-[60px] rounded-full bg-[#EEF6FF33] flex items-center justify-center mt-2.5">
            <Image src={downIcon} width={24} height={24} alt="down-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
