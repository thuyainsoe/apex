import Image from "next/image";
import who_we_are_image from "@/public/what_we_are.png";
import wwr_circle from "@/public/icons/wwr_circle.svg";
import wwr_rectangle from "@/public/icons/wwr_rectangle.svg";
import wwr_big_circle from "@/public/icons/wwr_big_circle.svg";
import logo from "@/public/icons/logo.svg";

const WhoWeAre = () => {
  return (
    <div className="w-full main-container">
      <div className="w-full flex flex-col aspect-1340/624">
        <div className="w-full flex items-center justify-between relative">
          {/* left section */}
          <div className="w-1/2 flex flex-col items-start gap-2">
            <div className="font-inter text-[20px] text-[#A3A3A3] z-20">01</div>
            <div className="text-[32px] font-semibold text-stroke z-20">
              About Us
            </div>
            <div className="text-left text-[18px] font-inter text-[#999999] z-20">
              We’re a forward-thinking software house built by innovators,
              designers, and problem-solvers who believe technology should be
              simple, human, and impactful. From idea to execution, we craft
              digital solutions that help businesses move faster and smarter in
              the connected world. At our core, we’re not just building software
              — we’re shaping the future of how people and products connect.
            </div>
            <Image
              src={wwr_circle}
              width={270}
              height={270}
              className="w-[17%] aspect-square absolute left-0 top-[10%] z-1"
              alt="small circle"
            />
            <Image
              src={wwr_rectangle}
              width={42}
              height={217}
              className="w-[3%] aspect-42/217 absolute left-0 bottom-[10%] z-1"
              alt="small circle"
            />
          </div>
          {/* right section */}
          <div className="w-1/2 flex justify-end relative">
            <Image
              src={who_we_are_image}
              width={500}
              height={500}
              className="w-[77%] z-20"
              alt="what we are"
            />
            <Image
              src={wwr_big_circle}
              width={500}
              height={500}
              className="w-[77%] aspect-square absolute top-1/2 -translate-y-1/2 right-0 z-1"
              alt="what we are"
            />
            <Image
              src={logo}
              width={77}
              height={77}
              className="w-[77px] aspect-square absolute top-[10%] left-[45%] z-30"
              alt="what we are"
            />
          </div>
          {/* who we are */}
          <h2 className="text-center absolute top-10 left-1/2 -translate-x-1/2 font-bold text-[#297FDF] text-[42px]">
            WHO WE ARE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
