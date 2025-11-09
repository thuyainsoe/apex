import partner_1 from "@/public/partners/partner_1.png";
import partner_2 from "@/public/partners/partner_2.png";
import partner_3 from "@/public/partners/partner_3.png";
import partner_4 from "@/public/partners/partner_4.png";
import partner_5 from "@/public/partners/partner_5.png";
import Image from "next/image";

const Solutions = () => {
  return (
    <div className="main-container w-full pt-20 pb-20 relative">
      <div className="w-full flex flex-col items-start gap-10">
        <div className="text-center w-full text-[#297FDF] text-[42px] font-bold flex items-center justify-center">
          Solutions & Trusted Partners
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <div className="font-inter text-[20px] text-[#A3A3A3] z-20">05</div>
          <div className="text-[32px] font-semibold text-stroke z-20">
            Our Solutions & Partners
          </div>
          <div className="text-[18px] font-inter text-[#999999]">
            Leveraging cutting-edge technologies and strategic partnerships to
            deliver exceptional results.
          </div>
        </div>
        <div className="grid grid-cols-5 w-full gap-2">
          <Image
            src={partner_1}
            width={241}
            height={124}
            className="w-full aspect-241/124"
            alt="partner"
          />
          <Image
            src={partner_2}
            width={241}
            height={124}
            className="w-full aspect-241/124"
            alt="partner"
          />
          <Image
            src={partner_3}
            width={241}
            height={124}
            className="w-full aspect-241/124"
            alt="partner"
          />
          <Image
            src={partner_4}
            width={241}
            height={124}
            className="w-full aspect-241/124"
            alt="partner"
          />
          <Image
            src={partner_5}
            width={241}
            height={124}
            className="w-full aspect-241/124"
            alt="partner"
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
